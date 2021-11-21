import * as React from "react";
import { Wrapper } from "./Home.styles";
import NavBar from "../components/NavBar/navBar";
import MainContent from "../components/MainContent/mainContent";
import AddItem from "../components/AddItem/AddItem";

type Props = {};

const Home = (props: Props) => (
  <Wrapper>
    <NavBar />
    <MainContent />
    <AddItem />
  </Wrapper>
);

export default Home;
