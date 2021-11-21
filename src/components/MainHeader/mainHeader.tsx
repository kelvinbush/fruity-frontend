import React from "react";

import { SearchBar, Wrapper } from "./MainHeader.styles";
import SearchIcon from "../../images/search.svg";

const MainHeader = () => (
  <Wrapper>
    <p>
      {""}
      <span>Fruity Groceries</span> admin dashboard preview your products here
    </p>
    <SearchBar>
      <img src={SearchIcon} alt="search-icon" />
      <input type="text" placeholder={"search item"} />
    </SearchBar>
  </Wrapper>
);

export default MainHeader;
