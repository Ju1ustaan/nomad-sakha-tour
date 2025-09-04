import Link from "next/link";
import HeroSection from "@/shared/ui/hero-section/HeroSection";
import Section from "@/shared/ui/section/Section";

import { TourList } from "@/widgets/tour-list/ui/TourList";

import Image from "next/image";


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
const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-between w-full gap-10">
     <HeroSection/>

      <Section
        title="о нас"
        titlePosition="right"
        backgroundImage="/images/road-img.jpeg"
      >
        <div className="flex flex-col md:flex-row justify-center items-center h-full gap-30  z-10">
          <div className="overflow-hidden rounded-md w-full md:w-1/2 aspect-square">
            <Image src={'/images/road-img.jpeg'} alt="road to mount" width={500} height={500}/>
          </div>
          <p className="w-full md:w-1/2 text-lg md:text-2xl text-[#333333] text-left">Путешествуем по Алматы и показываем его с высоты: горные тропы, озёра и бескрайние степи — всё, что остаётся за кадром у обычных туристов. Снимаем на дрон, делимся маршрутами и вдохновляем на приключения.</p>
        </div>
      </Section>

      <Section
        title="Туры"
        subtitle="Подари себе незабываемое путешествие"
        titlePosition="left"
        backgroundImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/41/27/12/154-300-12.jpg?w=900&h=500&s=1"
      >
          {/* <TourList/> */}
          <Link href={"/tours"} className="sticky bg-[#1E3A85] rounded-full py-4 px-6 z-10 hover:opacity-70 transition-opacity duration-300 cursor-pointer">Показать все туры</Link>
      </Section>

      <Section
        title="галерея"
        subtitle="Яркие моменты и лучшие пейзажи наших путешествий"
        titlePosition="right"
      >
        <div></div>
      </Section>

      <Section
        title="контакты"
        subtitle="Свяжитесь с нами для бронирования и вопросов"
        titlePosition="left"
      >
        <div></div>
      </Section>
    </div>
  );
}

export default Home;