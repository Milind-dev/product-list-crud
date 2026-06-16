import React from "react";
import { useGetProductList } from "../hooks/useProductList";

export default function ProductList() {
  const { data, isLoading, error } = useGetProductList();
  if (!isLoading) {
    console.log("data", data);
  }
  if (error) {
    console.error("Error fetching products:", error);
  }
  return (
    <div>
      <h2>Product Get List</h2>
      <p>{data?.length}</p>
      {data?.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: Rs - {item.price}</p>
        </div>
      ))}
    </div>
  );
}
