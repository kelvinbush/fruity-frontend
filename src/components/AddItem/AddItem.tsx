import * as React from "react";
import {useContext, useState} from "react";
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
// @ts-ignore
import {zodResolver} from "@hookform/resolvers/zod";
import {number, object, string, TypeOf} from "zod";
import {NewProduct, postNewItem} from "../../API";

type Props = {};

const createNewItemInputSchema = object({
    name: string().nonempty({
        message: "name is required",
    }),
    description: string().nonempty({
        message: "description is required",
    }),
    category: string().nonempty({
        message: "category is required",
    }),
    price: string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received a string",
    }),
    quantity: string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received a string",
    }),
});
type CreateNewItemInput = TypeOf<typeof createNewItemInputSchema>;

function AddItem(props: Props) {
    const [toggle, setToggle] = useState(false);
    const [file, setFile] = useState<File>();
    const context = useContext(AuthTokenContext);
    const {
        register,
        formState: {errors},
        reset,
        handleSubmit,
    } = useForm<CreateNewItemInput>({
        resolver: zodResolver(createNewItemInputSchema),
    });

    const selectCategory = (
        <SelectTag>
            <option value="rigatoni">Rigatoni</option>
            <option value="dave">Dave</option>
            <option value="pumpernickel">Pumpernickel</option>
            <option value="reeses">Reeses</option>
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
        }
    };

    const onSubmit = async (input: CreateNewItemInput) => {
        try {
            const imageUrl = await uploadImage();
            const data: NewProduct = {
                name: input.name,
                description: input.description,
                price: Number(input.price),
                quantity: Number(input.quantity),
                category: input.category,
                imageUrl,
            };
            await postNewItem(data, context.tokenState.token);
            reset({name: "", description: "", quantity: "", category: "", price: ""});
        } catch (e: any) {
            console.log(e.message);
        }
    };

    const buttonText = !toggle ? "new" : "select";
    return (
        <Wrapper>
            <Content>
                <Text>Add a new Item</Text>
                <label>
                    Name
                    <input type="text" placeholder={"Enter Name"} {...register("name")} />
                </label>
                <label>Category</label>
                <CategoryWrapper>
                    {!toggle ? (
                        selectCategory
                    ) : (
                        <input
                            type="text"
                            placeholder={"Enter Category"}
                            {...register("category")}
                        />
                    )}
                    <button onClick={() => setToggle(!toggle)}>{buttonText}</button>
                </CategoryWrapper>
                <PriceSection>
                    <label>
                        Price(Kshs.)
                        <input type="number" {...register("price")} />
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
                <button id="cancel">cancel</button>
                <button id="save" onClick={handleSubmit(onSubmit)}>
                    Save
                </button>
            </div>
        </Wrapper>
    );
}

export default AddItem;
