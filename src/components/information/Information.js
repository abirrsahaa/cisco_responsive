const Information = () => {
  return (
    <>
      <div className="w-[100vw] min-h-screen  rounded-lg flex-col md:flex-row md:flex justify-between items-start p-8">
        <div className="  h-[100%] w-[100%] md:w-[50%]   m-1 ">
          <div className="   h-[100%] w-[100%] ">
            <div className=" hidden md:block  text-left px-5 pt-0 pb-0 ">
              <h1 className="  text-8xl mt-0 pt-0 mb-10 h-[20%] flex justify-start items-center  text-[#12f8d0] ">
                JOIN THE <br></br>ASSEMBLY
              </h1>
              <div className="  welcomeText text-[#12e2bf] text-xl ">
                <p className="text-left">
                  We welcome you all to the greatest workshop<br></br> in Lovely
                  Professional University,<br></br> Cisco x LPlJiGen CyberSec
                  Symposium 1.0 2Ø23.
                </p>
              </div>
              <br></br>
              <div className="  text-white commonFontLight text-xl ">
                <p>
                  As Cisco is known for its expertise in networking<br></br> and
                  security solutions, this event is primarily centered<br></br>{" "}
                  around tutorials related to cybersecurity trends,<br></br>{" "}
                  technologies, and best practices of it.
                  <br></br>
                  <br></br>
                  This event focuses on instilling new skills in our<br></br>{" "}
                  participants through a 14-day long bootcamp where<br></br>{" "}
                  experts and professionals will guide them and help<br></br>{" "}
                  them to explore the latest trends in cybersecurity.<br></br>{" "}
                  Focusing on creativity, innovation, and collaboration,
                  <br></br> this event is a boon for all the aspiring coders out
                  there.
                </p>
              </div>
              <button className="text-white p-5 rounded-md  focus:outline-none bookTicket mt-10">
                Book Tickets
              </button>
            </div>
            <div className=" md:hidden  text-left px-5 pt-0 pb-0 ">
              <h1 className="font-none  text-7xl mt-0 pt-0 mb-10 h-[20%] flex justify-center items-center md:justify-start  text-[#12f8d0] ">
                JOIN THE ASSEMBLY
              </h1>
              <div className="  welcomeText text-[#12e2bf] text-xl ">
                <p className="text-left">
                  We welcome you all to the greatest workshop in Lovely
                  Professional University, Cisco x LPlJiGen CyberSec Symposium
                  1.0 2Ø23.
                </p>
              </div>
              <br></br>
              <div className="  text-white commonFontLight text-xl ">
                <p>
                  As Cisco is known for its expertise in networking and security
                  solutions, this event is primarily centered around tutorials
                  related to cybersecurity trends technologies, and best
                  practices of it.
                  <br></br>
                  <br></br>
                  This event focuses on instilling new skills in our{" "}
                  participants through a 14-day long bootcamp where experts and
                  professionals will guide them and help them to explore the
                  latest trends in cybersecurity. Focusing on creativity,
                  innovation, and collaboration, this event is a boon for all
                  the aspiring coders out there.
                </p>
              </div>
              <button className="text-white p-5 rounded-md  focus:outline-none bookTicket mt-10">
                Book Tickets
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col items-start  m-1 mx-0  h-full w-[100%] md:w-[50%]">
          {/* top */}
          <div className=" h-[50%] gap-2  flex-col md:flex-row md:flex justify-center items-start commonFontLight p-10 pt-0">
            {/* right */}
            <div className=" p-1">
              <h3 className="text-[#13d1b2] text-2xl">Date</h3>
              <h1 className="text-6xl text-[#13d1b2] ">
                OCT 30 - <br></br>NOV 25
              </h1>
            </div>
            {/*left  */}
            <div className=" p-2">
              <h3 className="text-[#13d1b2] text-2xl">Location</h3>
              <h1 className="text-6xl text-[#13d1b2]">
                Lovely<br></br> Proffessional<br></br> University
              </h1>
            </div>
          </div>
          {/* bottom video embedded youtube */}
          <div className="mt-12 flex items-center justify-start md:justify-center h-[45%] w-[95%]  md:h-[50%] ">
            <iframe
              width="560"
              height="315"
              className="rounded-xl"
              src="https://www.youtube.com/embed/GTRRJkfo5Xs?si=uueOmskwwRIkDNp8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
