import { api } from "./api";

export const getProducts = async () => {
  const response = await api.get("products");
  return response.data;
};
export const getProductsOrderBy = async (column, order) => {
  const response = await api.get(`products/?column=${column}&order=${order}`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`products/${id}`);
  return response.data;
};

export const searchProducts = async (query) => {
  const response = await api.get(`products/search/?query=${query}`);
  return response.data;
};
