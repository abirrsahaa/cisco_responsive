const Past = () => {
  return (
    <>
      <div className="bg-black w-[100vw] min-h-screen m-1">
        <div className="border-2 border-solid border-blue-500 flex flex-col items-center justify-center w-[100%] h-[100%] ">
          <div className="w-[100%] bg-blue-500 h-[25vh] md:h-[35vh]"></div>
          {/* for cards */}
          <div className="w-[100%] h-[75vh]  md:hidden bg-gray-500 flex items-center justify-center ">
            <div className="w-[98%]  h-[98%]   flex flex-col items-center justify-center gap-2 bg-pink-600">
              <div className=" w-[80%] rounded-bl-[14%] rounded-tr-[14%] h-[65%]  bg-red-500"></div>
              <div className="h-[35%] w-[98%] bg-blue-600 flex flex-col items-center justify-center">
                <div className="w-full h-[25%] bg-red-200"></div>
                <div className="w-full h-[50%] bg-green-500"></div>
                <div className="w-full h-[25%] bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[100%] group  hidden my-5  bg-black p-1 md:flex flex-col items-center justify-center">
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl rounded-tl-none rounded-br-none h-[45vh] flex items-center justify-center gap-3 bg-pink-600">
              <div className=" w-[25%] rounded-bl-[25%] rounded-tr-[25%] h-[90%] scale-[0.8] transition-transform  group-hover:scale-[1] bg-red-500"></div>
              <div className="h-[90%] w-[60%] bg-blue-600 group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] bg-red-200"></div>
                <div className="w-full h-[45%] bg-green-500"></div>
                <div className="w-full h-[25%] bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[100%] group  hidden my-5  bg-black p-1 md:flex flex-col items-center justify-center">
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl rounded-tr-none rounded-bl-none h-[45vh] flex items-center justify-center gap-3 bg-pink-600">
              <div className="h-[90%] w-[60%] bg-blue-600 group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] bg-red-200"></div>
                <div className="w-full h-[45%] bg-green-500"></div>
                <div className="w-full h-[25%] bg-white"></div>
              </div>
              <div className=" w-[25%] rounded-br-[25%] rounded-tl-[25%] h-[90%] scale-[0.8] transition-transform  group-hover:scale-[1] bg-red-500"></div>
            </div>
          </div>
          <div className="w-[100%] group  hidden my-5  bg-black p-1 md:flex flex-col items-center justify-center">
            <div className="w-[85%] cursor-pointer group-hover:brightness-100 rounded-3xl rounded-tl-none rounded-br-none h-[45vh] flex items-center justify-center gap-3 bg-pink-600">
              <div className=" w-[25%] rounded-bl-[25%] rounded-tr-[25%] h-[90%] scale-[0.8] transition-transform  group-hover:scale-[1] bg-red-500"></div>
              <div className="h-[90%] w-[60%] bg-blue-600 group-hover:ml-2 transition-transform flex flex-col items-center justify-center">
                <div className="w-full h-[30%] bg-red-200"></div>
                <div className="w-full h-[45%] bg-green-500"></div>
                <div className="w-full h-[25%] bg-white"></div>
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
