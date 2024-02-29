"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import car from "@/assets/car.png";
import coverPage from "@/assets/coverPage.png";
import darkWorld from "@/assets/darkWorld.jpeg";
import future from "@/assets/future.jpeg";
import girlUmbrella from "@/assets/girlUmbrella.jpg";
import Image from "next/image";

const ImageSlider = () => {
  const ref = useRef(null);
  const IsinView = useInView(ref, { amount: 0.5, once: true });
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

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
        className="w-full  flex justify-center items-center text-6xl mb-10 text-white commonFontLight m-5"
      >
        EVENTS
      </motion.h1>
      <motion.div className="flex items-center flex-col justify-center  h-screen">
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
        <div className="flex flex-row gap-3 -mb-12">
          <button
            className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
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
