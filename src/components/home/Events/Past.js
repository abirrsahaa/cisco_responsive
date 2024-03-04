"use client";
import Image from "next/image";
import Event1 from "../../../assets/asddad.png";
import { motion, useInView } from "framer-motion";
import styles from "./Past.module.css";
const Past = () => {
  return (
    <>
      <div className=" w-[100vw] min-h-screen m-1 mt-0 mb-0 bg-[#121E2C]">
        <div className=" flex flex-col items-center justify-center w-[100%] h-[100%] ">
          <div className="w-[100%] flex flex-col items-center justify-center  h-[25vh] md:h-[35vh]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[210px] h-[34px] md:w-[314px]  md:h-[54px] md:text-[48px] text-[32px]  flex  items-center justify-center font-bold text-[#13FBD3] rounded-lg"
            >
              Recent Events
            </motion.div>
            <p className="w-[297px] text-white text-[13px] md:w-[793px] md:mt-4 font-normal md:text-[20px]  text-center     h-[60%] p-3 ">
              Our recent events were a testament to our commitment to providing
              valuable learning opportunities for our community. Let's reminisce
              on some of the highlights:
            </p>
          </div>
          {/* for cards */}
          <div className="w-[100%] h-[75vh]  md:hidden  flex items-center justify-center ">
            <div className="w-[98%]  h-[98%] bg-[#09131D] rounded-lg shadow-xl m-2   flex flex-col items-center justify-center gap-2 ">
              <div className=" w-[321px] rounded-bl-[14%] overflow-hidden  rounded-tr-[14%] h-[309.63px]  ">
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[167.2px] w-[321px]   flex flex-col items-start justify-center">
                <div className="w-[125px]  h-[28px]  text-[#13FBD3] text-[24px] tracking-tighter flex items-center justify-start font-bold">
                  Event Name
                </div>
                <p className="h-[80px] w-[321px] text-[13px] font-normal mt-3   text-left">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <button class="relative w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative w-[187px] px-5 py-2.5 transition-all ease-in duration-75 text-[20px] font-normal bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3] ">
                      View More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] group  hidden mb-5 mt-2   p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl bg-[#09131D] rounded-tl-none rounded-br-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className=" w-[25%] rounded-bl-[25%] rounded-tr-[25%] h-[90%] scale-[0.9] transition-transform  group-hover:scale-[1] ">
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-[#13FBD3] ">
                  Cisco ExpertSpeak Session
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Delved deep into industry insights with 6 hours of invaluable
                  perspectives shared by Cisco oƯicials directly with our
                  students.
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <button class="relative w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative w-[187px] px-5 py-2.5 transition-all ease-in duration-75 text-[20px] font-normal bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3]">
                      View More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] group  hidden my-5   p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] cursor-pointer bg-[#09131D] group-hover:brightness-100 rounded-3xl rounded-tr-none rounded-bl-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-[#13FBD3] ">
                  Cisco NetAcad Workshop
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Ignited curiosity among enthusiastic learners with a 3-hour
                  exploration of Cisco Packet Tracer, unlocking the world of
                  networking
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <button class="relative w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative w-[187px] px-5 py-2.5 transition-all ease-in duration-75 text-[20px] font-normal bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3]">
                      View More
                    </span>
                  </button>
                </div>
              </div>
              <div className=" w-[25%] rounded-br-[25%] rounded-tl-[25%] h-[90%] scale-[0.9] transition-transform  group-hover:scale-[1] ">
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] group  hidden my-5   p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] cursor-pointer bg-[#09131D]  group-hover:brightness-100 rounded-3xl rounded-tl-none rounded-br-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className=" w-[25%] rounded-bl-[25%] rounded-tr-[25%] h-[90%] scale-[0.9] transition-transform  group-hover:scale-[1] ">
                {" "}
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-[#13FBD3]">
                  Ethical Hacking Training
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Empowered students with practical insights during a 20-hour
                  deep dive into cybersecurity and ethical hacking techniques.
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <button class="relative w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative w-[187px] px-5 py-2.5 transition-all ease-in duration-75 text-[20px] font-normal bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3] ">
                      View More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] group  hidden my-5   p-1 md:flex flex-col items-center justify-center"
          >
            <div className="w-[85%] cursor-pointer bg-[#09131D] group-hover:brightness-100 rounded-3xl rounded-tr-none rounded-bl-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-[#13FBD3] ">
                  Capture the Flag (CTF) Challenge
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Tested skills in a thrilling 12-hour overnight challenge,
                  ending the event on an exhilarating note!
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <button class="relative w-[187px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative w-[187px] px-5 py-2.5 transition-all ease-in duration-75 text-[20px] font-normal bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3]">
                      View More
                    </span>
                  </button>
                </div>
              </div>
              <div className=" w-[25%] rounded-br-[25%] rounded-tl-[25%] h-[90%] scale-[0.9] transition-transform  group-hover:scale-[1] ">
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
          {/* for view all and information  */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Past;
