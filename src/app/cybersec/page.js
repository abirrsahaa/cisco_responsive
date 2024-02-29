import EventHero from "@/components/hero/EventHero";
import Countdown from "@/components/countdown/Countdown";
import Information from "@/components/information/Information";
import ImageSlider from "@/components/caroussel/ImageSlider";

const cybersec = () => {
  return (
    <main className="min-w-screen  overflow-hidden overflow-x-hidden">
      <EventHero />
      <Countdown />
      <Information />
      <ImageSlider />
    </main>
  );
};

export default cybersec;
