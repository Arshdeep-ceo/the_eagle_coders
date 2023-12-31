import { Button } from "@nextui-org/react";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import { Zoom } from "react-awesome-reveal";
import "./Home.css";
import { useScroll, motion, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroFloatingLogos from "../home/HeroFloatingLogos";

// import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Hero({ setCurrentTab }) {
  const navigate = useNavigate();
  function handleContact() {
    setCurrentTab(3);
    navigate("/contact");
  }
  function handleExplore() {
    setCurrentTab(4);
    navigate("/explore");
  }
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.6]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.header
      // initial={{ scale: 1 }}
      // animate={{ scale: 0.5 }}
      className="  flex flex-col pt-24 h-[80vh] lg:h-[80vh]  pb-20 relative items-center justify-center"
      style={{
        y: y1,
        scale: scale,
        opacity: opacity,
        // filter: `Brightness(50%)`,
      }}
    >
      <AnimatedArrow />
      <div className="  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text  subpixel-antialiased z-10">
        <Zoom cascade={true}>
          <h1 className=" mb-2 text-center text-transparent bg-clip-text bg-[#ECEDEE] text-4xl px-4 font-bold w-screen lg:text-5xl xl:text-6xl hover:scale-105 transition-all  ">
            Become the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
              future{" "}
            </span>
            you desire!
          </h1>
          {/* Become the future you desire! <br /> */}
        </Zoom>
      </div>
      <h2 className="font-semibold text-lg m-2 leading-3 text-center dark:text-gray-200 z-10">
        Master React, Ai, Flutter and more...
      </h2>
      <p className=" text-gray-500 dark:text-gray-200 max-w-xl self-center p-3 text-center text-sm sm:p-6 z-10">
        We at AstraBytes inspires to teach students the current market leading
        technologies<br></br>We Provide IT services, software products, and AI
        services. <br></br>Innovating today for a better digital tomorrow.
      </p>
      <div className="flex items-center justify-center gap-x-3 flex-col gap-y-2 sm:flex-row z-10">
        <Button
          onPress={() => handleExplore()}
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
          className=" w-48 cursor-pointer hover:bg-slate-900"
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

      <HeroFloatingLogos />
    </motion.header>
  );
}

export default Hero;
