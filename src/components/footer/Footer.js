import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import cisco from "../../assets/CiscoLogo101.png";

const Footer = () => {
  return (
    <>
      <div className="w-[100vw] h-[70vh] md:h-[50vh]  md:flex md:items-center md:gap-2 md:justify-center ">
        <div className="w-full h-[13%] mx-1  md:hidden block">
          <div className="w-[20%] h-[100%]">
            <Image
              src={cisco}
              alt="cisco"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full h-[40%]  md:hidden block">
          <div className="text-3xl font-bold mx-3 mb-2 text-green-500 flex items-center justify-start ">
            Quick Links
          </div>
          <ul className="flex  gap-2 mx-2 pl-2 mt-2 tracking-tighter text-sm">
            <div className="flex flex-col gap-3 mx-3">
              <li>Home</li>
              <li>Events</li>
              <li>Workshops</li>
              <li>Blog</li>
            </div>
            <div className="flex flex-col gap-3 mx-3 ">
              <li>Team</li>
              <li>Gallery</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
        <div className="w-full h-[30%]  md:hidden block">
          <div className="text-3xl font-bold mx-3 mb-2 text-green-500 flex items-center justify-start ">
            Contact Us
          </div>
          <ul className="flex flex-col gap-1 mx-3 pl-2 mt-4 tracking-tighter text-lg items-start justify-center">
            <li className="flex gap-2 justify-center items-center h-5 ">
              <MdOutlineMailOutline className="text-green-500  h-4" />
              <span className="flex items-center justify-center  h-4 pb-1">
                {" "}
                example@gmail.com
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-green-500  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                12345
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-green-500  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                13243434545
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full h-[17%] mt-3 flex justify-center items-center gap-4  md:hidden">
          <FaDiscord className="w-8 h-8 text-green-500" />
          <FaFacebook className="w-8 h-8 text-green-500" />
          <FaInstagram className="w-8 h-8 text-green-500" />
          <FaLinkedin className="w-8 h-8 text-green-500" />
        </div>
        <div className="hidden md:flex h-[90%] w-[40%] p-1  flex-col items-center justify-center gap-2 ">
          <div className="w-[90%] h-[20%] ">
            {" "}
            <div className="w-[20%] h-[100%]">
              <Image
                src={cisco}
                alt="cisco"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="w-[90%] h-[40%]  flex justify-start items-center text-center ">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="w-[90%] h-[30%] flex justify-start items-center gap-4 ">
            <FaDiscord className="w-8 h-8 text-green-500" />
            <FaFacebook className="w-8 h-8 text-green-500" />
            <FaInstagram className="w-8 h-8 text-green-500" />
            <FaLinkedin className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="hidden md:block h-[90%] w-[25%] ">
          {" "}
          <div className="text-6xl font-bold mx-3 mb-2 text-green-500 ">
            Quick Links
          </div>
          <ul className="flex  gap-3 mx-3 tracking-tighter text-xl mt-4">
            <div className="flex flex-col gap-3 mx-3">
              <li>Home</li>
              <li>Events</li>
              <li>Workshops</li>
              <li>Blog</li>
            </div>
            <div className="flex flex-col gap-3 mx-3 ">
              <li>Team</li>
              <li>Gallery</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
        <div className="h-[90%] w-[25%] hidden md:block ">
          <div className="text-6xl font-bold mx-3 mb-2 text-green-500 ">
            Contact Us
          </div>
          <ul className="flex flex-col gap-3 mx-3 pl-5 mt-4 tracking-tighter text-xl items-start justify-center">
            <li className="flex gap-2 justify-center items-center h-10 ">
              <MdOutlineMailOutline className="text-green-500  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                example@gmail.com
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-green-500  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                12345
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-green-500  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                13243434545
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
