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
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  return (
    <motion.div
      // initial={{ scale: 1 }}
      // animate={{ scale: 0.5 }}
      className="flex flex-col justify-center h-[85vh] pb-10 items-center text-center"
      style={{
        y: y1,
        scale: scale,
        opacity: opacity,
        background: `linear-gradient(
          to right,
          rgba(f,f,f,0.5),
        ),url("https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80")`,
        // filter: `Brightness(50%)`,
      }}
    >
      <AnimatedArrow />
      <Zoom cascade={true}>
        <h2 className="mt-[50%] sm:mt-[23%] mx-4 text-transparent bg-gradient-to-r from-[#ef32d9] to-[#f2fcfe] bg-clip-text text-4xl  font-bold  sm:text-[2.6rem] lg:text-5xl xl:text-6xl hover:scale-105 transition-all ">
          Become the future you desire!
        </h2>
        {/* Become the future you desire! <br /> */}
      </Zoom>
      <h2 className="font-semibold text-lg mt-[4%] sm:mt-[1%] leading-3 text-center dark:text-gray-300">
        Master React, Ai, Flutter and more...
      </h2>
      <p className="  text-gray-700 max-w-xl self-center p-3 text-center text-sm sm:p-6 dark:text-gray-400">
        We at Eagle Coders inspires to teach students the current market leading
        technologies Hey There. We at Eagle Coders inspires to teach students
        the current market leading technologies. We at Eagle Coders inspires to
      </p>
      <div className="flex items-center justify-center gap-x-3 flex-col gap-y-2 sm:flex-row">
        <Button
          variant="shadow"
          radius="full"
          // className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white  w-48 "
          className=" text-white bg-[#ef32d9]  w-48 "
        >
          Explore
        </Button>
        <Button
          onPress={() => alert("sdfjkh")}
          variant="bordered"
          color="primary"
          radius="full"
          className=" w-48 cursor-pointer "
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
