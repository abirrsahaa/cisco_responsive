import Header from "@/components/header/Header";
import ReactPlayer from "react-player";
// import bg from "../../../assets/vii.mp4";

const Main = () => {
  return (
    <>
      <div className="w-[100vw]  top-0  h-[40vh] md:min-h-screen ">
        <div className="w-full h-full fixed top-0 left-0 -z-10">
          {/* <video
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        {/* <Header /> */}
        <div className="w-[100%]  h-[100%]   bg-red-500 flex flex-col gap-4 md:gap-3 items-center justify-center">
          <div className="w-[40%] h-[30%] bg-yellow-300">
            WELCOME TO <br></br>CISCO LPU I GEN
          </div>
          <p></p>
          <button></button>{" "}
        </div>
      </div>
    </>
  );
};

export default Main;
