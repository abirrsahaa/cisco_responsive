import Main from "@/components/home/main/Mainn";
import Symposium from "@/components/home/cybersecc/Symposium";
import Past from "@/components/home/Events/Past";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="w-[100%] min-h-screen m-0 p-0 overflow-x-hidden flex justify-center items-center flex-col">
      <Header />
      <Main />
      <Symposium />
      <Past />
      <Testimonials />
      <Footer />
    </div>
  );
}
