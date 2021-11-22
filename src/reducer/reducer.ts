import {Product} from "../hooks/useHomeFetch";

export enum AuthState {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    PREVIEW_ITEM = "PREVIEW_ITEM",
    EDIT_ITEM = 'EDIT_ITEM',
    SET_PRODUCTS = "SET_PRODUCTS"
}

export interface PreviewProduct {
    name: string,
    id: string,
    description: string,
    quantity: string,
    price: string,
    category: string,
    categoryId: string,
    inventoryId: string
    imageUrl: string
}

export interface TokenAction {
    type: AuthState;
    payload: string;
}

export interface ProductAction {
    type: AuthState,
    payload: PreviewProduct
}

export interface ProductEdit {
    type: AuthState,
    payload: boolean
}

export interface TokenState {
    isEdit: boolean
    token: string;
    product: PreviewProduct

}


export const reducer = (state: TokenState, action: TokenAction | ProductAction | ProductEdit): TokenState => {
    console.log("REDUCER");
    const {type, payload} = action;
    switch (type) {
        case AuthState.LOGIN:
            console.log("PREVIEW_ITEM", state.isEdit);
            return {...state, token: payload} as TokenState;
        case AuthState.LOGOUT:
            return {...state, token: payload} as TokenState;
        case AuthState.SET_PRODUCTS:
            return {...state, products: payload} as TokenState;
        case AuthState.EDIT_ITEM:
            return {...state, isEdit: payload} as TokenState;
        case AuthState.PREVIEW_ITEM:
            console.log("PREVIEW_ITEM", state);
            return {...state, product: payload, isEdit: true} as TokenState
        default:
            return state;
    }
};
