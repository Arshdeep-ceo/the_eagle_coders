import { Button } from "@nextui-org/react";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import "./Home.css";
import { useScroll, motion, useTransform } from "framer-motion";
// import { motion } from "framer-motion";

function Main() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.6]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <motion.div
      // initial={{ scale: 1 }}
      // animate={{ scale: 0.5 }}
      className="flex flex-col justify-center h-[85vh] pb-10"
      style={{
        y: y1,
        scale: scale,
        opacity: opacity,
        // filter: `Brightness(50%)`,
      }}
    >
      <AnimatedArrow />
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text ">
        <Zoom cascade={true}>
          <h1 className="mb-2 text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-500  bg-clip-text text-4xl px-4 mt-8 font-bold w-screen sm:mt-10 mx-auto md:mt-16 lg:text-5xl xl:text-6xl xl:m-2 hover:scale-105 transition-all ">
            Become the future you desire!
          </h1>
          {/* Become the future you desire! <br /> */}
        </Zoom>
      </div>
      <h2 className="font-semibold text-lg m-2 leading-3 text-center">
        Master React, Ai, Flutter and more...
      </h2>
      <p className="  text-gray-700 max-w-xl self-center p-3 text-center text-sm sm:p-6">
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
          onPress={() => alert("sdfjkh")}
          variant="bordered"
          color="primary"
          radius="full"
          className=" w-48 cursor-pointer"
        >
          Contact
        </Button>
      </div>
      {/* <FlutterLogo /> */}
      <img
        src="/images/react-logo.png"
        alt=""
        className="w-40 h-40 opacity-20 absolute bottom-5 right-9 -z-10 logo-spin"
      />
    </motion.div>
  );
}

export default Main;
