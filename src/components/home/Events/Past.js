import Image from "next/image";
import Event1 from "../../../assets/asddad.png";
const Past = () => {
  return (
    <>
      <div className=" w-[100vw] min-h-screen m-1">
        <div className=" flex flex-col items-center justify-center w-[100%] h-[100%] ">
          <div className="w-[100%] flex flex-col items-center justify-center  h-[25vh] md:h-[35vh]">
            <div className="w-[65%] h-[40%] text-3xl flex items-center justify-center font-bold text-green-500  rounded-lg">
              RECENT EVENTS
            </div>
            <p className="w-[90%] text-center h-[60%] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
            </p>
          </div>
          {/* for cards */}
          <div className="w-[100%] h-[75vh]  md:hidden  flex items-center justify-center ">
            <div className="w-[98%]  h-[98%]   flex flex-col items-center justify-center gap-2 ">
              <div className=" w-[85%] rounded-bl-[14%] overflow-hidden rounded-tr-[14%] h-[60%]  ">
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[35%] w-[98%]  flex flex-col items-center justify-center">
                <div className="w-full pl-4 h-[25%]  text-green-500 text-2xl flex items-center justify-start font-bold">
                  EVENT NAME
                </div>
                <p className="w-full pl-4 h-[50%]  text-left">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <div className="w-[30%] h-[60%] border-4 border-solid border-blue-400 text-blue-400 rounded-xl  mx-4 flex items-center justify-center">
                    View More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] group  hidden my-5   p-1 md:flex flex-col items-center justify-center">
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl rounded-tl-none rounded-br-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className=" w-[25%] rounded-bl-[25%] rounded-tr-[25%] h-[90%] scale-[0.9] transition-transform  group-hover:scale-[1] ">
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-green-500 ">
                  Event Name
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <div className="w-[30%] h-[60%] border-4 border-solid  text-blue-400 text-xl font-bold rounded-2xl  mx-4 flex items-center justify-center">
                    View More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] group  hidden my-5   p-1 md:flex flex-col items-center justify-center">
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl rounded-tr-none rounded-bl-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-green-500 ">
                  Event Name
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <div className="w-[30%] h-[60%] border-4 border-solid border-blue-400 text-blue-400 text-xl font-bold rounded-2xl  mx-4 flex items-center justify-center">
                    View More
                  </div>
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
          </div>
          <div className="w-[100%] group  hidden my-5   p-1 md:flex flex-col items-center justify-center">
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl rounded-tl-none rounded-br-none h-[45vh] flex items-center justify-center gap-3 ">
              <div className=" w-[25%] rounded-bl-[25%] rounded-tr-[25%] h-[90%] scale-[0.9] transition-transform  group-hover:scale-[1] ">
                {" "}
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[90%] w-[60%] group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex items-center justify-start font-bold text-6xl text-green-500 ">
                  Event Name
                </div>
                <p className="w-full h-[45%] text-white mt-5 text-left gap-3 text-xl  ">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="w-full h-[25%]  flex items-center justify-start">
                  <div className="w-[30%] h-[60%] border-4 border-solid border-blue-400 text-blue-400 text-xl font-bold rounded-2xl  mx-4 flex items-center justify-center">
                    View More
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* for view all and information  */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Past;
