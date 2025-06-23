import Link from "next/link";
import Section from "@/shared/ui/section/Section";
import HeroSection from "@/shared/ui/hero-section/HeroSection";
import MainCard from "@/entities/product/ui/MainCard";


const products = [
  {
    id: 1,
    title: "Путешествие по Сахе",
    description: "Уникальное путешествие по самым красивым местам Сахи.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s",
    price: 1000,
  },
  {
    id: 2,
    title: "Экспедиция в Якутск",
    description: "Исследуйте культуру и природу Якутска.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s",
    price: 1200,
  },
  {
    id: 3,
    title: "Путешествие по Сахе",
    description: "Уникальное путешествие по самым красивым местам Сахи.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s",
    price: 1000,
  },
  {
    id: 4,
    title: "Экспедиция в Якутск",
    description: "Исследуйте культуру и природу Якутска.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s",
    price: 1200,
  },
  {
    id: 5,
    title: "Путешествие по Сахе",
    description: "Уникальное путешествие по самым красивым местам Сахи.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s",
    price: 1000,
  },
  {
    id: 6,
    title: "Экспедиция в Якутск",
    description: "Исследуйте культуру и природу Якутска.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s",
    price: 1200,
  },
];
export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-between w-full gap-10">
     <HeroSection/>

      <Section
        title="о нас"
        titlePosition="right"
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6uQAVgH1exc933V6mNfW7Lf271yfQ33sEQ&s"
      >
        <div></div>
      </Section>

      <Section
        title="Туры"
        subtitle="Подари себе незабываемое путешествие"
        titlePosition="left"
        backgroundImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/41/27/12/154-300-12.jpg?w=900&h=500&s=1"
      >
        <div className="grid grid-cols-3 gap-10 mb-10">
          {
            products.map((product) => (
              <Link
                key={product.id}
                href={`/tours/${product.id}`}
                className=""
              >
                <MainCard product={product} />
              </Link>
            ))
          }
        </div>
          <Link href={"/tours"} className="sticky bg-[#1E3A85] rounded-full py-4 px-6 z-10 hover:opacity-70 transition-opacity duration-300 cursor-pointer">Показать все туры</Link>
      </Section>

      <Section
        title="галерея"
        subtitle="Яркие моменты и лучшие пейзажи наших путешествий"
        titlePosition="right"
      >
        <div></div>
      </Section>
    </div>
  );
}
