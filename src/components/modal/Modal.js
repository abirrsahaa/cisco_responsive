"use client";
import { MdCancelPresentation } from "react-icons/md";

import photo1 from "../../assets/ctf1.JPG";
import photo2 from "../../assets/ctf2.JPG";
import photo3 from "../../assets/ctf3.JPG";
import photo4 from "../../assets/ctf4.JPG";
import photo5 from "../../assets/ctf5.JPG";
import photo6 from "../../assets/ctf6.JPG";
import Image from "next/image";

const Modal = ({ setshowmodal }) => {
  return (
    <div className="w-[95vw]  z-50  mx-auto   h-[100vh]  fixed    flex justify-center  items-center bg-white-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 bg-gray-100  ">
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
              Cisco ExpertSpeak Session
            </h1>
          </div>
          <div className="mt-2 rounded-xl flex items-center justify-center  w-[95%] h-[40%]">
            <p className="w-[80%] text-center font-benderregular text-white font-bold">
              During the Cisco ExpertSpeak Session, participants had the
              exclusive opportunity to immerse themselves in industry insights.
              Led by Cisco oƯicials, this 6-hour session was a rich exploration
              of the ever-evolving tech landscape. Through direct interaction
              and practical examples, students gained invaluable perspectives,
              deepening their understanding of key industry trends and
              challenges.
            </p>
          </div>
          <div className="mt-2 rounded-xl  flex items-center justify-center w-[95%] h-[40%]">
            <div className="w-[90%] rounded-lg flex flex-col items-start justify-center overflow-hidden p-1">
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                Day 1:&nbsp;&nbsp;PraƯul Khandelwal | Senior Security Cloud
                Consulting Engineer at Cisco | LPU Alumnus
              </p>
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                Day 2 :&nbsp;&nbsp; Rajesh Kumar | Senior Solutions Architect at
                Cisco Systems
              </p>
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                Day 3 :&nbsp;&nbsp; Ashish Dagar, Security Consultant Engineer
                at Cisco Systems
              </p>
              <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular">
                Day 3:&nbsp;&nbsp; Vishnu Dutt, Network Architect at Cisco
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

export default Modal;
