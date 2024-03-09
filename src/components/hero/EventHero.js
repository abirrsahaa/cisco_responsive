import style from "./style.module.css";
// import background from "./Background.png";
import symposium from "../../assets/symposium.png";
import cyber from "./CYBERPUNK.png";
import logo from "./Logo.png";
import Image from "next/image";
import Typing from "../typing/Typing";
const EventHero = () => {
  return (
    <>
      <main
        className={
          " flex-col top-0  justify-between  bg-slate-500  items-center w-[100vw] h-[70vh] md:h-[100vh]  mx-auto  "
        }
      >
        <div
          className={
            " w-[100%] h-[100%] flex flex-col md:flex-row gap-1   " +
            style["main"]
          }
        >
          <div className=" flex flex-col items-center   justify-center gap-4 md:gap-3   h-[100%] w-[100%] md:w-[66%] md:h-[100%] md:px-8 md:items-end md:ml-5">
            <div className="md:text-7xl text-4xl font-benderregular  text-[#13FBD3] font-bold">
              CISCO X LPU IGEN &apos; s
            </div>
            <div className="w-[380px] md:w-[700px]">
              <Image src={symposium} alt="photo" className="h-[100%] w-[97%]" />
            </div>
            <div className="w-[380px] md:w-[700px] flex items-center justify-center">
              <Typing />
            </div>
            <button className="mt-3 border-dashed h-[50px] font-benderregular   border-2 p-3 border-green-600">
              ERROR 404
            </button>
          </div>
          <div className="relative overflow-hidden   md:flex items-center justify-center  h-[0%] w-[0%] md:w-[33%] md:h-[100%]">
            <div className="hidden md:block w-[100%] h-[100%] relative">
              <Image
                src={cyber}
                alt="cyber"
                className="h-[97%] w-[100%] scale-[1.1] sm:scale-[0.9] md:scale-[1.2]  md:absolute  md:-bottom-12 md:right-0 md:object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventHero;
