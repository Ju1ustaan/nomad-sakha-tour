import { notFound } from 'next/navigation';
import { getTourById } from '@/entities/product/api/fetchTourById';

type Props = {
  params: {
    id: string;
  };
};

export default function TourDetailPage({ params }: Props) {
  // const tour = await getTourById(params.id);

  // if (!tour) return notFound();

  // const { title, description, price, images, video } = tour.attributes;

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-8 bg-black">
     <p>tour {params.id}</p>
    </main>
  );
}
