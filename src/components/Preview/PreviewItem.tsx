import React, {useContext} from 'react';

import {
    CategoryText,
    DescText,
    EditImg,
    NameText,
    PriceCategoryWrapper,
    ProductImg,
    Title,
    Wrapper, DeleteImg
} from "./Preview.styles";
import EditIcon from "../../images/edit.svg";
import DeleteIcon from "../../images/delete.svg";
import {AuthState} from "../../reducer/reducer";
import {AuthTokenContext} from "../../App";

const PreviewItem: React.FC = () => {
    const context = useContext(AuthTokenContext);
    const product = context.tokenState.product

    return (
        <Wrapper>
            <EditImg src={EditIcon}
                     onClick={() => context.tokenDispatch({type: AuthState.EDIT_ITEM, payload: false})}/>
            <DeleteImg src={DeleteIcon}/>
            <ProductImg src={product.imageUrl}/>
            <Title>{"Name"}</Title>
            <NameText>{product.name}</NameText>
            <Title>{"Category"}</Title>
            <CategoryText>{product.category}</CategoryText>
            <PriceCategoryWrapper>
                <div>
                    <Title>{"Price(Kshs.)"}</Title>
                    <CategoryText>{product.price}</CategoryText>
                </div>
                <div>
                    <Title>{"Quantity left:"}</Title>
                    <CategoryText>{product.quantity}</CategoryText>
                </div>
            </PriceCategoryWrapper>
            <Title>{"Description"}</Title>
            <DescText>{product.description}</DescText>
        </Wrapper>
    );
};

export default PreviewItem;