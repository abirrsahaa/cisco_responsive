import Main from "@/components/home/main/Mainn";
import Symposium from "@/components/home/cybersecc/Symposium";
import Past from "@/components/home/Events/Past";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NewSymposium from "@/components/home/cybersecc/NewSymposium";
import Sponsors from "@/components/sponsors/Sponsors";
import Header1 from "@/components/home/Header/Header1";
import Speaker from "@/components/speaker/Speaker";
import Advisory from "@/components/speaker/Advisory";

export default function Home() {
  return (
    <div className="w-[100%] overflow-y-hidden min-h-screen m-0 p-0 overflow-x-hidden flex justify-center items-center flex-col  ">
      <Header1 />
      <Main />
      <Symposium />
      {/* <NewSymposium /> */}
      <Advisory />
      <Speaker />
      <Past />
      {/* <Sponsors /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}
