import Header from "@/app/header/page";
import SliderSection from "@/app/slider-section/page";
import Card from "@/app/cards/page";
import MenuHomeSection from "../menu-home-section/page";
import AboutMain from "@/app/main-about/page";
import HomeCard from "../home-card/page";
export default function MainPage() {
  return (
    <>
      <Header />
      <SliderSection />
      <MenuHomeSection />
      <AboutMain />
      <HomeCard/>
      {/* <Card/> */}
    </>
  );
}
