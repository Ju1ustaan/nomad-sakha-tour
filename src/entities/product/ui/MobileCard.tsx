import Link from "next/link";
import { Product } from "../model/types"
import { MoreIcon } from "@/shared/assets/icons/icons"

type Props = {
  product: Product;
  reverse?: string;
};

export const MobileCard: React.FC<Props> = ({ product, reverse }) => {    
  const imageUrl = product.image[0]?.url;
    return (
        <div className={`flex md:flex-col items-start border-b-1 py-3 border-gray-400 lg:hidden sticky z-10 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="rounded-md overflow-hidden  w-1/3 md:w-full aspect-square flex-shrink-0">
          <img src={`http://localhost:1337${imageUrl}`} alt={product.name} className="block w-full h-full object-cover" />
        </div>
          <div className={`w-2/3 md:w-full 
            bg-opacity-50 text-black px-2 md:px-4
            grid grid-cols-1 gap-2 ${reverse ? 'text-start' : 'text-end'}`}>
            <p className=' md:text-lg font-bold'>{product.name}</p>
            <p className='text-sm md:text-lg turnicate text-wrap w-full truncate line-clamp-2'>{product.description}</p>
            <Link href={`/tours/${product.id}`} className='text-[#1E3A85] font-semibold '>
            <p className={`flex items-center justify-end gap-1 ${reverse ? 'justify-start' : 'jestify-end'}`}>
            Подробнее
              <i><MoreIcon className='fill-[#1E3A85]' width={36} height={36}/></i>
            </p>
            </Link>
          </div>
      </div>
    )
}