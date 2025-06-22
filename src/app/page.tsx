import Link from "next/link";
import Section from "@/shared/ui/section/Section";
import HeroSection from "@/shared/ui/hero-section/HeroSection";

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
        <div></div>
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
