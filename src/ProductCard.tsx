import React from "react";
import { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({ product, children }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, marginBottom: 16 }}>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "100%", maxHeight: 200, objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <b>Harga:</b> Rp {product.price.toLocaleString("id-ID")}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default ProductCard;
