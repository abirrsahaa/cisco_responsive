"use client";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import me from "../../../assets/144.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import who from "../../../assets/future.jpeg";
import keda from "../../../assets/car.png";

import { useEffect, useState } from "react";

const Testimonials = () => {
  const data = [
    {
      name: "Harsh Kumar",
      bio: "I express my gratitude to Secuneus Technologies and Cisco x LPU iGen for providing an abundance of invaluable insights into the realm of Cybersecurity and Ethical Hacking. Your sessions were truly enlightening, and I greatly appreciated the wealth of knowledge shared. ",
      caption: " B.Tech CSE, LPU ’27 | CyberSec Symposium 1.0 Participant ",
      img: me,
    },
    {
      name: "Guru Sharan Kumar Priye",
      bio: "Thrilled to share that our team secured the runner-up position in the adrenaline-fueled 12-Hour CTF Challenge, a collaborative initiative by Cisco X LPU iGen! This 12-hour sprint was a thrilling journey where we honed our skills, delving into real-world scenarios and emerging with a deeper understanding of the cybersecurity domain. ",
      caption: " B.Tech CSE, LPU ’27 | CyberSec Symposium 1.0 Participant",
      img: who,
    },
    {
      name: "MD Faisal Jaman",
      bio: "This was an amazing CTF of 12 hrs with a lot of challenges including cryptography, steganography, web security, reverse engineering, forensics, osint, networking. I along with my whole team have done a great performance in the CTF and shown our skills towards them. ",
      caption: " B.Tech CSE, LPU ’27 | CyberSec Symposium 1.0 Participant",
      img: keda,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);
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
      <div className="w-[100vw]  h-[80vh] flex flex-col justify-center items-center bg-[#09131D]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-[210px] h-[34px] mb-5 md:w-[314px]  md:h-[54px] md:text-[48px] text-[32px]  flex  items-center justify-center font-bold text-[#13FBD3] rounded-lg"
        >
          Testimonials
        </motion.div>
        <div className="w-[85%] transition-all ease-in duration-300  h-[80%] md:hidden rounded-xl overflow-hidden m-1 flex flex-col items-center justify-center bg-[#121E2C] shadow-xl mb-3">
          <div className="w-[100%] h-[60%]   flex justify-center items-center">
            <div className="w-[80%] relative h-[95%] overflow-hidden rounded-xl ">
              <div className="w-[100%] p-2 flex flex-col  items-start justify-center h-[25%] bg-black bottom-0 absolute opacity-[0.6] ">
                <div className="text-green-500 font-bold text-xl mb-3 h-10 flex  items-center justify-start text-left pl-1 ">
                  {data[currentIndex].name}
                </div>
                <p className="text-white p-1 text-lg tracking-tight h-12 mb-10 leading-none text-left pb-4   flex items-center justify-start">
                  {data[currentIndex].caption}
                </p>
              </div>
              <Image
                src={data[currentIndex].img}
                alt="me"
                className="w-[100%] h-[100%] object-cover object-center -z-10"
              />
            </div>
          </div>
          <div className="w-[95%] relative h-[40%] rounded-xl flex items-center justify-center ">
            <ImQuotesLeft className="w-6 absolute top-1 left-2 h-6 text-green-200" />
            <div className="w-[80%] h-[80%] rounded-xl p-2  flex items-center tracking-tighter leading-none justify-center text-center">
              {" "}
              {data[currentIndex].bio}
            </div>
            <ImQuotesRight className="w-6 h-6 absolute bottom-1 right-2 text-green-200" />
          </div>
        </div>
        <div className="w-[70%] relative   h-[70%] hidden  rounded-xl overflow-hidden m-1 md:flex  items-center justify-center bg-[#121E2C]">
          <div className="w-[80%] h-[80%]  flex justify-center items-center">
            <div className="w-[35%] h-[100%]  overflow-hidden rounded-xl transition ease-out duration-300">
              <Image
                src={data[current].img}
                alt="me"
                className="w-[100%] h-[100%] object-cover object-center -z-10 transition ease-out duration-300"
              />
            </div>
            <div className="w-[65%] h-[100%] rounded-lg ml-5">
              <div className="w-[100%] h-[40%]  flex flex-col gap-3 pt-3 px-2 rounded-lg">
                <div className="text-[#13FBD3] font-bold text-3xl text-left">
                  {data[current].name}
                </div>
                <p className="text-white p-1 text-lg tracking-tight leading-none text-left">
                  {data[current].caption}
                </p>
              </div>
              <div className="w-[100%] h-[60%] p-3  rounded-lg">
                <div className="w-[90%] relative h-[90%] rounded-xl flex items-center justify-center ">
                  <ImQuotesLeft className="w-6 absolute top-1 left-2 h-6 text-[#13FBD3]" />
                  <div className="w-[80%] text-white h-[80%] rounded-xl  flex items-center tracking-tighter leading-none justify-center text-center">
                    {data[current].bio}
                  </div>
                  <ImQuotesRight className="w-6 h-6 absolute bottom-1 right-2 text-[#13FBD3]" />
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
