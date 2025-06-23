
import { notFound } from 'next/navigation';

type TourDetailProps = {
  params: { 
    id: string 
  };
};

export default function TourPage({ params }: TourDetailProps) {
  const { id } = params;
  
  if (!id) return notFound();

  return (
    <main className="p-6 bg-black">
      <h1>Тур #{id}</h1>
    </main>
  );
}