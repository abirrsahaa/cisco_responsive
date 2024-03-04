import Image from "next/image";
import cisco from "../../assets/CiscoLogo101.png";

const Header = () => {
  return (
    <>
      <div className="w-[100vw]    h-[8vh] px-2 z-10 flex items-center justify-between md:h-[15vh] ">
        <div className="w-[20%] md:w-[10%]  overflow-hidden  h-[80%] flex items-center justify-center ml-3  rounded-lg">
          <Image
            src={cisco}
            alt="cisco"
            className="w-[100%] h-[100%] md:w-[70%] md:h-[70%] object-cover object-center"
          />
        </div>
        <div className="hidden md:flex justify-between items-center w-[50%] h-[80%]  rounded-lg">
          <div className="w-[23%] hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex text-white justify-center items-center font-bold text-xl  h-[100%] rounded-b-none    rounded-2xl ">
            HOME
          </div>
          <div className="w-[23%] hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%]   rounded-b-none  rounded-2xl ">
            ABOUT US
          </div>
          <div className="w-[23%] hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%]  rounded-b-none   rounded-2xl ">
            BLOGS
          </div>
          <div className="w-[23%]  hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%] rounded-b-none   rounded-2xl ">
            EVENTS
          </div>
          <div className="w-[23%] hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%] rounded-b-none    rounded-2xl ">
            RESOURCES
          </div>
        </div>
        <div className="w-[45%] md:w-[10%] h-[80%] flex items-center justify-between md:justify-center  rounded-lg">
          <button class="relative w-[150px] mt-2 md:mt-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative w-[150px] px-5 py-2.5 transition-all ease-in duration-75 text-[12px] md:text-[20px] font-normal bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3] ">
              Join Us
            </span>
          </button>
          <div className="w-[35%] md:hidden block h-[90%] bg-pink-300"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
