import React, { useState } from "react";
import { useAddProductList } from "../hooks/useProductList";

export default function ProductPageForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { mutate } = useAddProductList();
  const handleSubmit = () => {
    mutate({
      name,
      price,
    });
  };
  return (
    <div>
      <h3> Product Added</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="added product data"
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="added product data"
          />
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
}
