import * as React from "react";
import {useContext, useEffect} from "react";
import {Wrapper} from "./Home.styles";
import NavBar from "../components/NavBar/navBar";
import MainContent from "../components/MainContent/mainContent";
import {AuthTokenContext} from "../App";
import PreviewItem from "../components/Preview/PreviewItem";
import {useHomeFetch} from "../hooks/useHomeFetch";
import AddItem from "../components/AddItem/AddItem";


const Home = () => {
    const {error, loading, setState} = useHomeFetch();
    const context = useContext(AuthTokenContext);
    const isEdit = context.tokenState.isEdit

    useEffect(() => {
        console.log(isEdit);
    }, [isEdit]);
    return (
        <Wrapper>
            <NavBar setState={setState}/>
            <MainContent error={error} loading={loading}/>
            {isEdit ? <PreviewItem/> : <AddItem setState={setState}/>}
        </Wrapper>
    );
};

export default Home;
