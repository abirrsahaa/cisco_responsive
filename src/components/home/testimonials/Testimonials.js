"use client";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import me from "../../../assets/144.png";
import Image from "next/image";
import who from "../../../assets/future.jpeg";
import keda from "../../../assets/car.png";

import { useState } from "react";

const Testimonials = () => {
  const data = [
    {
      name: "Name",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: me,
    },
    {
      name: "Biru",
      bio: "Lorem Ipsum is simply dummy text of tumaaaaaaaaaaa baba heda  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      caption:
        "Lorem Ipsum is simply dummy text of the printing heda tumar putki and typesetting industry.",
      img: who,
    },
    {
      name: "Abir",
      bio: "Lorem Ipsum is simply dummy text nodir put tumar jiii of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and bal tumi heda  typesetting industry.",
      img: keda,
    },
  ];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
      <div className="w-[100vw]  h-[80vh] flex flex-col justify-center items-center">
        <div className="w-[100%] h-[20%] text-green-500 flex items-center font-bold justify-center text-4xl ">
          TESTIMONIALS
        </div>
        <div className="w-[85%] transition-all ease-in duration-300  h-[80%] md:hidden rounded-xl overflow-hidden m-1 flex flex-col items-center justify-center bg-gray-600 mb-3">
          <div className="w-[100%] h-[70%]  flex justify-center items-center">
            <div className="w-[80%] relative h-[95%] overflow-hidden rounded-xl ">
              <div className="w-[100%] p-2 flex flex-col  items-start justify-center h-[25%] bg-black bottom-0 absolute opacity-[0.4] ">
                <div className="text-green-500 font-bold text-2xl mb-3 h-10 flex  items-center justify-start text-left pl-1 ">
                  Name
                </div>
                <p className="text-white p-1 text-lg tracking-tight h-12 mb-10 leading-none text-left pb-4   flex items-center justify-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <Image
                src={me}
                alt="me"
                className="w-[100%] h-[100%] object-cover object-center -z-10"
              />
            </div>
          </div>
          <div className="w-[80%] relative h-[30%] rounded-xl flex items-center justify-center ">
            <ImQuotesLeft className="w-6 absolute top-1 left-2 h-6 text-green-200" />
            <div className="w-[80%] h-[80%] rounded-xl p-2  flex items-center tracking-tighter leading-none justify-center text-center">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
            <ImQuotesRight className="w-6 h-6 absolute bottom-1 right-2 text-green-200" />
          </div>
        </div>
        <div className="w-[70%] relative   h-[70%] hidden  rounded-xl overflow-hidden m-1 md:flex  items-center justify-center bg-gray-600">
          <div className="w-[80%] h-[80%]  flex justify-center items-center">
            <div className="w-[35%] h-[100%]  overflow-hidden rounded-xl">
              <Image
                src={data[current].img}
                alt="me"
                className="w-[100%] h-[100%] object-cover object-center -z-10"
              />
            </div>
            <div className="w-[65%] h-[100%] rounded-lg">
              <div className="w-[100%] h-[40%]  flex flex-col gap-3 pt-3 px-2 rounded-lg">
                <div className="text-green-500 font-bold text-3xl text-left">
                  {data[current].name}
                </div>
                <p className="text-white p-1 text-lg tracking-tight leading-none text-left">
                  {data[current].caption}
                </p>
              </div>
              <div className="w-[100%] h-[60%] p-3  rounded-lg">
                <div className="w-[90%] relative h-[90%] rounded-xl flex items-center justify-center ">
                  <ImQuotesLeft className="w-6 absolute top-1 left-2 h-6 text-green-600" />
                  <div className="w-[80%] h-[80%] rounded-xl  flex items-center tracking-tighter leading-none justify-center text-center">
                    {data[current].bio}
                  </div>
                  <ImQuotesRight className="w-6 h-6 absolute bottom-1 right-2 text-green-600" />
                </div>
              </div>
            </div>
          </div>
          <FaCircleArrowLeft
            className="absolute w-10 h-10 bottom-2  text-black hover:cursor-pointer right-12 mr-10"
            onClick={previousSlide}
          />
          <FaCircleArrowRight
            className="absolute w-10 h-10 bottom-2 hover:cursor-pointer  text-black right-8"
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
