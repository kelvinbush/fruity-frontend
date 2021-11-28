import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {newItemEndpoint} from "../API";
import {AuthTokenContext} from "../App";
import {AuthState} from "../reducer/reducer";

export type Category = {
    id: string,
    name: string;
}

export type Inventory = {
    id: string,
    quantity: number
}

export type Product = {
    id: string,
    name: string,
    imageUrl: string,
    price: number;
    description: string,
    inventory: Inventory
    category: Category
}


export const useHomeFetch = () => {
    const [state, setState] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const context = useContext(AuthTokenContext);
    const token = context.tokenState.token

    useEffect(() => {
        if (token.trim().length <= 0) {
            setError(true)
            return;
        }
        const fetchProducts = async () => {
            try {
                setError(false);
                setLoading(true);

                const result = await axios.get(newItemEndpoint, {
                    headers: {Authorization: `Bearer ${token}`},
                    withCredentials: true,
                });
                const products = [...result.data.result]
                const categories = products.map(product => (product.category.name));
                const mCategory = new Set(categories);
                const data = Array.from(mCategory);
                console.log(data);
                context.tokenDispatch({type: AuthState.SET_CATEGORIES, payload: data})
                context.tokenDispatch({type: AuthState.SET_PRODUCTS, payload: [...result.data.result]})
            } catch (e: any) {
                setError(true);
                console.log(e.message);
            }
            setLoading(false);
        }
        fetchProducts();
    }, [token, state])

    return {state, loading, error, token, setState};
}

