import Link from "next/link";

const Information = () => {
  return (
    <>
      <div className="w-[100vw] min-h-screen   flex-col md:flex-row md:flex justify-between items-start p-8 bg-[#121E2C]">
        <div className="  h-[100%] w-[100%] md:w-[50%]   m-1 ">
          <div className="   h-[100%] w-[100%] ">
            <div className=" hidden md:block  text-left px-5 pt-0 pb-0 ">
              <h1 className="font-bold font-benderregular  text-8xl mt-0 pt-0 mb-10 h-[20%] flex justify-start items-center  text-[#12f8d0] ">
                JOIN THE <br></br>ASSEMBLY
              </h1>
              <div className="  welcomeText text-[#12e2bf] text-xl ">
                <p className="text-left font-benderregular text-xl">
                  The Biggest Cybersecurity event of UNI is back! CyberSec
                  Symposium 2.0 returns, promising to ignite minds and foster
                  innovation. This symposium stands as a beacon of opportunity
                  for students, professionals, and enthusiasts alike.
                </p>
              </div>
              <br></br>
              <p className="text-left font-benderregular text-xl text-white">
                Featuring an impressive lineup of keynote speakers, panel
                discussions, workshops, competitions, and networking sessions,
                it covers ethical hacking, cybercrime, data privacy, metaverse
                and more.
              </p>
              <br></br>
              <div className=" font-benderregular  text-white commonFontLight text-xl ">
                <p>
                  With a commitment to empowerment, CyberSec Symposium 2.0
                  serves as more than just a gathering—it's a platform for
                  growth and collaboration. Whether you're a seasoned
                  professional seeking to expand your knowledge or a curious
                  student eager to explore the world of cybersecurity, this
                  event oƯers something for everyone.
                  <br></br>
                  <br></br>
                  Join us as we come together to learn, inspire, and forge new
                  pathways in the ever-evolving realm of cybersecurity.
                </p>
              </div>
              <Link href="https://ciscobackend.webacing.tech">
                <button class="relative w-[170px] mt-2 hidden md:mt-3 md:flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative font-benderregular w-[170px] px-5 py-2.5 transition-all ease-in duration-75 text-[12px] md:text-[20px] font-semibold bg-gray-900 dark:bg-gray-900 rounded-[37px] text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black">
                    Book Tickets
                  </span>
                </button>
              </Link>
            </div>
            <div className=" md:hidden block  text-left px-5 pt-0 pb-0 ">
              <h1 className="font-bold font-benderregular  text-6xl mt-0 pt-0 mb-10 h-[20%] flex justify-center items-center md:justify-start  text-[#12f8d0] ">
                JOIN THE ASSEMBLY
              </h1>
              <div className="  welcomeText text-[#12e2bf] text-lg ">
                <p className="text-left font-benderregular text-lg">
                  The Biggest Cybersecurity event of UNI is back! CyberSec
                  Symposium 2.0 returns, promising to ignite minds and foster
                  innovation. This symposium stands as a beacon of opportunity
                  for students, professionals, and enthusiasts alike.
                </p>
              </div>
              <br></br>
              <p className="text-left font-benderregular text-lg text-white">
                Featuring an impressive lineup of keynote speakers, panel
                discussions, workshops, competitions, and networking sessions,
                it covers ethical hacking, cybercrime, data privacy, metaverse
                and more.
              </p>
              <br></br>
              <div className="  text-white font-benderregular commonFontLight text-lg ">
                <p>
                  With a commitment to empowerment, CyberSec Symposium 2.0
                  serves as more than just a gathering—it's a platform for
                  growth and collaboration. Whether you're a seasoned
                  professional seeking to expand your knowledge or a curious
                  student eager to explore the world of cybersecurity, this
                  event oƯers something for everyone.
                  <br></br>
                  <br></br>
                  Join us as we come together to learn, inspire, and forge new
                  pathways in the ever-evolving realm of cybersecurity.
                </p>
              </div>

              <Link href="https://ciscobackend.webacing.tech">
                <button className="relative w-[150px] mt-2 md:hidden  md:mt-0 flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative font-benderregular w-[150px] px-5 py-2.5 transition-all ease-in duration-75 text-[12px] md:text-[20px] font-semibold bg-gray-900 dark:bg-gray-900 rounded-[37px] text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black">
                    Book Tickets
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col items-start  m-1 mx-0  h-full w-[100%] md:w-[50%]">
          {/* top */}
          <div className=" font-benderregular h-[50%] gap-2  flex-col md:flex-row md:flex justify-center items-start commonFontLight p-10 pt-0">
            {/* right */}
            <div className=" p-1">
              <h3 className="text-[#13d1b2] text-4xl md:text-7xl font-bold">
                Date
              </h3>
              <h1 className="text-3xl md:text-5xl text-[#13d1b2] mt-2">
                APR<br></br> 1 - 3
              </h1>
            </div>
            {/*left  */}
            <div className="  mt-0 ml-0 md:ml-3  bottom-10 flex flex-col justify-start ">
              <h3 className="text-[#13d1b2] text-4xl md:text-7xl font-bold">
                Location
              </h3>
              <h1 className="text-3xl md:text-5xl text-[#13d1b2] mt-2 mr-2 ">
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
              src="https://www.youtube.com/embed/asgv_upmU_c?si=Jc52tMc-6WLF1kXf?autoplay=1"
              title="YouTube video player"
              allow="accelerometer autoplay loop clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
