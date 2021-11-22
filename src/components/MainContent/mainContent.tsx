import React, {useContext} from "react";
import {Wrapper} from "./MainContent.styles";
import MainHeader from "../MainHeader/mainHeader";
import GridProducts from "../GridProducts/GridProducts";
import {AuthTokenContext} from "../../App";
import {Product, useHomeFetch} from "../../hooks/useHomeFetch";
import Spinner from "../Spinner";

type Props = {
    error: boolean,
    loading: boolean,

};

const MainContent: React.FC<Props> = ({error, loading}) => {
        const context = useContext(AuthTokenContext);
        const products = context.tokenState.products

        if (error) return <div>Something went wrong ...</div>;
        return (<Wrapper>
            <MainHeader/>
            {loading ? <Spinner/> : <GridProducts products={products}/>}
        </Wrapper>)
    }
;

export default MainContent;
