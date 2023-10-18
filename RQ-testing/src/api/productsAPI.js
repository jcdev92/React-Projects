import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  const resp = await productsApi.get("/products");
  return resp.data;
};

export const postProduct = async (product) =>
  await productsApi.post("/products", product);

export const deleteProduct = async (id) =>
  await productsApi.delete(`/products/${id}`);

export const updateProduct = async ({ id, name, price, decription, inStock }) =>
  await productsApi.patch(`/products/${id}`, {
    name,
    price,
    decription,
    inStock,
  });
