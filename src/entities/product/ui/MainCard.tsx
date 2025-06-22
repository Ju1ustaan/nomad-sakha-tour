import React from 'react';
import { Product } from '../model/types';

type Props = {
  product: Product;
};

const MainCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="rounded-md overflow-hidden sticky z-10">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
    </div>
  );
};

export default MainCard;