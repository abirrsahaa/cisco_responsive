import Gallery1 from "@/components/Mobile_events/Gallery1";
import Gallery2 from "@/components/Mobile_events/Gallery2";
import Gallery3 from "@/components/Mobile_events/Gallery3";
import Gallery4 from "@/components/Mobile_events/Gallery4";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Events() {
  return (
    <div className="w-[100vw] font-benderregular overflow-y-hidden min-h-screen m-0 p-0 overflow-x-hidden flex justify-between items-center flex-col">
      <Header />
      <Gallery1 />
      <Gallery2 />
      <Gallery3 />
      <Gallery4 />
      <Footer />
    </div>
  );
}
