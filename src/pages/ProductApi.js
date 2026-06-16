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

export { getProductList };
