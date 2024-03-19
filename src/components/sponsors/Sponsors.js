const Sponsors = () => {
  return (
    <>
      <div className="w-[100vw] h-[80vh] bg-[#09131D] ">
        <div className="w-[100%] h-[100%] bg-red-500 flex flex-col items-center justify-start ">
          <div className="w-[95%] h-[15%] md:h-[25%] bg-blue-500 rounded-xl mt-2 "></div>
          <div className="md:w-[20%] w-[30%] h-[10%] md:h-[15%] mt-4 bg-yellow-500 rounded-xl place-self-start ml-3 md:ml-10"></div>
          <div className="w-[95%] h-[25%] md:h-[50%] mt-3 bg-green-500 rounded-xl flex items-center justify-center gap-3 ">
            <div className="w-[24%] h-[95%] bg-blue-500 rounded-xl flex flex-col items-center justify-center gap-2">
              <div className="w-full h-[59%] bg-yellow-500 rounded-xl m-1 flex items-center justify-center ">
                <div className="w-[10vw] h-[10vw] bg-red-500 rounded-full"></div>
              </div>
              <div className="w-full h-[39%] bg-pink-500 rounded-xl m-1 flex flex-col gap-1 items-center justify-center">
                <div className="w-full h-[39%] bg-green-500 rounded-xl"></div>
                <div className="w-full h-[59%] bg-yellow-500 rounded-xl"></div>
              </div>
            </div>
            <div className="w-[24%] h-[95%] bg-blue-500 rounded-xl "></div>
            <div className="w-[24%] h-[95%] bg-blue-500 rounded-xl "></div>
            <div className="w-[24%] h-[95%] bg-blue-500 rounded-xl "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
