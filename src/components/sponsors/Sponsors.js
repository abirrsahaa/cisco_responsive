import Image from "next/image";
import quick from "../../assets/quick.png";
import sabal from "../../assets/sabal.jpeg.jpg";
import heal from "../../assets/quickheal.png";

const Sponsors = () => {
  return (
    <>
      <div className="w-[100vw] h-[60vh] bg-[#09131D] ">
        <div className="w-[100%] h-[100%]  flex flex-col items-center justify-start ">
          <div className="w-[95%] h-[15%] md:h-[25%] text-[#13FBD3]  rounded-xl mt-2 text-4xl md:text-6xl font-benderregular font-bold text-center  flex items-center justify-center">
            Powered By
          </div>
          {/* <div className="md:w-[20%] w-[30%] h-[10%] md:h-[15%] mt-4 bg-yellow-500 rounded-xl place-self-start ml-3 md:ml-10"></div> */}
          <div className="w-[95%]  h-[55%] md:h-[50%] mt-3  rounded-xl flex items-center justify-center gap-3 ">
            <div className="w-[44%] md:w-[24%] h-[95%]   rounded-xl flex flex-col items-center justify-center gap-2">
              <div className="w-full h-[79%] md:h-[69%]   rounded-xl m-1 flex items-center justify-center ">
                <div className="w-[30vw] h-[30vw] md:w-[11vw] md:h-[11vw] bg-[#121E2C] rounded-3xl ">
                  <Image
                    src={heal}
                    key={1}
                    alt="quick"
                    className="w-full h-full rounded-3xl object-contain object-center"
                  />
                </div>
              </div>
              <div className="w-full h-[20%] mt-2  rounded-xl m-1 flex flex-col gap-1 items-center justify-center">
                <div className="w-full h-full font-benderregular font-bold text-xl rounded-xl text-[#13FBD3] flex items-center justify-center">
                  Sponsor
                </div>
                {/* <div className="w-full h-[59%] bg-yellow-500 rounded-xl"></div> */}
              </div>
            </div>
            <div className="w-[44%] md:w-[24%] h-[95%]   rounded-xl flex flex-col items-center justify-center gap-2">
              <div className="w-full h-[79%] md:h-[69%]   rounded-xl m-1 flex items-center justify-center ">
                <div className="w-[30vw] h-[30vw] md:w-[11vw] md:h-[11vw] bg-[#121E2C] rounded-3xl">
                  <Image
                    src={sabal}
                    key={2}
                    alt="sabal"
                    className="w-full h-full rounded-3xl object-contain object-center"
                  />
                </div>
              </div>
              <div className="w-full h-[20%] mt-2  rounded-xl m-1 flex flex-col gap-1 items-center justify-center">
                <div className="w-full h-full font-benderregular font-bold text-xl rounded-xl text-[#13FBD3] flex items-center justify-center">
                  Ticket Partner
                </div>
                {/* <div className="w-full h-[59%] bg-yellow-500 rounded-xl"></div> */}
              </div>
            </div>
            {/* <div className="w-[24%] h-[95%] bg-blue-500 rounded-xl "></div>
            <div className="w-[24%] h-[95%] bg-blue-500 rounded-xl "></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
