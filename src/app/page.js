import Main from "@/components/home/main/Mainn";
import Symposium from "@/components/home/cybersecc/Symposium";
import Past from "@/components/home/Events/Past";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="w-[100%] min-h-screen m-0 p-0 overflow-x-hidden flex justify-center items-center flex-col">
      <Main />
      <Symposium />
      <Past />
      <Testimonials />
    </div>
  );
}
