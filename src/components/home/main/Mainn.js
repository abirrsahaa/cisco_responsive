"use client";
import Header from "@/components/header/Header";
import { Input } from "postcss";
import { useState } from "react";
import ReactPlayer from "react-player";
// import bg from "../../../assets/vii.mp4";
// import high from "./e.mp4";
// import low from "./hehe.mp4";
import final from "./final.mp4";

// import pdf from "./"

const Main = () => {
  const [name, setname] = useState("");

  return (
    <>
      <div className="w-[100vw]  top-0  h-[40vh] md:min-h-screen ">
        <div className="w-full h-full fixed  top-0 left-0 -z-10">
          <video
            src={final}
            autoPlay
            loop
            muted
            className="w-[100%]  h-[100%] object-cover  object-center "
          ></video>
          {/* <video
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        {/* <Header /> */}
        <div className="w-[100%]  h-[100%] flex flex-col items-center justify-center gap-4 mb-5">
          <div className="w-[256px] h-[71px] md:w-[554px] text-white md:h-[141px] font-benderregular md:text-[70px] text-[32px] font-bold leading-none text-center">
            Welcome to <span className="text-[#13FBD3]">Cisco x LPU iGen</span>
          </div>
          <p className="w-[303px] hidden md:block md:w-[699px] md:mb-10 md:h-[50px] font-benderlight h-[54px] text-center text-[14px] md:text-[16px] font-normal">
            Step into the vibrant realm of Cisco x LPU iGen Community, where
            enthusiasm ignites purpose and creativity thrives. Led by the
            torchbearers of tomorrow, we're not just another community; we're
            the architects of a tech revolution. Join us as we sculpt the future
            of innovation and empower the next wave of trailblazers. Welcome to
            our playground of ideas, where every voice echoes with the promise
            of progress. Strap in, adventurer, for here, dreams take flight!{" "}
          </p>
          <p className="w-[303px] md:hidden md:w-[699px] md:mb-10 md:h-[50px] h-[54px] text-center text-[14px] md:text-[16px] font-normal">
            Step into the vibrant realm of Cisco x LPU iGen Community, where
            enthusiasm ignites purpose and creativity thrives. Led by the
            torchbearers of tomorrow, we're not just another community; we're
            the architects of a tech revolution.{" "}
          </p>
          {/* <button class=" transition-all -z-10 group relative w-[150px] mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0] hover:bg-blue-400 dark:text-white focus:ring-4 focus:outline-none ">
            <span className="absolute bottom-0 bg-blue-400 w-0 h-0  left-0 hover:w-full hover:h-full   group-hover:opacity-100 duration-400 ease-in"></span>
            <span class="btn relative z-10 w-[150px] px-5 py-2.5 transition-all ease-in duration-75 text-[12px] md:text-[20px] font-normal   bg-black hover:bg-blue-400  rounded-[37px] text-[#13FBD3] group-hover:text-black">
              Sponsor Us
            </span>
          </button> */}
          {/* <a href="https://uploadnow.io/f/3lHxBs3" download="resume">
            <button className="relative w-[150px] mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0] hover:bg-blue-400 dark:text-white focus:ring-4 focus:outline-none group">
              <span className="absolute bottom-0 bg-blue-400 w-0 h-0 left-0 group-hover:w-full group-hover:h-full duration-400 ease-in"></span>
              <span className="relative z-10 w-[150px] font-benderlight px-5 py-2.5 transition-all ease-in duration-75 text-[12px] md:text-[20px] font-semibold bg-black hover:bg-[#13FBD3] rounded-[37px] text-[#13FBD3] group-hover:text-black">
                Sponsor Us
              </span>
            </button>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Main;
