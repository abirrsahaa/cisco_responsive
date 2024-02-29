import Image from "next/image";
import cisco from "../../assets/CiscoLogo101.png";

const Header = () => {
  return (
    <>
      <div className="w-[100vw] bg-none   h-[8vh] px-2 z-10 flex items-center justify-between md:h-[15vh] ">
        <div className="w-[20%] md:w-[10%]  overflow-hidden  h-[80%] flex items-center justify-center ml-3  rounded-lg">
          <Image
            src={cisco}
            alt="cisco"
            className="w-[100%] h-[100%] md:w-[70%] md:h-[70%] object-cover object-center"
          />
        </div>
        <div className="hidden md:flex justify-between items-center w-[50%] h-[80%]  rounded-lg">
          <div className="w-[23%] flex text-white justify-center items-center font-bold text-xl  h-[80%]  rounded-2xl ">
            HOME
          </div>
          <div className="w-[23%] flex justify-center items-center font-bold text-xl text-white h-[80%]  rounded-2xl ">
            ABOUT US
          </div>
          <div className="w-[23%] flex justify-center items-center font-bold text-xl text-white h-[80%]  rounded-2xl ">
            BLOGS
          </div>
          <div className="w-[23%] flex justify-center items-center font-bold text-xl text-white h-[80%]  rounded-2xl ">
            EVENTS
          </div>
          <div className="w-[23%] flex justify-center items-center font-bold text-xl text-white h-[80%]  rounded-2xl ">
            RESOURCES
          </div>
        </div>
        <div className="w-[45%] md:w-[10%] h-[80%] flex items-center justify-between md:justify-center  rounded-lg">
          <div className="w-[65%] md:w-[95%] md:h-[60%] text-green-500 flex items-center justify-center font-semibold md:text-xl text-sm h-[90%] border-2 border-solid border-gradient-to-r from-[#65CCF9]  to-[#2C49E1] rounded-3xl ">
            Sponsor Us
          </div>
          <div className="w-[35%] md:hidden block h-[90%] bg-pink-300"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
