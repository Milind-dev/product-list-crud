import React from "react";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const getProductList = async () => {
  const res = await fetch(`${REACT_APP_API_URL}/products-lists`);
  try {
    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("get product error:", error);
    throw error;
  }
};

const addProductList = async (add_product) => {
  const res = await fetch(`${REACT_APP_API_URL}/products-lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(add_product),
  });
  const data = await res.json();
  return data;
};

const deleteProductList = async (id) => {
  await fetch(`${REACT_APP_API_URL}/products-lists/${id}`, {
    method: "DELETE",
  });
  return id;
};
export { getProductList, addProductList, deleteProductList };
