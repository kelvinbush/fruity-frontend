import * as React from "react";
import {ProductGrid, ProductItem, Wrapper} from "./GridProducts.styles";
import {Product} from "../../hooks/useHomeFetch";
import PreviewIMg from "../../images/north_east.svg"

type Props = {
    products: Product[]
};

type CustomProduct = {
    name: string
    id: number
    items: Product[]
}

const GridProducts: React.FC<Props> = ({products}) => {
    const categories = products.map(product => (product.category.name));
    const mCategory = new Set(categories);
    let data = Array.from(mCategory)
    console.log(data);
    return (
        <Wrapper>
            {data.map(category => {
                return (<>
                    <h4 key={category}>{category}</h4>
                    <ProductGrid>
                        {products.map(item => (item.category.name === category ? <ProductItem>
                            <p>{item.name}</p>
                            <img src={PreviewIMg} alt="preview-icon"/>
                        </ProductItem> : null))}
                    </ProductGrid>
                </>)
            })}
        </Wrapper>
    );
};

export default GridProducts;
