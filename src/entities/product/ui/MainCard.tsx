import React from 'react';
import Link from 'next/link';
import { Product } from '../model/types';
import { MoreIcon } from '@/shared/assets/icons/icons';
import { MobileCard } from './MobileCard';
import { LargeCard } from './LargeCard';

type Props = {
  product: Product;
  reverse?: string;
};

const MainCard: React.FC<Props> = ({ product, reverse }) => {

  return (
    <div>
      
      <LargeCard product={product} />  {/*  */}
      <MobileCard product={product} reverse={reverse}/>

    </div>
  );
};

export default MainCard;