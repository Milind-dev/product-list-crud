import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getProductList,
  addProductList,
  deleteProductList,
} from "../pages/ProductApi";
import { QUERY_KEYS } from "../Constants/QueryKeys";

export const useGetProductList = () => {
  return useQuery({
    // queryKey: ["getproductlist"],
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: getProductList,
  });
};

export const useAddProductList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProductList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PRODUCTS],
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProductList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PRODUCTS],
      });
    },
  });
};
