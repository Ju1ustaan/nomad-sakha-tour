import { api } from '@/shared/api/instanseAxios';

export const getTours = async () => {
  const res = await api.get('/tours?populate=*'); // populate=* чтобы загрузить и медиа
  return res.data.data;
};