import axios from "axios";

export type NewProduct = {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
};
export const newItemEndpoint =
  process.env.REACT_APP_SERVER_URL + "/api/product";

export const addNewItem = async (item: NewProduct, token: string) => {
  await axios.post(newItemEndpoint, item, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  });
};
