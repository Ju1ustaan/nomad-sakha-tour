'use client';

import { useQuery } from '@tanstack/react-query';
import { getTours } from '@/entities/product/api/fetchTours';
import MainCard from '@/entities/product/ui/MainCard';

export const TourList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tours'],
    queryFn: getTours,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {data.map((tour: any, idx: number) => (
        <MainCard
          key={tour.id}
          reverse={idx % 2 === 0? 'reverse' : ''}
          product={tour}/>
      ))}
    </div>
  );
}
