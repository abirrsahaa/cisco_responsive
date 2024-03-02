"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
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
      <div className="w-[100%] h-[30vh] md:h-[40vh]  ">
        <div className="w-[100%] h-[100%]   flex justify-center items-center p-2">
          <div className="h-[90%] w-[90%] md:w-[50%]  rounded-lg flex flex-col items-center justify-center ">
            <div className="w-[100%] h-[40%] flex justify-center items-center text-2xl md:text-5xl p-2">
              COUNTDOWN TO D-DAY
            </div>
            <div className="w-[100%] md:w-[85%] flex justify-between items-center  h-[60%]  p-1">
              <div className="bg-gray-800 p-4 rounded-lg w-[24%] h-[95%] gap-1 md:gap-2 flex flex-col justify-center items-center">
                <div className="text-4xl md:text-7xl font-semibold  ">
                  {days}
                </div>
                <div className="text-gray-400 text-sm md:text-3xl">DAYS</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg w-[24%] h-[95%] gap-1 md:gap-2 flex flex-col justify-center items-center">
                <div className="text-4xl md:text-7xl font-semibold  ">
                  {hours}
                </div>
                <div className="text-gray-400 text-sm md:text-3xl">HOURS</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg w-[24%] h-[95%] gap-1 md:gap-2 flex flex-col justify-center items-center">
                <div className="text-4xl md:text-7xl font-semibold  ">
                  {minutes}
                </div>
                <div className="text-gray-400 text-sm md:text-3xl">MINUTES</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg w-[24%] h-[95%] gap-1 md:gap-2 flex flex-col justify-center items-center">
                <div className="text-4xl md:text-7xl font-semibold  ">
                  {seconds}
                </div>
                <div className="text-gray-400 text-sm md:text-3xl">SECONDS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
