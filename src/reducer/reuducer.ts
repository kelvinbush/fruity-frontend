import {Product} from "../hooks/useHomeFetch";

export enum AuthState {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    PREVIEW_ITEM = "PREVIEW_ITEM",
    EDIT_ITEM = 'EDIT_ITEM',
    SET_PRODUCTS = "SET_PRODUCTS"
}

export interface TokenAction {
    type: AuthState;
    payload: string;
}

export interface ProductsAction {
    type: AuthState,
    payload: Product[]
}

export interface TokenState {
    token: string;
    products: Product[]

}

export const reducer = (state: TokenState, action: TokenAction | ProductsAction): TokenState => {
    const {type, payload} = action;
    switch (type) {
        case AuthState.LOGIN:
            return {...state, token: payload} as TokenState;
        case AuthState.LOGOUT:
            return {...state, token: payload} as TokenState;
        case AuthState.SET_PRODUCTS:
            return {...state, products: payload} as TokenState;
        default:
            return state;
    }
};
