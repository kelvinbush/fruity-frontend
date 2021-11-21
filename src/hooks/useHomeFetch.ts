import { useState } from "react";

export type Product = {
    name: string,
    description: string,

}

const initialState = {}

export const useHomeFetch = () => {
    const [state, setState] = useState();
}