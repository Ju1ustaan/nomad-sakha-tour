import { notFound } from 'next/navigation';
import type { AppProps } from 'next/app';

type PropsDetail = {
  params: {
    id: string;
  };
};

export default function TourPage({ params }: AppProps & PropsDetail) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <main className="p-6 bg-black text-white">
      <h1>Тур #{id}</h1>
    </main>
  );
}
