import React, { useState } from "react";
import { useAddProductList } from "../hooks/useProductList";
import styles from "./ProductPageForm.module.css";

export default function ProductPageForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { mutate, isPending } = useAddProductList();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      name,
      price,
    });

    setName("");
    setPrice("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Add Grocerry</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Product Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter product name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Product Price</label>
            <input
              type="number"
              value={price}
              placeholder="Enter product price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.button} disabled={isPending}>
            {isPending ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
