import axios from "axios";

export type NewProduct = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    category: string;
    quantity: number;
    inventory: string;
};
export const newItemEndpoint =
    process.env.REACT_APP_SERVER_URL + "/api/product";

export const postNewItem = async (item: NewProduct, token: string, isEdit: boolean) => {
    item.id.trim().length > 2
        ? await axios.post(newItemEndpoint + "/update", item, {
            headers: {Authorization: `Bearer ${token}`},
            withCredentials: true,
        })
        : await axios.post(newItemEndpoint, item, {
            headers: {Authorization: `Bearer ${token}`},
            withCredentials: true,
        });
};

