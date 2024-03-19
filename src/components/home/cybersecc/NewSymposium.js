"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";

import logo from "../../../assets/logo_new.png";
import Image from "next/image";
import Link from "next/link";

import rahul from "../../../assets/Rahul.png";

const NewSymposium = () => {
  const eventDate = new Date("2024-04-01T23:59:59");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeLeft = eventDate - currentTime;
      if (timeLeft <= 0) {
        clearInterval(timer);
      } else {
        const newDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const newHours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const newMinutes = Math.floor(
          (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        const newSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setDays(newDays);
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className=" w-[100vw]  h-[53vh]   md:min-h-screen flex flex-col justify-between items-center ">
        <div className={styles.main}>
          <div className="hidden ml-1 h-[80%] z-10  overflow-hidden w-[37%] md:flex justify-center items-center   rounded-xl">
            <Image
              src={rahul}
              alt="Rahul"
              className="w-[100%] h-full object-contain object-center rounded-xl"
            />
          </div>
          <div className="h-full z-10 md:w-[62%] w-[100%]  p-2 flex flex-col gap-3 justify-start items-center md:items-end ">
            <div className="w-[98%] md:mt-2  rounded-xl h-[25%] mt-5 ">
              <Image
                src={logo}
                alt="logo"
                className="w-[98%] h-full  object-contain md:object-cover object-center "
              />
            </div>
            <div className="w-[85%] md:w-[65%] h-[20%]  rounded-xl md:mt-2 ">
              <div className="w-[100%] font-benderregular h-[72%]  flex justify-between items-center transition-all ease-out duration-200 ">
                <div className="w-[24%] text-white text-xl border-2 border-solid border-[#13FBD3] md:text-8xl font-bold flex items-center justify-center h-[98%] rounded-xl  rounded-r-none">
                  {days}
                </div>
                <div className="w-[24%] text-white text-xl border-2 border-solid border-[#13FBD3] md:text-8xl font-bold flex items-center justify-center h-[98%] ">
                  {hours}
                </div>
                <div className="w-[24%] text-white text-xl border-2 border-solid border-[#13FBD3] md:text-8xl font-bold flex items-center justify-center h-[98%]  ">
                  {minutes}
                </div>
                <div className="w-[24%] text-white text-xl border-2 border-solid border-[#13FBD3] md:text-8xl font-bold flex items-center justify-center h-[98%] rounded-xl rounded-l-none">
                  {seconds}
                </div>
              </div>
              <div className="w-[100%] h-[28%] font-benderregular  flex justify-between items-center ">
                <div className="w-[24%] text-white font-semibold h-[98%] md:text-3xl text-[10px] flex justify-center items-center rounded-xl  rounded-r-none ">
                  Days
                </div>
                <div className="w-[24%] text-white h-[98%] font-semibold md:text-3xl  text-[10px] flex justify-center items-center ">
                  Hours
                </div>
                <div className="w-[24%] text-white h-[98%] font-semibold md:text-3xl text-[10px] flex justify-center items-center  ">
                  Minutes
                </div>
                <div className="w-[24%] text-white  h-[98%] font-semibold md:text-3xl text-[10px] flex justify-center items-center rounded-xl rounded-l-none ">
                  Seconds
                </div>
              </div>
            </div>
            <div className="w-[65%]  z-50 h-[20%] flex justify-center items-center  rounded-xl mt-2">
              <Link
                href="/cybersec"
                className="w-[80%] h-[65%] md:w-[50%] md:h-[40%]"
              >
                <button
                  className={
                    "card-wrapper w-[100%] shadow-xl h-[100%]  flex items-center justify-center text-center rounded-2xl p-2 text-sm text-blue-300 font-semibold " +
                    styles.content
                  }
                >
                  <div className="card-content flex items-center justify-center text-sm  md:text-xl">
                    <span className="font-benderregular ">Register Now</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewSymposium;
