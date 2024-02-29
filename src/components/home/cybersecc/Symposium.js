const Symposium = () => {
  return (
    <>
      <div className="w-[100vw] h-[53vh]  md:min-h-screen flex flex-col justify-between items-center ">
        <div className="w-[100%] h-[100%] border-2 border-solid border-blue-500  flex flex-col p-2 gap-1 justify-between items-center">
          <div className="font-semibold md:text-6xl text-green-400 text-2xl w-[100%] h-[20%] md:h-[25%] border-2 border-solid border-yellow-400 flex items-center justify-center  ">
            Upcoming Event
          </div>
          <div className="w-[100%] h-[25%] md:h-[40%] border-2 border-solid border-gray-100 flex items-center justify-center ">
            <div className="w-[94%] md:w-[85%] h-[95%] border-2 border-solid border-yellow-600 rounded-xl"></div>
          </div>
          <div className="w-[100%] h-[55%]  md:w-[85%] md:h-[30%] md:mt-2 border-2 border-solid border-green-500 flex flex-col md:flex md:flex-row gap-1 items-center p-1 justify-between md:justify-between md:items-start">
            <div className="w-[90%]  h-[55%]  md:w-[60%] md:h-[85%] border-2 border-solid border-red-500 ">
              <div className="w-[100%] h-[72%]  flex justify-between items-center ">
                <div className="w-[24%] h-[98%] rounded-xl  rounded-r-none border-2 border-solid border-green-600"></div>
                <div className="w-[24%] h-[98%]  border-2 border-solid border-green-600"></div>
                <div className="w-[24%] h-[98%]  border-2 border-solid border-green-600"></div>
                <div className="w-[24%] h-[98%] rounded-xl rounded-l-none border-2 border-solid border-green-600"></div>
              </div>
              <div className="w-[100%] h-[28%]  flex justify-between items-center border-2 border-solid">
                <div className="w-[24%] font-light h-[98%] text-xl flex justify-center items-center rounded-xl  rounded-r-none border-2 border-solid border-green-600">
                  Days
                </div>
                <div className="w-[24%] h-[98%] font-light  text-xl flex justify-center items-center  border-2 border-solid border-green-600">
                  Hours
                </div>
                <div className="w-[24%] h-[98%] font-light text-xl flex justify-center items-center  border-2 border-solid border-green-600">
                  Minutes
                </div>
                <div className="w-[24%]  h-[98%] font-light text-xl flex justify-center items-center rounded-xl rounded-l-none border-2 border-solid border-green-600">
                  Seconds
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[30%] md:w-[30%] border-2 border-dashed border-green-200 flex items-center justify-center">
              <button className=" w-[30%] h-[80%] flex items-center justify-center text-center rounded-2xl p-2 text-sm text-blue-300 font-semibold border-t-green-500 border-t-2  border-solid">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Symposium;
