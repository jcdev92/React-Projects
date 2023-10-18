import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getProducts,
  postProduct,
  deleteProduct,
  updateProduct,
} from "../api/productsAPI";

export const useGetProducts = () => {
  return useQuery("products", getProducts);
};

export const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(postProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};
