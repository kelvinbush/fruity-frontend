import * as React from "react";
import { Wrapper } from "./Home.styles";
import NavBar from "../components/NavBar/navBar";
import MainContent from "../components/MainContent/mainContent";
import AddItem from "../components/AddItem/AddItem";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { newItemEndpoint } from "../API";
import { AuthTokenContext } from "../App";

type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState();
  const context = useContext(AuthTokenContext);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await axios.get(newItemEndpoint, {
          headers: { Authorization: `Bearer ${context.tokenState.token}` },
          withCredentials: true,
        });
        // @ts-ignore
        setProducts(result.data.result);
      } catch (e: any) {
        console.log(e.message);
      }
    }

    fetch();
  }, [context.tokenState.token]);
  console.log(products);
  return (
    <Wrapper>
      <NavBar />
      <MainContent />
      <AddItem />
    </Wrapper>
  );
};

export default Home;
