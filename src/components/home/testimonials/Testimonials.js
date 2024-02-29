const Testimonials = () => {
  return (
    <>
      <div className="w-[100vw] bg-red-500 h-[80vh] flex flex-col justify-center items-center">
        <div className="w-[100%] h-[20%] bg-blue-700 "></div>
        <div className="w-[85%]  h-[80%] md:hidden rounded-xl overflow-hidden m-1 flex flex-col items-center justify-center bg-green-600">
          <div className="w-[100%] h-[70%] bg-pink-700 flex justify-center items-center">
            <div className="w-[80%] h-[95%] rounded-xl bg-red-500"></div>
          </div>
          <div className="w-[80%] h-[30%] rounded-xl flex items-center justify-center bg-green-700">
            <div className="w-[80%] h-[80%] rounded-xl bg-red-500"></div>
          </div>
        </div>
        <div className="w-[85%]  h-[70%] hidden  rounded-xl overflow-hidden m-1 md:flex  items-center justify-center bg-green-600">
          <div className="w-[40%] h-[70%] bg-pink-700 flex justify-center items-center">
            <div className="w-[60%] h-[95%] rounded-xl bg-red-500"></div>
          </div>
          <div className="w-[40%] h-[80%] rounded-xl flex flex-col gap-2 items-center justify-center  bg-green-700">
            <div className="w-[80%] h-[30%] rounded-xl bg-blue-500"></div>
            <div className="w-[80%] h-[60%] rounded-xl flex items-center justify-center  bg-red-500">
              <div className="w-[80%] h-[80%] bg-yellow-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
