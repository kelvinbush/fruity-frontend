import styled from "styled-components";


export const TextSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 0;

  p {
    margin: 0;
    font-family: Quicksand, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
`
export const MainBar = styled.div`
  width: 100%;
  background: #e0e0e0;
  height: 6px;
  border-radius: 4px;
  margin-bottom: 10px;

  div {
    background: ${props => props.color ? "#f9a109" : "#56CCF2"};
    width: 27%;
    height: 100%;
    border-radius: 4px;
  }
`