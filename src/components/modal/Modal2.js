"use client";
import { MdCancelPresentation } from "react-icons/md";

import photo1 from "../../assets/netcad1.JPG";
import photo2 from "../../assets/netcad2.JPG";
import photo3 from "../../assets/netcad3.JPG";
import photo4 from "../../assets/netcad4.JPG";
import photo5 from "../../assets/netcad5.JPG";
import photo6 from "../../assets/netcad6.JPG";
import Image from "next/image";

const Modal2 = ({ setshowmodal }) => {
  return (
    <div className="w-[95vw]  z-50  mx-auto   h-[100vh] fixed    flex justify-center  items-center bg-white-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 bg-gray-100  ">
      <div className="relative w-[95%] h-[98%]     rounded-xl flex  justify-center items-center gap-2">
        {/* <div className="mt-2 flex items-center justify-center w-[90%] h-[20vh] rounded-lg bg-red-500"></div> */}
        <div className="  grid grid-cols-6 grid-rows-5 grid-flow-col gap-4 w-[65%] h-[95vh] rounded-lg ">
          <div className=" m-2 row-span-2 col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={photo1}
              alt="photo1"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className=" m-2 row-span-3 col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={photo2}
              alt="photo2"
              className="w-full h-full object-center object-cover"
            />
          </div>
          {/* <div className="bg-yellow-500 m-2 row-span-2 col-sp rounded-2xlan-2">3</div> */}
          <div className=" m-2 row-span-3 col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={photo3}
              alt="photo3"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className=" m-2 row-span-2 col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={photo4}
              alt="photo4"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className=" m-2 row-span-2 col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={photo5}
              alt="photo5"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className=" m-2 row-span-3 col-span-2 rounded-2xl overflow-hidden">
            <Image
              src={photo6}
              alt="photo6"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="  flex flex-col items-center justify-center w-[35%] h-[95vh] rounded-lg ">
          <div className="mt-2 rounded-xl flex justify-center items-center  w-[95%] h-[15%]">
            <h1 className="w-[90%] font-benderregular text-[#13FBD3] text-center font-bold text-3xl">
              Cisco NetAcad Workshop
            </h1>
          </div>
          <div className="mt-2 rounded-xl flex items-center justify-center  w-[95%] h-[40%]">
            <p className="w-[80%] text-center font-benderregular text-white font-bold">
              The Cisco NetAcad Workshop was a gateway to expanding
              participants' networking skills. Over the course of 3 hours,
              attendees delved into Cisco Packet Tracer, a hands-on exploration
              that demystified networking principles. Guided by knowledgeable
              instructors, participants not only learned theory but also gained
              practical experience, equipping them with essential tools for
              success in the digital realm.
            </p>
          </div>
          <div className="mt-2 rounded-xl  flex items-center justify-center w-[95%] h-[40%]">
            <div className="w-[90%] rounded-lg flex flex-col items-start justify-center overflow-hidden p-1">
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                Speaker: Dr. Gulshan Kumar | Professor, LPU | Cisco Devnet
                Associate
                [https://www.linkedin.com/in/dr-gulshan-kumar-14178838/]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[5%] h-[5%] absolute top-0 right-1  flex items-center justify-end cursor-pointer"
        onClick={() => setshowmodal(false)}
      >
        <MdCancelPresentation className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default Modal2;
