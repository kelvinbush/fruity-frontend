import * as React from "react";
import { ProductGrid, Wrapper } from "./GridProducts.styles";

type Props = {};

const GridProducts = (props: Props) => (
  <Wrapper>
    <h4>{}</h4>
    <ProductGrid>{}</ProductGrid>
  </Wrapper>
);

export default GridProducts;
