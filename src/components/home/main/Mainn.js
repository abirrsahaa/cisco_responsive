"use client";
import Header from "@/components/header/Header";
import { Input } from "postcss";
import { useState } from "react";
import ReactPlayer from "react-player";
// import bg from "../../../assets/vii.mp4";

const Main = () => {
  const [name, setname] = useState("");
  const submithander = async () => {
    console.log(name);
    try {
      const res = await fetch("/api/userInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
          <input
            type="text"
            value={name}
            placeholder="name"
            className="w-1/2 h-10 p-3 text-black"
            onChange={(e) => setname(e.target.value)}
          />
          <button onClick={submithander} className="hover:cursor-pointer">
            submit
          </button>
          <p></p>
          <button></button>{" "}
        </div>
      </div>
    </>
  );
};

export default Main;
