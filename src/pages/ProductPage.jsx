import React from "react";
import ProductList from "./ProductList";
import ProductPageForm from "./ProductPageForm";

export default function ProductPage() {
  return (
    <div>
      <ProductPageForm />
      <ProductList />
    </div>
  );
}
