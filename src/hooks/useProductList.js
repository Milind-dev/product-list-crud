import { useQuery } from "@tanstack/react-query";
import { getProductList } from "../pages/ProductApi";

export const useGetProductList = () => {
  return useQuery({
    queryKey: ["getproductlist"],
    queryFn: getProductList,
  });
};
