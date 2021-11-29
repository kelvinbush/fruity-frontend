import React from "react";
import {MainBar, TextSection} from "./TopItem.styles";
import {ItemData} from "../Analysis";


type Props = {
    color: boolean,
    item: ItemData,
}


const TopItem: React.FC<Props> = ({color, item}) => {

    return (
        <>
            <TextSection>
                <p>{item.name}</p>
                <p>{item.percentage}%</p>
            </TextSection>
            <MainBar/>
        </>
    )
}

export default TopItem;