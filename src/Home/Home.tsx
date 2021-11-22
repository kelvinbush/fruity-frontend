import * as React from "react";
import {useContext} from "react";
import {Wrapper} from "./Home.styles";
import NavBar from "../components/NavBar/navBar";
import MainContent from "../components/MainContent/mainContent";
import {AuthTokenContext} from "../App";
import PreviewItem from "../components/Preview/PreviewItem";
import {useHomeFetch} from "../hooks/useHomeFetch";
import AddItem from "../components/AddItem/AddItem";


const Home = () => {
    const {state, error, loading} = useHomeFetch();
    return (
        <Wrapper>
            <NavBar/>
            <MainContent products={state.products} error={error} loading={loading}/>
            <AddItem/>
        </Wrapper>
    );
};

export default Home;
