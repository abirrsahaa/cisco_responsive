"use client";
import Image from "next/image";
import Event1 from "../../../assets/asddad.png";
import { motion, useInView } from "framer-motion";
import styles from "./Past.module.css";
import { useEffect, useState } from "react";
import Events from "@/components/events/Events";

import Modal from "@/components/modal/Modal";
import Modal1 from "@/components/modal/Modal1";
import Modal2 from "@/components/modal/Modal2";
import Modal3 from "@/components/modal/Modal3";

import event1 from "../../../assets/expert.JPG";
import event2 from "../../../assets/DSC_0139.JPG";
import event3 from "../../../assets/netcad6.JPG";
import event4 from "../../../assets/IMG_0369.JPG";

import Link from "next/link";
const Past = () => {
  const [clicked, setclicked] = useState(false);
  const data = [
    {
      name: "Cisco ExpertSpeak Session",
      description:
        "Delved deep into industry insights with 6 hours of invaluable perspectives shared by Cisco oƯicials directly with our students.",
      image: event1,
    },
    {
      name: "Cisco NetAcad Workshop",
      description:
        "Ignited curiosity among enthusiastic learners with a 3-hour exploration of Cisco Packet Tracer, unlocking the world of networking",
      image: event2,
    },
    {
      name: "Ethical Hacking Training",
      description:
        "Empowered students with practical insights during a 20-hour deep dive into cybersecurity and ethical hacking techniques.",
      image: event3,
    },
    {
      name: "Capture the Flag (CTF) Challenge",
      description:
        "Tested skills in a thrilling 12-hour overnight challenge, ending the event on an exhilarating note!",
      image: event4,
    },
  ];
  const [current, setCurrent] = useState(0);

  const [showmodal, setshowmodal] = useState(false);
  const [showmodal1, setshowmodal1] = useState(false);
  const [showmodal2, setshowmodal2] = useState(false);
  const [showmodal3, setshowmodal3] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);
  return (
    <>
      <div className=" w-[100vw] min-h-screen  mt-0 mb-0 bg-[#121E2C]">
        <div className="flex flex-col items-center md:items-start justify-center w-[100%] h-[100%] ">
          <div className="w-[100%] flex flex-col items-center justify-center  h-[25vh] md:h-[35vh]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[210px] font-benderregular h-[34px] md:w-[314px] md:h-[54px] md:text-[48px] text-[32px] flex items-center justify-center font-bold text-[#13FBD3] rounded-lg mt-10"
            >
              Recent Events
            </motion.div>
            <p className="w-[297px]  flex justify-center items-center  font-benderlight text-white text-[13px] md:w-[793px] md:mt-4 font-normal md:text-[20px] text-center h-[60%] p-3 ">
              Our recent events were a testament to our commitment to providing
              valuable learning opportunities for our community. Let's reminisce
              on some of the highlights:
            </p>
          </div>
          {/* for cards */}
          <div className="w-[100%] h-[75vh] md:hidden flex items-center justify-center ">
            <div className="w-[98%] h-[98%] bg-[#09131D] rounded-lg shadow-xl m-2 flex flex-col items-center justify-center gap-2">
              <div className="w-[321px] overflow-hidden h-[300px]">
                <Image
                  src={data[current].image}
                  alt="event1"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
              <div className="h-[167.2px] font-benderregular w-[321px] flex flex-col items-start justify-center">
                <div className="w-[325px] h-[40px] text-[#13FBD3] text-[22px] tracking-tighter flex items-center justify-start font-bold">
                  {data[current].name}
                </div>
                <p className="h-[80px] w-[321px] text-[13px] font-normal mt-3 text-left">
                  {" "}
                  {data[current].description}
                </p>
                <div className="w-full h-[25%] flex items-center justify-start">
                  <Link href="/Events">
                    <button className="relative w-[187px] inline-flex rounded-2xl items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                      <span className="relative w-[187px] px-5 py-2.5 rounded-2xl transition-all ease-in duration-75 text-[20px] font-normal bg-gray-900s dark:bg-gray-900 text-[#13FBD3] ">
                        View More
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CARDS FOR LARGER SCREEN SIZE DEVICES */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] z-10 group hidden mb-5 mt-0 p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] z-10 cursor-pointer group-hover:brightness-100 rounded-3xl bg-[#09131D] h-[45vh] flex items-center justify-center gap-3">
              {showmodal && <Modal setshowmodal={setshowmodal} />}
              <div className=" w-[25%] z-20 h-[90%] scale-[0.8] transition-transform duration-500 group-hover:scale-[0.9]">
                <Image
                  src={event1}
                  alt="event1"
                  className="w-full z-20 h-full object-cover object-center rounded-[45px]"
                />
              </div>
              <div className="h-[90%] font-benderregular w-[60%] transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-5xl text-[#13FBD3] ">
                  Cisco ExpertSpeak Session
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl">
                  {" "}
                  Delved deep into industry insights with 6 hours of invaluable
                  perspectives shared by Cisco Offficials directly with our
                  students.
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  {/* <Link href="/cybersec"> */}
                  <button className="relative rounded-2xl z-10 w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span
                      onClick={() => {
                        setshowmodal(true);
                        console.log(showmodal);
                      }}
                      className="relative w-[187px] z-10 px-5 rounded-2xl py-2.5 transition-all ease-in duration-75 text-[20px] font-semibold bg-gray-900 dark:bg-gray-900 text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black"
                    >
                      View More
                    </span>
                  </button>

                  {/* </Link> */}
                </div>
              </div>
            </div>
            {/* {clicked && <Events clicked={clicked} setclicked={setclicked} />} */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={showmodal ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] z-10 group  hidden my-5 p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] z-10 font-benderregular cursor-pointer bg-[#09131D] group-hover:brightness-100 rounded-3xl h-[45vh] flex items-center justify-center gap-3 ">
              {showmodal1 && <Modal1 setshowmodal={setshowmodal1} />}
              <div className="h-[90%] font-benderregular w-[60%] transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-5xl text-[#13FBD3] ">
                  Cisco NetAcad Workshop
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl">
                  {" "}
                  Ignited curiosity among enthusiastic learners with a 3-hour
                  exploration of Cisco Packet Tracer, unlocking the world of
                  networking.
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  {/* <Link href="/cybersec"> */}
                  <button
                    onClick={() => {
                      setshowmodal1(true);
                      console.log(showmodal1);
                    }}
                    className="relative rounded-2xl w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    <span
                      onClick={() => setclicked(!clicked)}
                      className="relative w-[187px] px-5 rounded-2xl py-2.5 transition-all ease-in duration-75 text-[20px] font-semibold bg-gray-900 dark:bg-gray-900 text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black"
                    >
                      View More
                    </span>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
              {/* {showmodal1 && <Modal1 setshowmodal={setshowmodal1} />} */}
              <div className="w-[25%] h-[90%] scale-[0.8] transition-transform duration-500 group-hover:scale-[0.9]">
                <Image
                  src={event4}
                  alt="event1"
                  className="w-full h-full object-cover object-center rounded-[45px]"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={showmodal1 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] z-10 group hidden my-5 p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] z-10 cursor-pointer bg-[#09131D]  group-hover:brightness-100 rounded-3xl h-[45vh] flex items-center justify-center gap-3 ">
              {showmodal2 && <Modal2 setshowmodal={setshowmodal2} />}
              <div className=" w-[25%] h-[90%] scale-[0.8] transition-transform duration-500 group-hover:scale-[0.9]">
                <Image
                  src={event3}
                  alt="event1"
                  className="w-full h-full object-cover object-center rounded-[45px]"
                />
              </div>
              <div className="h-[90%] font-benderregular w-[60%] transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-5xl text-[#13FBD3]">
                  Ethical Hacking Training
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Empowered students with practical insights during a 20-hour
                  deep dive into cybersecurity and ethical hacking techniques.
                </p>
                <div className="w-full h-[25%] flex items-center justify-start">
                  {/* <Link href="/cybersec"> */}
                  <button
                    onClick={() => {
                      setshowmodal2(true);
                      console.log(showmodal2);
                    }}
                    className="relative rounded-2xl w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    <span
                      // onClick={() => setclicked(!clicked)}
                      className="relative w-[187px] px-5 rounded-2xl py-2.5 transition-all ease-in duration-75 text-[20px] font-semibold bg-gray-900 dark:bg-gray-900 text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black"
                    >
                      View More
                    </span>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
              {/* {showmodal2 && <Modal2 setshowmodal={setshowmodal2} />} */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={showmodal2 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] z-10 group  hidden my-5   p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] z-10 cursor-pointer bg-[#09131D] group-hover:brightness-100 rounded-3xl h-[45vh] flex items-center justify-center gap-3 ">
              {showmodal3 && <Modal3 setshowmodal={setshowmodal3} />}
              <div className="h-[90%] font-benderregular w-[60%] transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-5xl text-[#13FBD3] ">
                  Capture the Flag (CTF) Challenge
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Tested skills in a thrilling 12-hour overnight challenge,
                  ending the event on an exhilarating note !
                </p>
                <div className="w-full h-[25%] flex items-center justify-start">
                  {/* <Link href="/cybersec"> */}
                  <button
                    onClick={() => {
                      setshowmodal3(true);
                      console.log(showmodal3);
                    }}
                    className="relative rounded-2xl w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    <span
                      // onClick={() => setclicked(!clicked)}
                      className="relative w-[187px] px-5 rounded-2xl py-2.5 transition-all ease-in duration-75 text-[20px] font-semibold bg-gray-900 dark:bg-gray-900 text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black"
                    >
                      View More
                    </span>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
              {/* {showmodal3 && <Modal3 setshowmodal={setshowmodal3} />} */}
              <div className=" w-[25%] h-[90%] scale-[0.8] transition-transform duration-500 group-hover:scale-[0.9]">
                <Image
                  src={event2}
                  alt="event1"
                  className="w-full h-full object-cover object-center rounded-[45px]"
                />
              </div>
            </div>
          </motion.div>
          {/* for view all and information  */}
          {/* <div className="pb-5 md:pt-0 pt-5">
            <button class="relative w-[187px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative w-[187px] px-5 py-2.5 transition-all ease-in duration-75 text-[20px] font-semibold bg-white dark:bg-gray-900 text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black">
                View All
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Past;
