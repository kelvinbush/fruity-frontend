import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 32px;

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px 16px;
  align-items: flex-start;
`;

export const ProductItem = styled.div`
  width: 183px;
  min-height: 43px;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;

  p {
    display: inline-block;
    padding: 10px;
    margin: 0;
    width: 70%;
    align-self: center;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }

  img {
    float: right;
    size: 20px !important;
    align-self: center;
    padding-right: 10px;
  }
`;
