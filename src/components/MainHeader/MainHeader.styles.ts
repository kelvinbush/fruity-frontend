import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    margin: 0;
    line-height: 32px;
    color: #000000;
    flex-basis: 54%;
  }

  span {
    color: var(--medOrange);
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    margin: 0;
    line-height: 32px;
    flex-basis: 54%;
  }
`;

export const SearchBar = styled.div`
  display: inline-block;
  position: relative;
  flex-basis: 39%;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  height: 50px;
  max-width: 275px;

  img {
    display: inline;
    padding-left: 12px;
  }

  input {
    width: 70%;
    display: inline;
    border: none;
    outline: none;
    height: 100%;
    color: #000000;
    background-color: var(--white);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    position: relative;
    bottom: 6px;
    padding-left: 12px;
  }
`;
