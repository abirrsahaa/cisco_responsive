"use client";
import { MdCancelPresentation } from "react-icons/md";

import photo1 from "../../assets/ctf1.JPG";
import photo2 from "../../assets/ctf2.JPG";
import photo3 from "../../assets/ctf3.JPG";
import photo4 from "../../assets/ctf4.JPG";
import photo5 from "../../assets/ctf5.JPG";
import photo6 from "../../assets/ctf6.JPG";
import Image from "next/image";

const Modal3 = ({ setshowmodal }) => {
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
              Capture the Flag (CTF) Challenge
            </h1>
          </div>
          <div className="mt-2 rounded-xl flex items-center justify-center  w-[95%] h-[40%]">
            <p className="w-[80%] text-center font-benderregular text-white font-bold">
              The Capture the Flag (CTF) Challenge was an adrenaline-fueled test
              of participants' cybersecurity prowess. Over 12 thrilling hours,
              participants faced a series of complex challenges designed to push
              their limits. From decrypting codes to thwarting simulated cyber
              attacks, participants showcased their expertise in a dynamic and
              competitive environment, gaining invaluable experience and
              sharpening their problem-solving skills
            </p>
          </div>
          {/* <div className="mt-2 rounded-xl  flex items-center justify-center w-[95%] h-[40%]">
            <div className="w-[90%] rounded-lg flex flex-col items-center justify-center overflow-hidden p-1">
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular backdrop-filter backdrop-blur-3xl bg-opacity-10">
                <b>Day 1 Speaker:</b>PraƯul Khandelwal | Senior Security Cloud
                Consulting Engineer at Cisco | LPU Alumnus
              </p>
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                <b>Day 2 Speaker:</b> Rajesh Kumar | Senior Solutions Architect
                at Cisco Systems
              </p>
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                <b>Day 3 Speaker 1:</b> Ashish Dagar, Security Consultant
                Engineer at Cisco Systems
              </p>
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                <b>Day 3 Speaker 2:</b> Vishnu Dutt, Network Architect at Cisco
              </p>
            </div>
          </div> */}
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

export default Modal3;
