import React, { useEffect } from "react";
import { useGetProductList, useDeleteProduct } from "../hooks/useProductList";
import productpagestyles from "./productpagestyles.module.css";
import Button from "../components/Button";
// import { deleteProductList } from "./ProductApi";

export default function ProductList() {
  const { data, isLoading, error } = useGetProductList();
  const deleteMutation = useDeleteProduct();

  if (!isLoading) {
    console.log("data", data);
  }
  if (error) {
    console.error("Error fetching products:", error);
  }
  const handleDelete = async (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className={productpagestyles.pageContainer}>
      {/* <p>{data?.length}</p> */}
      <h2 className={productpagestyles.pageLists}>Product Get List</h2>
      <div className={productpagestyles.pageHeader}>
        <h4>Product Name</h4>
        <h4>Product Price</h4>
        <h4>Action</h4>
      </div>
      {data?.map((item) => (
        <div>
          <div className={productpagestyles.pageContent} key={item.id}>
            <h3>{item.name}</h3>
            <p>Rs - {item.price}</p>
            <Button text="delete" onClick={() => handleDelete(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}
