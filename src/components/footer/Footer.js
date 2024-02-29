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
        <div className="w-full h-[13%]  md:hidden">
          <div className="w-[20%] h-[100%]">
            <Image
              src={cisco}
              alt="cisco"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full h-[40%]  md:hidden">
          <div className="text-3xl font-bold mx-3 mb-2 text-green-500 ">
            Quick Links
          </div>
          <ul className="flex flex-col gap-2 mx-3 tracking-tighter text-sm">
            <li>Home</li>
            <li>Events</li>
            <li>Workshops</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-full h-[30%]  md:hidden">
          <div className="text-3xl font-bold mx-3 mb-2 text-green-500 ">
            Contact Us
          </div>
          <ul className="flex flex-col gap-2 mx-3 tracking-tighter text-sm">
            <li>
              <MdOutlineMailOutline className="text-green-500" />
              example@gmail.com
            </li>
            <li>
              <IoCallOutline className="text-green-500" />
              12345
            </li>
            <li>
              <IoCallOutline className="text-green-500" />
              13243434545
            </li>
          </ul>
        </div>
        <div className="w-full h-[17%] flex justify-center items-center gap-4  md:hidden">
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
        <div className="h-[90%] w-[25%] ">
          {" "}
          <div className="text-6xl font-bold mx-3 mb-2 text-green-500 ">
            Quick Links
          </div>
          <ul className="flex flex-col gap-3 mx-3 tracking-tighter text-xl">
            <li>Home</li>
            <li>Events</li>
            <li>Workshops</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="h-[90%] w-[25%] ">
          <div className="text-6xl font-bold mx-3 mb-2 text-green-500 ">
            Contact Us
          </div>
          <ul className="flex flex-col gap-3 mx-3 tracking-tighter text-xl">
            <li>
              <MdOutlineMailOutline className="text-green-500" />
              example@gmail.com
            </li>
            <li>
              <IoCallOutline className="text-green-500" />
              12345
            </li>
            <li>
              <IoCallOutline className="text-green-500" />
              13243434545
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
