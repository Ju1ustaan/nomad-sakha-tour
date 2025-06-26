import Link from "next/link";
import { Product } from "../model/types";
import { MoreIcon } from "@/shared/assets/icons/icons";

type Props = {
    product: Product;
}

export const LargeCard: React.FC<Props> = ({ product }) => {
    
      const imageUrl = product.image[0]?.url;
    return (
        <div className="hidden lg:block rounded-md overflow-hidden sticky z-10 h-[300px] w-full group">
        <img src={`http://localhost:1337${imageUrl}`} alt={product.name} className="w-full h-full object-cover" />
        <div className='"
      absolute bottom-0 left-0 right-0
      bg-opacity-50 text-white p-4
      bg-gradient-to-t from-[#1E3A85] to-transparent
      grid grid-cols-4 gap-2
      transform translate-y-full
      group-hover:translate-y-0
      transition-all duration-300 ease-in-out
    "'>
          <p className='col-span-4 text-lg font-bold'>{product.name}</p>
          <p className='turnicate text-wrap w-full truncate col-span-4 line-clamp-4'>{product.description}</p>
          <Link href={`/`} className='text-white font-semibold col-span-4 place-content-end place-items-end hover:opacity-20 duration-300 transition-opacity'>
            <p className='flex items-center justify-center gap-1'>
            Подробнее
              <i><MoreIcon className='fill-white' width={36} height={36}/></i>
            </p>
            </Link>
        </div>
      </div>
    )
}