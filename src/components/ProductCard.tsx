import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, children }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginBottom: 16, maxWidth: 300 }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8 }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <div>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;