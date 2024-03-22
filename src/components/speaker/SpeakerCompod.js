import { FaLinkedin } from "react-icons/fa";

import rahul from "../../assets/rahul1.png";

import Image from "next/image";
import Link from "next/link";

const Speakercompom = ({ name, company, bio, linkedin, photo }) => {
  return (
    <div className="w-[45vw]    h-[25vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl md:hidden flex flex-col items-center justify-start mt-[100px]">
      <div className="w-full h-[75%]  relative flex justify-center rounded-lg">
        <div className="w-[30vw]  h-[30vw] absolute top-[-95px]    rounded-full">
          <Image
            src={photo}
            alt="Rahul"
            className="w-full h-full rounded-full object-top object-cover"
          />
        </div>
        <div className="  w-[44vw] h-[14vh] tracking-tighter leading-tight absolute bottom-4 flex flex-col items-center justify-center ">
          <div className=" w-full h-[35%] tracking-tighter leading-tight border-solid border-b-2  border-[#13FBD3]  text-sm text-white text-center font-benderregular font-bold flex justify-center items-end pb-1">
            {name}
          </div>
          <div className=" w-full h-[65%] tracking-tighter  text-sm  leading-tight rounded-lg flex items-center justify-center text-center font-benderregular font-semibold text-white pt-2">
            {company}
          </div>
        </div>
      </div>
      {/* <div className="w-[90%] h-[35%]  rounded-lg text-white flex flex-col items-center justify-center tracking-tighter leading-tight  text-xs text-center font-benderregular font-bold">
        {bio}
      </div> */}

      <div className="w-full h-[25%]  rounded-lg flex items-center justify-end">
        <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
          <div className="w-full h-full  rounded-xl flex items-center justify-center">
            <Link href={linkedin} className="w-full h-full">
              <FaLinkedin className="w-full h-full text-[#00B3FF]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakercompom;
