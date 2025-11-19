import Header from "@/app/header/page";
import SliderSection from "@/app/slider-section/page";
import Card from "@/app/cards/page";
import MenuHomeSection from "../menu-home-section/page";
import AboutMain from "@/app/main-about/page";
export default function MainPage() {
  return (
    <>
      <Header />
      <SliderSection />
      <MenuHomeSection />
      <AboutMain />
      {/* <Card/> */}
    </>
  );
}
