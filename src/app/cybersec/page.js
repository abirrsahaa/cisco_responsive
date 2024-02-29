import EventHero from "@/components/hero/EventHero";
import Countdown from "@/components/countdown/Countdown";
import Information from "@/components/information/Information";
import ImageSlider from "@/components/caroussel/ImageSlider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const cybersec = () => {
  return (
    <main className="min-w-screen  overflow-hidden overflow-x-hidden">
      <Header />
      <EventHero />
      <Countdown />
      <Information />
      <ImageSlider />
      <Footer />
    </main>
  );
};

export default cybersec;
