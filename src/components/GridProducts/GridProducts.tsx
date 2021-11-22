import * as React from "react";
import {useContext} from "react";
import {ProductGrid, ProductItem, Wrapper} from "./GridProducts.styles";
import {Product} from "../../hooks/useHomeFetch";
import PreviewIMg from "../../images/north_east.svg"
import {AuthTokenContext} from "../../App";
import {AuthState, PreviewProduct} from "../../reducer/reducer";

type Props = {
    products: Product[]
};


const GridProducts: React.FC<Props> = ({products}) => {
    const context = useContext(AuthTokenContext);
    let data = context.tokenState.category
    // context.tokenDispatch({type: AuthState.SET_CATEGORIES, payload: data});
    return (
        <Wrapper>
            {data.map(category => {
                return (<>
                    <h4 key={category}>{category}</h4>
                    <ProductGrid>
                        {products.map(item => (item.category.name === category
                            ? <ProductItem
                                onClick={() => context.tokenDispatch({
                                    type: AuthState.PREVIEW_ITEM, payload: {
                                        name: item.name,
                                        imageUrl: item.imageUrl,
                                        categoryId: category,
                                        price: item.price.toString(),
                                        quantity: item.inventory.quantity.toString(),
                                        inventoryId: item.inventory.id,
                                        description: item.description,
                                        category: category,
                                        id: item.id
                                    } as PreviewProduct
                                })}>
                                <p>{item.name}</p>
                                <img src={PreviewIMg} alt="preview-icon"/>
                            </ProductItem>
                            : null))}
                    </ProductGrid>
                </>)
            })}
        </Wrapper>
    );
};

export default GridProducts;
