import { notFound } from 'next/navigation';

type Props = { params: { id: string };};

const TourPage: React.FC<Props> = ({ params }) => {
  const { id } = params;

  if (!id) return notFound();

  return (
    <main className="p-6 bg-black text-white">
      <h1>Тур #{id}</h1>
    </main>
  );
}

export default TourPage;