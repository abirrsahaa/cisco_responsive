"use client";
import { TypeAnimation } from "react-type-animation";
// import "./App.css";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "HACK OR GET HACKED",
        2500,
        "HACK OR GET COMPROMISED",
        2500,
        "HACK OR GET THRASHED",
        2500,

        // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        fontFamily: "bender-light",
      }}
      className="text-[#13FBD3] font-bold text-2xl md:text-5xl p-2"
      repeat={Infinity}
    />
  );
};

export default Typing;
