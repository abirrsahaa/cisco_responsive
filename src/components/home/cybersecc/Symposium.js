"use client";
import Image from "next/image";

import symposium from "../../../assets/symposium.png";
import { useEffect, useState } from "react";
const Symposium = () => {
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
      <div className="w-[100vw] h-[53vh]   md:min-h-screen flex flex-col justify-between items-center ">
        <div className="w-[100%] h-[100%]  flex flex-col p-2 gap-1 justify-between items-center">
          <div className="font-semibold md:text-6xl text-green-400 text-2xl w-[100%] h-[20%] md:h-[25%]  flex items-center justify-center  ">
            Upcoming Event
          </div>
          <div className="w-[100%] h-[25%] md:h-[40%]  flex items-center justify-center ">
            <div className="w-[94%] md:w-[85%] h-[95%]  rounded-xl">
              <Image
                src={symposium}
                alt="symposium"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
          <div className="w-[100%] h-[55%]  md:w-[85%] md:h-[30%] md:mt-2  flex flex-col md:flex md:flex-row gap-1 items-center p-1 justify-between md:justify-center md:items-start">
            <div className="w-[90%]  h-[55%]  md:w-[60%] md:h-[85%]  ">
              <div className="w-[100%] h-[72%]  flex justify-between items-center ">
                <div className="w-[24%] text-5xl border-2 border-solid border-green-500  md:text-8xl font-bold flex items-center justify-center h-[98%] rounded-xl  rounded-r-none">
                  {days}
                </div>
                <div className="w-[24%] text-5xl border-2 border-solid border-green-500 md:text-8xl font-bold flex items-center justify-center h-[98%] ">
                  {hours}
                </div>
                <div className="w-[24%] text-5xl border-2 border-solid border-green-500 md:text-8xl font-bold flex items-center justify-center h-[98%]  ">
                  {minutes}
                </div>
                <div className="w-[24%] text-5xl border-2 border-solid border-green-500 md:text-8xl font-bold flex items-center justify-center h-[98%] rounded-xl rounded-l-none">
                  {seconds}
                </div>
              </div>
              <div className="w-[100%] h-[28%]  flex justify-between items-center ">
                <div className="w-[24%] font-semibold h-[98%] md:text-3xl text-xl flex justify-center items-center rounded-xl  rounded-r-none ">
                  Days
                </div>
                <div className="w-[24%] h-[98%] font-semibold md:text-3xl  text-xl flex justify-center items-center ">
                  Hours
                </div>
                <div className="w-[24%] h-[98%] font-semibold md:text-3xl text-xl flex justify-center items-center  ">
                  Minutes
                </div>
                <div className="w-[24%]  h-[98%] font-semibold md:text-3xl text-xl flex justify-center items-center rounded-xl rounded-l-none ">
                  Seconds
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[30%] md:h-[80%] md:w-[30%]  flex items-center justify-center">
              <button className=" w-[30%] border-t-2 border-b-2  border-green-500 h-[80%] md:w-[50%] md:h-[40%] flex items-center justify-center text-center rounded-2xl p-2 text-sm text-blue-300 font-semibold ">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Symposium;
