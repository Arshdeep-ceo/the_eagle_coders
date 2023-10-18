import { Button } from "@nextui-org/react";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import "./Home.css";
import { useScroll, motion, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();
  function handleContact() {
    navigate("/contact");
  }
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.6]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <motion.header
      // initial={{ scale: 1 }}
      // animate={{ scale: 0.5 }}
      className="flex flex-col justify-center h-[90vh] pb-10 "
      style={{
        y: y1,
        scale: scale,
        opacity: opacity,
        // filter: `Brightness(50%)`,
      }}
    >
      <AnimatedArrow />
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text  subpixel-antialiased">
        <Zoom cascade={true}>
          <h1 className="mb-2 text-center text-transparent bg-clip-text bg-[#ECEDEE] text-4xl px-4 mt-8 font-bold w-screen sm:mt-10 mx-auto md:mt-16 lg:text-5xl xl:text-6xl xl:m-2 hover:scale-105 transition-all ">
            Become the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
              future{" "}
            </span>
            you desire!
          </h1>
          {/* Become the future you desire! <br /> */}
        </Zoom>
      </div>
      <h2 className="font-semibold text-lg m-2 leading-3 text-center dark:text-gray-400">
        Master React, Ai, Flutter and more...
      </h2>
      <p className="  text-gray-700 dark:text-gray-400 max-w-xl self-center p-3 text-center text-sm sm:p-6">
        We at Eagle Coders inspires to teach students the current market leading
        technologies Hey There. We at Eagle Coders inspires to teach students
        the current market leading technologies. We at Eagle Coders inspires to
      </p>
      <div className="flex items-center justify-center gap-x-3 flex-col gap-y-2 sm:flex-row">
        <Button
          variant="shadow"
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white  w-48 "
        >
          Explore
        </Button>

        <Button
          onPress={() => handleContact()}
          variant="bordered"
          color="primary"
          radius="full"
          className=" w-48 cursor-pointer"
        >
          Contact
        </Button>
      </div>
      {/* <FlutterLogo /> */}
      {/* <img
        src="/images/react-logo.png"
        alt=""
        className="w-40 h-40 opacity-20 absolute bottom-5 right-9 -z-10 logo-spin"
      /> */}
    </motion.header>
  );
}

export default Hero;
