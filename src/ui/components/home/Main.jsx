import { Button } from "@nextui-org/react";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import FlutterLogo from "./FlutterLogo";
// import ReactLogo from "./ReactLogo";
import "./Home.css";
// import { motion } from "framer-motion";

function Main() {
  return (
    <div
      className="flex flex-col justify-center h-[85vh] fixed pb-10 self-stretch"
      style={
        {
          // backgroundColor: "#4158D0",
          // opacity: "0.5",
          // zIndex: "-1",
          // backgroundImage:
          //   "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
          //   `url("/images/3341.jpg")`,
        }
      }
    >
      {/* <img src="" alt="" /> */}
      <AnimatedArrow />
      <h1 className="text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-500  bg-clip-text text-4xl px-4 mt-8 font-bold w-screen sm:mt-10 mx-auto md:mt-16 lg:text-5xl xl:text-6xl xl:m-2 ">
        Become the future you desire! <br />
      </h1>
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
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-48 "
        >
          Explore
        </Button>
        <Button
          variant="bordered"
          color="primary"
          radius="full"
          className=" w-48"
        >
          Contact
        </Button>
      </div>
      <FlutterLogo />
      <img
        src="/images/react-logo.png"
        alt=""
        className="w-40 h-40 opacity-20 absolute bottom-5 right-9 -z-10 logo-spin"
        fr
      />
      {/* <img
        src="/images/react-logo.png"
        alt=""
        className="absolute z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large object-cover"
      /> */}
      {/* <ReactLogo1 /> */}
      <AnimatedArrow />
      {/* <img
        src="/images/imgtop.jpg"
        alt=""
        className="w-28 h-36 bg-cover self-end animate-bounce duration-[3000] transition-all mr-14 hover:scale-150 "
      /> */}
      {/* <div><img src="" alt="" srcset="" /></div> */}
    </div>
  );
}

export default Main;
