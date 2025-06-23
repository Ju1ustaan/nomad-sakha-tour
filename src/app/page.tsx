import { notFound } from 'next/navigation';

// ✅ Строгая типизация параметров страницы
type TourPageProps = {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function TourPage({ params }: TourPageProps) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <main className="p-6 bg-black text-white">
      <h1>Тур #{id}</h1>
    </main>
  );
}
