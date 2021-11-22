import React from 'react';

import {
    Wrapper,
    Title,
    DescText,
    NameText,
    PriceCategoryWrapper,
    CategoryText,
    ProductImg,
    EditImg
} from "./Preview.styles";
import EditIcon from "../../images/edit.svg";
// @ts-ignore
import PepperImage from "../../images/pepper.png";

type Props = {};
const PreviewItem = (props: Props) => {
    return (
        <Wrapper>
            <EditImg src={EditIcon}/>
            <ProductImg src={PepperImage}/>
            <Title>{"Name"}</Title>
            <NameText>{"Pepper"}</NameText>
            <Title>{"Category"}</Title>
            <CategoryText>{"Fruits and Vegetables"}</CategoryText>
            <PriceCategoryWrapper>
                <div>
                    <Title>{"Price(Kshs.)"}</Title>
                    <CategoryText>{"55.40"}</CategoryText>
                </div>
                <div>
                    <Title>{"Quantity left:"}</Title>
                    <CategoryText>{"12"}</CategoryText>
                </div>
            </PriceCategoryWrapper>
            <Title>{"Description"}</Title>
            <DescText>Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other
                nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and
                contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.</DescText>
        </Wrapper>
    );
};

export default PreviewItem;