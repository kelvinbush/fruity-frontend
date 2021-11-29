import React from "react";
import {Wrapper, TopSection, ItemWrapper, GraphSection} from "./Analysis.styles";
import TopItem from "./TopItem/TopItem";


export type ItemData = {
    name: string,
    percentage: number
}
const items: ItemData[] = [{name: "Banana", percentage: 23}, {name: "Rice", percentage: 10}, {
    name: "Chicken 1kg",
    percentage: 11
}]
const categories: ItemData[] = [{name: "Fruits and vegetables", percentage: 12}, {
    name: "Meat and Fish",
    percentage: 13
}, {name: "Beverages", percentage: 14}]

const Analysis = () => {


    return (
        <Wrapper>
            <TopSection>
                <ItemWrapper>
                    {items.map(item => <TopItem color={true} item={item}/>)}
                </ItemWrapper>
                <ItemWrapper>
                    {categories.map(item => <TopItem color={false} item={item}/>)}
                </ItemWrapper>
            </TopSection>
            <GraphSection>
                <dl>
                    <dt>First Third summary</dt>
                    <dd className="percentage percentage-17">
                        <span className="text">January</span>
                    </dd>
                    <dd className="percentage percentage-20">
                        <span className="text">February</span>
                    </dd>
                    <dd className="percentage percentage-24">
                        <span className="text">March </span>
                    </dd>
                    <dd className="percentage percentage-12">
                        <span className="text">April </span>
                    </dd>
                </dl>
            </GraphSection>
        </Wrapper>
    );
}

export default Analysis;