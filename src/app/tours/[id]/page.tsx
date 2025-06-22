import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default function TourDetailPage({ params }: Props) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <main className="p-6 bg-black">
      <h1>Детали тура #{id}</h1>
    </main>
  );
}