
import { notFound } from 'next/navigation';

type TourPageProps = {
  params: { 
    id: string 
  };
};

export default function TourPage({ params }: TourPageProps) {
  const { id } = params;
  
  if (!id) return notFound();

  return (
    <main className="p-6 bg-black">
      <h1>Тур #{id}</h1>
    </main>
  );
}