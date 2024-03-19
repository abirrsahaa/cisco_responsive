import { FaLinkedin } from "react-icons/fa";

import rahul from "../../assets/rahul1.png";
import vishnu from "../../assets/vishnu1.png";
import raj from "../../assets/raj.png";
import abhisek from "../../assets/abhisek.png";
import govindo from "../../assets/govindo.png";
import shashank from "../../assets/shashank.png";
import avdesh from "../../assets/avdesh.png";
import simran from "../../assets/simran.png";
import saurav from "../../assets/saurav.png";
import Image from "next/image";

const Speaker = () => {
  return (
    <>
      <div className="w-[100vw]  bg-[#121E2C] gap-4  flex flex-col justify-start items-center">
        <div className="w-[90vw] rounded-xl h-[20vh]  text-center flex items-center justify-center text-3xl md:text-6xl font-benderregular font-bold text-[#12e2bf]">
          KEYNOTE SPEAKERS
        </div>
        <div className="w-[95vw] md:w-[90vw] rounded-xl   flex flex-row flex-wrap gap-2 md:gap-4 justify-center items-center ">
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                <Image
                  src={rahul}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[8vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Rahul Kolle
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  Cisco
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Rahul Kolle is a Technical Project Manager at Cisco where he
                manages multi-million dollar projects for Cisco customers in
                Europe and the UK.{" "}
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                {" "}
                <Image
                  src={vishnu}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[8vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Vishnu Dutt
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  Cisco
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Vishnu Dutt is a seasoned Solutions Architect with over 15 years
                of expertise in Network Consulting.He holds a prestigious CCIE
                Routing and Switching certification, showcasing his profound
                knowledge in Switching, Routing, and Network Security domains
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                <Image
                  src={raj}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[12vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Rajtilak Majumder
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  PwC
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Rajtilak Majumder, CISSP, is the Director of Information
                Security at PwC India, bringing over a decade of experience in
                cybersecurity leadership roles across diverse sectors. With
                expertise in security policy governance, risk management, and
                infrastructure controls.
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                {" "}
                <Image
                  src={abhisek}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[8vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Abhishek Sen
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  PwC
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Abhishek Sen, an Associate Director at PwC, is a seasoned
                Enterprise Security Architect spanning 17 years in Information
                and Cyber Security. Holding certifications like CISSP, AZ-500,
                and CDPSE, he excels in Security Solution Design, Risk
                Management, and compliance frameworks like PCI DSS and ISO
                27001.
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                <Image
                  src={govindo}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[12vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Gobinda Karmakar
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  PwC
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Gobinda Karmakar, an Application Security Architect at PwC India
                and an alumnus of LPU, boasts extensive experience in
                Information Security and Cybersecurity. Proficient in
                implementing robust security controls, Gobinda specializes in
                areas such as Identity and Access Management, Data Protection,
                and Cloud Security.
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]   rounded-full">
                {" "}
                <Image
                  src={shashank}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[12vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Shashank Dubey
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  Payatu
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
                in AWS and Kubernetes security. With over 3 years of industry
                experience, he's adept at threat modeling, compliance
                frameworks, and cloud-native security.
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                <Image
                  src={avdesh}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[12vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Awadhesh Shukla
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  Quick Heal
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Awadhesh Shukla, an esteemed alumnus of LPU, is a distinguished
                cybersecurity professional serving as a Principal Security
                Consultant at Quick Heal. Armed with a plethora of CompTIA
                certifications and renowned as a Certified EC-Council Instructor
                (CEI) and Certified Ethical Hacker (CEH).
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]   rounded-full">
                {" "}
                <Image
                  src={simran}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[12vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Prabhsimran Singh
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  Finelabs
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Prabhsimran Singh, a Senior Security Engineer at Finelabs and an
                alumnus of LPU, is a distinguished Cybersecurity Consultant
                specializing in product security. With a robust background in
                ethical hacking and a suite of prestigious certifications
                including OSCP and CEH.
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
            <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
              <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
                {" "}
                <Image
                  src={saurav}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[12vw] h-[6vh] absolute bottom-3 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-xl text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Sourabh Bhandari
                </div>
                <div className="w-full h-[40%]  rounded-lg text-center font-benderregular font-semibold">
                  Palo Alto
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  rounded-lg">
              <p className="m-3 text-center text-[#B3B3B3] text-sm font-benderregular leading-tight">
                Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
                Engineer at Palo Alto Networks. With a background spanning roles
                at HaloDoc and HackerEarth, Sourabh excels in platform
                engineering.
              </p>
            </div>
            {/* <div className="w-full h-[25%]  rounded-lg flex flex-col items-center justify-center">
              <div className="w-full h-[47%]  flex items-center justify-center gap-2">
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] ml-1 text-center font-benderregular">
                  1st April, 2024
                </div>
                <div className="h-[80%] w-[49%] flex text-[#F3F3FF] items-center text-sm justify-center rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Tech Talk
                </div>
              </div>
              <div className="w-full h-[53%]  flex items-center justify-center">
                <div className="h-[80%] w-[90%] text-[#F3F3FF] flex items-center text-sm p-1 justify-center leading-tight rounded-3xl border-2 border-solid border-[#65CCF9] mr-1 text-center font-benderregular">
                  Securing the Future: Cisco's Vision for a safer Internet
                </div>
              </div>
            </div> */}
            <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          {/* mobile screen */}
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={rahul}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-sm text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Rahul Kolle
                </div>
                <div className="w-full h-[40%] text-sm  leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  Cisco
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center tracking-tighter leading-tight  text-xs text-center font-benderregular font-bold">
              Rahul Kolle is a Technical Project Manager at Cisco where he
              manages multi-million dollar projects for Cisco customers in
              Europe and the UK.{" "}
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={vishnu}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Vishnu Dutt
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  Cisco
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center  text-center text-xs font-benderregular font-bold tracking-tighter leading-tight ">
              Vishnu Dutt is a seasoned Solutions Architect with over 15 years
              of expertise in Network Consulting.He holds a prestigious CCIE
              Routing and Switching certification.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={raj}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Rajtilak Majumder
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  PwC
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center text-xs font-benderregular font-bold tracking-tighter leading-tight  ">
              {" "}
              Rajtilak Majumder, CISSP, is the Director of Information Security
              at PwC India, bringing over a decade of experience in
              cybersecurity leadership roles across diverse sectors.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={abhisek}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Abhishek Sen
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  PwC
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center text-xs font-benderregular font-bold tracking-tighter leading-tight   ">
              Abhishek Sen, an Associate Director at PwC, is a seasoned
              Enterprise Security Architect. Holding certifications like CISSP,
              AZ-500, and CDPSE.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={govindo}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Gobinda Karmakar
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  PwC
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center text-xs font-benderregular font-bold tracking-tighter leading-tight  ">
              Gobinda Karmakar, an Application Security Architect at PwC India
              and an alumnus of LPU, boasts extensive experience in Information
              Security and Cybersecurity. Proficient in implementing robust
              security controls,..
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]   rounded-full">
                <Image
                  src={shashank}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Shashank Dubey
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  Payatu
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center text-xs font-benderregular font-bold tracking-tighter leading-tight ">
              Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
              in AWS and Kubernetes security. With over 3 years of industry
              experience, he's adept at threat modeling, compliance frameworks,
              and cloud-native security.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={avdesh}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Awadhesh Shukla
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  Quick Heal
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center font-benderregular leading-tight tracking-tighter font-bold text-xs ">
              {" "}
              Awadhesh Shukla, an esteemed alumnus of LPU, is a distinguished
              cybersecurity professional serving as a Principal Security
              Consultant at Quick Heal. Armed with a plethora of CompTIA
              certifications.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={simran}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Prabhsimran Singh
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  Finelabs
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center font-benderregular leading-tight tracking-tighter font-bold text-xs ">
              Prabhsimran Singh, a Senior Security Engineer at Finelabs. With a
              robust background in ethical hacking and a suite of prestigious
              certifications including OSCP and CEH.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45vw]   h-[40vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-8">
            <div className="w-full h-[55%]  relative flex justify-center rounded-lg">
              <div className="w-[30vw] h-[30vw] absolute top-[-40px]    rounded-full">
                <Image
                  src={saurav}
                  alt="Rahul"
                  className="w-full h-full rounded-full object-top object-cover"
                />
              </div>
              <div className=" w-[40vw] h-[6vh] absolute bottom-4 flex flex-col items-center justify-center ">
                <div className="w-full h-[60%]  border-solid border-b-2  border-[#13FBD3]  text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
                  Sourabh Bhandari
                </div>
                <div className="w-full h-[40%] text-sm tracking-tighter leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold">
                  Palo Alto
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[35%]  rounded-lg flex flex-col items-center justify-center text-center font-benderregular leading-tight tracking-tighter font-bold text-xs ">
              Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
              Engineer at Palo Alto Networks. With a background spanning roles
              at HaloDoc and HackerEarth, Sourabh excels in platform
              engineering.
            </div>

            <div className="w-full h-[10%]  rounded-lg flex items-center justify-end">
              <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <FaLinkedin className="w-full h-full text-[#00B3FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speaker;
