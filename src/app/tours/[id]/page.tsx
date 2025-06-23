import { notFound } from 'next/navigation';
import { type Metadata } from 'next';

type TourPageProps = {
  params: { 
    id: string 
  };
};

export default async function TourPage({ params }: TourPageProps) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <main className="p-6">
      <h1>Тур #{id}</h1>
    </main>
  );
}
export const metadata: Metadata = {
  title: 'Тур',
  description: 'Описание тура',
};