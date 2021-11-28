import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {
    Content,
    PriceSection,
    SelectTag,
    Text,
    Wrapper,
    CategoryWrapper,
} from "./AddItem.styles";

import {ref, uploadBytes, getDownloadURL, getStorage} from "firebase/storage";
import {AuthTokenContext} from "../../App";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {object, string, TypeOf} from "zod";
import {NewProduct, postNewItem} from "../../API";
import Spinner from "../Spinner";
import {useHomeFetch} from "../../hooks/useHomeFetch";
import {AuthState} from "../../reducer/reducer";


const createNewItemInputSchema = object({
    name: string().nonempty({
        message: "name is required",
    }),
    description: string().nonempty({
        message: "description is required",
    }),
    category: string(),
    my_category: string(),
    price: string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received a string",
    }),
    quantity: string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received a string",
    }),
});
type CreateNewItemInput = TypeOf<typeof createNewItemInputSchema>;

type Props = {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const AddItem: React.FC<Props> = ({setState}) => {
    const [toggle, setToggle] = useState(false);
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const context = useContext(AuthTokenContext);
    let product = context.tokenState.product;
    const edit = context.tokenState.isEdit
    let defaultField;
    const categories = context.tokenState.category
    if (product.name.length > 0) {
        defaultField = {
            name: product.name,
            description: product.description,
            price: product.price.toString(),
            category: product.category,
            quantity: product.quantity.toString(),
            my_category: product.category

        }
    } else {
        defaultField = {
            name: "",
            description: "",
            price: "",
            category: categories !== undefined ? categories[0] : "No category",
            quantity: "",
            my_category: "empty",
        }
    }

    const {
        register,
        formState: {errors},
        reset,
        handleSubmit,
    } = useForm<CreateNewItemInput>({
        resolver: zodResolver(createNewItemInputSchema),
        defaultValues: defaultField
    });

    const selectCategory = (
        <SelectTag>
            {categories.map(category => (
                <option key={category} value={category} {...register("category")}>{`${category}`}</option>))}
        </SelectTag>
    );

    const uploadImage = async () => {
        if (file) {
            const storageRef = ref(getStorage(), file.name);
            try {
                await uploadBytes(storageRef, file);
                const imageUrl = await getDownloadURL(ref(getStorage(), file.name));
                console.log(imageUrl);
                return imageUrl;
            } catch (e: any) {
                console.log(e.message);
                return "";
            }
        } else if (product.name.length > 0) {
            return product.imageUrl;
        }
        return "";
    };

    const onSubmit = async (input: CreateNewItemInput) => {
        console.log(input);
        setLoading(true);
        try {
            const imageUrl = await uploadImage();
            const data: NewProduct = {
                id: product.name.length > 0 ? product.id : "",
                inventory: product.name.length > 0 ? product.inventoryId : "",
                name: input.name,
                description: input.description,
                price: Number(input.price),
                quantity: Number(input.quantity),
                category: input.my_category.trim().length > 0 && input.my_category !== "empty" ? input.my_category.trim() : input.category,
                imageUrl,
            };
            await postNewItem(data, context.tokenState.token, edit);
            setLoading(false)
            setState((prevState => !prevState))
            reset({category: "", price: "", description: "", quantity: "", name: ""})
        } catch (e: any) {
            console.log(e);
            setLoading(false)
        }
    };
    console.log(errors);

    const buttonText = !toggle ? "new" : "select";
    return (
        <Wrapper>
            <Content>
                <Text>Add a new Item</Text>
                <label>
                    Name
                    <input type="text" placeholder={"Enter Name"}  {...register("name")} />
                </label>
                <label>Category</label>
                <CategoryWrapper>
                    {!toggle ? (
                        selectCategory
                    ) : (
                        <input
                            type="text"
                            placeholder={"Enter Category"}
                            {...register("my_category")}
                        />
                    )}
                    <button onClick={() => setToggle(!toggle)}>{buttonText}</button>
                </CategoryWrapper>
                <PriceSection>
                    <label>
                        Price(Kshs.)
                        <input type="number"  {...register("price")} />
                    </label>
                    <label>
                        Quantity
                        <input type="number" {...register("quantity")} />
                    </label>
                </PriceSection>
                <label>
                    Description
                    <textarea
                        placeholder={"Enter a description"}
                        {...register("description")}
                    />
                </label>
                <label>
                    Image
                    <input
                        type="file"
                        id="custom-file-input"
                        // @ts-ignore
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
            </Content>
            <div id="div-button">
                {loading
                    ? <Spinner/>
                    : <>
                        <button id="cancel" onClick={() => {
                            reset({category: "", price: "", description: "", quantity: "", name: ""})
                            if (!edit) {
                                context.tokenDispatch({type: AuthState.EDIT_ITEM, payload: true})
                            }
                        }
                        }>cancel
                        </button>
                        <button id="save" onClick={handleSubmit(onSubmit)}>
                            Save
                        </button>
                    </>}
            </div>
        </Wrapper>
    );
};

export default AddItem;
