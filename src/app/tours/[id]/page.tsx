import { notFound } from 'next/navigation';

export default function TourPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <main className="p-6 bg-black text-white">
      <h1>Тур #{id}</h1>
    </main>
  );
}
