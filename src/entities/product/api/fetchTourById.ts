import { api } from "@/shared/api/instanseAxios";

export const getTourById = async (id: string) => {
  try {
    const res = await api.get(`/tours/${id}?populate=*`);
    return res.data.data;
  } catch (e) {
    return null;
  }
};
