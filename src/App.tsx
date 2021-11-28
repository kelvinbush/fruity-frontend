import React, {useReducer} from "react";
import Home from "./Home/Home";
import {GlobalStyle} from "./GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login/Login";
import {
    ActionSetProducts,
    CategoryAction,
    PreviewProduct,
    ProductAction,
    ProductEdit,
    reducer,
    TokenAction,
    TokenState
} from "./reducer/reducer";

type DispatchFunction = (a: TokenAction | ProductAction | ProductEdit | CategoryAction | ActionSetProducts) => void;
type DefaultContext = {
    tokenState: TokenState;
    tokenDispatch: DispatchFunction;
};
export const AuthTokenContext = React.createContext({} as DefaultContext);
export const emptyProduct: PreviewProduct = {
    name: "",
    price: "",
    category: "",
    description: "",
    quantity: "",
    categoryId: "",
    inventoryId: "",
    imageUrl: "",
    id: ""
}
const initial: TokenState = {
    token: "",
    product: emptyProduct,
    isEdit: false,
    category: [""],
    products: []
};
const App = () => {
    const [token, dispatch] = useReducer(reducer, initial);
    return (
        <AuthTokenContext.Provider
            value={{tokenState: token, tokenDispatch: dispatch}}
        >
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/admin"} element={<Home/>}/>
                </Routes>
                <GlobalStyle/>
            </BrowserRouter>
        </AuthTokenContext.Provider>
    );
};

export default App;
