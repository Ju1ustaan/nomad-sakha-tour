export type Product = {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: any | { url: string }[];
};