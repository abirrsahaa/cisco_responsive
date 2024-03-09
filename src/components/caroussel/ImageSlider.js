"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import car from "@/assets/car.png";
import coverPage from "@/assets/coverPage.png";
import darkWorld from "@/assets/darkWorld.jpeg";
import future from "@/assets/future.jpeg";
import girlUmbrella from "@/assets/girlUmbrella.jpg";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const ImageSlider = () => {
  const ref = useRef(null);
  // const IsinView = useInView(ref, { amount: 0.5, once: true });
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [car, coverPage, girlUmbrella, future, darkWorld];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full font-benderregular mx-auto text-[#13FBD3] font-bold  flex justify-center items-center text-6xl mb-8 md:mb-1  commonFontLight m-5"
      >
        EVENTS
      </motion.h1>
      <div className="overflow-hidden md:hidden relative w-[90%] h-[60vh] rounded-lg mx-auto mb-3">
        <div
          className={`flex transition ease-out duration-40 w-full h-full`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((s) => {
            return (
              <Image
                src={s}
                className="h-full w-full object-cover object-center"
              />
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {images.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <motion.div className="hidden md:flex items-center  flex-col justify-start pt-10 h-[70vh]">
        {images.map((image, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={index}
            className="rounded-xl overflow-hidden"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.8 }}
            style={{ width: "45%", position: "absolute" }}
          >
            <Image src={image} alt="photos" />
          </motion.div>
        ))}
        <div className="flex flex-row gap-3 -mb-12 mt-5">
          <button
            className="mt-[400px] font-benderregular text-[#13FBD3] border-2 border-solid border-[#13FBD3] rounded-md py-2 px-4"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className=" mt-[400px] font-benderregular border-2 border-solid border-[#13FBD3]  text-[#13FBD3] rounded-md py-2 px-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ImageSlider;
