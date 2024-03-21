import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

import rahul from "../../assets/rahul1.png";
import Link from "next/link";

const Speakercompod = ({ name, company, bio, linkedin, photo }) => {
  return (
    <div className="w-[25vw] relative hidden h-[45vh] border-2 border-solid border-[#65CCF9] bg-[#09131D] rounded-xl  mt-10 md:flex flex-col items-center justify-center  m-3">
      <div className="w-full h-[40%]  relative flex justify-center  rounded-lg">
        <div className="w-[10vw] h-[10vw] absolute top-[-100px]    rounded-full">
          <Image
            src={photo}
            alt="Rahul"
            className="w-full h-full rounded-full object-top object-cover"
          />
        </div>
        <div className="  w-[22vw] h-[9vh] absolute bottom-3 flex flex-col items-center justify-center ">
          <div className=" w-full h-[35%]   border-solid border-b-2  border-[#13FBD3] tracking-tighter leading-tight   text-lg text-white text-center font-benderregular font-bold flex justify-center items-start">
            {name}
          </div>
          <div className=" w-full h-[65%] text-sm  rounded-lg text-center tracking-tighter leading-tight font-benderregular font-semibold text-white">
            {company}
          </div>
        </div>
      </div>
      <div className="w-full h-[25%]  rounded-lg">
        <p className="m-3 text-center text-white text-sm font-benderregular leading-tight">
          {bio}
        </p>
      </div>

      <div className="w-full h-[10%] absolute bottom-0 right-1  rounded-lg flex items-center justify-end">
        <div className="w-[10vw] h-[90%]  rounded-lg flex justify-end items-center ">
          <div className="w-[24%] h-[80%] rounded-xl flex items-center justify-center">
            <Link href={linkedin} className="w-full h-full">
              <FaLinkedin className="w-full h-full text-[#00B3FF]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakercompod;
