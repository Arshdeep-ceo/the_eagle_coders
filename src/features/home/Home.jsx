// import AppBar from "../../ui/components/home/Appbar";
// import { Image, Card, CardFooter, Button } from "@nextui-org/react";
import Hero from "../../ui/components/home/Hero";
import { useScroll, motion, useTransform } from "framer-motion";
import "../../index.css";
import Footer from "../home/footer/footer.jsx";
import Use from "../home/use.jsx";
import Course from "../home/course.jsx";
import { Zoom } from "react-awesome-reveal";
function Home() {
  // const { scrollYProgress } = useScroll();
  // const gradient = ""
  const { scrollY } = useScroll();
  const animatedY = useTransform(scrollY, [0, 400], [0, -300]);
  const animatedText = useTransform(scrollY, [0, 400], ["#fff", "#000"]);
  const photoX = useTransform(scrollY, [100, 350], [-100, 0]);
  const textSize = useTransform(scrollY, [100, 350], [1, 2]);
  return (
    // <section className="">
    // <div className="overflow-visible">
    <div className="flex items-stretch flex-col  ">
      <Hero />
      <Use />
      <div className="mt-6 mb-6  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text  subpixel-antialiased z-10">
        <Zoom cascade={true}>
          <h1 className="mb-2 text-center text-transparent bg-clip-text bg-[#ECEDEE] text-4xl px-4 mt-8 font-bold w-screen sm:mt-10 mx-auto md:mt-8 lg:text-5xl xl:text-6xl xl:mt-0 hover:scale-105 transition-all ">
            Our company provide{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
              courses{" "}
            </span>
          </h1>
          {/* Become the future you desire! <br /> */}
        </Zoom>
      </div>
      <Course />
      <section
        className="mt-8 p-7  rounded-lg flex flex-col sm:flex-row text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg"
        style={{ y: animatedY }}
      >
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          style={{ x: photoX }}
          transition={{ type: "spring", stiffness: 400 }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/Picture3.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            // className="w-[50%] h-[40%] m-3  transform transition duration-[10000] hover:scale-105 overflow-hidden self-start sm:w-[40%]"
            className=" bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[25rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
            // style={{}}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // animate={{ transform: "translateX(100px)", opacity: 1 }}
          />
        </motion.div>

        <div className="pt-4 sm:basis-[65%] sm:ml-6 sm:p-0 ">
          <h2
            className="mt-4 mb-8 font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            Industry{"'s"} Solutions
          </h2>
          <motion.p
            className="my-2 text-stone-600 dark:text-gray-400 "
            style={{ fontSize: `${textSize}rem` }}
          ></motion.p>

          <p className="mt-2 text-stone-600 dark:text-gray-400">
            1.Navigating the complexities of today{"'s"} industries requires
            specialized tools; our training software stands as a beacon, guiding
            firms to success.<br></br>2.Merging cutting-edge technology with
            deep industry insights, our software reshapes the landscape of
            professional training.<br></br>3.In an era of relentless change, our
            training software provides businesses the anchor they need:
            tailored, industry-specific solutions.<br></br>4.From novices to
            experts, our platform elevates every professional, gearing them up
            to face real-world challenges.<br></br>5.We don{"'t"} just train, we
            transform. Dive deep into industry practices with our software and
            emerge as a leader.
          </p>

          <h2
            className="pt-12 font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            Dive and learn😊
          </h2>
        </div>
      </section>

      <section
        className="mt-8 p-7  rounded-lg flex flex-col sm:flex-row text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg"
        style={{ y: animatedY }}
      >
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          style={{ x: photoX }}
          transition={{ type: "spring", stiffness: 400 }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/Picture1.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            // className="w-[50%] h-[40%] m-3  transform transition duration-[10000] hover:scale-105 overflow-hidden self-start sm:w-[40%]"
            className=" bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[25rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
            // style={{}}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // animate={{ transform: "translateX(100px)", opacity: 1 }}
          />
        </motion.div>

        <div className="pt-4 sm:basis-[65%] sm:ml-6 sm:p-0 ">
          <h2
            className=" font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            Experience <br></br>excellence<br></br>with us
          </h2>
          <motion.p
            className="my-2 text-stone-600 dark:text-gray-400 "
            style={{ fontSize: `${textSize}rem` }}
          ></motion.p>

          <p className="mt-2 text-stone-600 dark:text-gray-400">
            At the<span className="text-pink-500 font-bold"> Eagle coders</span>{" "}
            , we provide an unparalleled experience for aspiring web developers,
            ensuring they are equipped for the rapidly evolving digital
            landscape. Our curriculum is meticulously designed to offer a blend
            of theoretical knowledge and hands-on coding practice, emphasizing
            both the art and science of web development.
          </p>
          <p className="mt-2 text-stone-600 dark:text-gray-400">
            Dive into the dynamic world of coding with us! At our company, we
            believe that every line of code is a step towards the future, and we{" "}
            {"'re"} eager to guide you on this transformative journey.<br></br>
          </p>
          <p className="mt-2 text-stone-600 dark:text-gray-400">
            Whether you{"'re"} a beginner with a budding interest or an
            intermediate looking to hone your skills, we have the perfect
            environment for you. Through hands-on projects, collaborative
            teamwork, and expert mentoring, we aim to bring out the best coder
            in you.
          </p>
          <h2
            className=" font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            You are definitly going to 😊
          </h2>
          <p className=" mt-4 bg-white/10  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none  ">
            Love coding
          </p>
        </div>
      </section>
      <section className=" p-6" style={{}}>
        <div className=" font-bold text-stone-700 dark:text-yellow-500 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
          Why Us?
        </div>

        <p className="mt-2 dark:text-gray-200 text-xl">
          Our company offers a unique blend of hands-on experience and
          theoretical and practical knowledge, ensuring that students not only
          understand the concepts but can also apply them in real-world
          scenarios. This holistic approach to education equips our learners
          with practical skills that make them industry-ready from day one.
          <br></br>Our company is at the forefront of industry innovations,
          giving students access to the latest tools, technologies, and
          methodologies. By learning with us, students are always a step ahead,
          positioning themselves as top candidates for future opportunities in a
          competitive market.
        </p>
      </section>

      <section
        className="mt-8 p-7  rounded-lg flex flex-col sm:flex-row text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg"
        style={{ y: animatedY }}
      >
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          style={{ x: photoX }}
          transition={{ type: "spring", stiffness: 400 }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/team.bg.jpeg"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            // className="w-[50%] h-[40%] m-3  transform transition duration-[10000] hover:scale-105 overflow-hidden self-start sm:w-[40%]"
            className=" bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[25rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
            // style={{}}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // animate={{ transform: "translateX(100px)", opacity: 1 }}
          />
        </motion.div>

        <div className="pt-4 sm:basis-[65%] sm:ml-6 sm:p-0 ">
          <h2
            className=" font-bold text-stone-700 dark:text-gray-300 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            Why to learn Code?
          </h2>
          <motion.p
            className="my-2 text-stone-600 dark:text-gray-400 "
            style={{ fontSize: `${textSize}rem` }}
          >
            Learning to code is essential in {"today's"} tech-driven world,
            offering students the power to solve complex problems, drive
            innovation, access diverse career opportunities, and shape the
            future. It enhances creativity, problem-solving skills, and digital
            literacy, all while being a pathway to high-demand, high-paying
            jobs, making it an invaluable skill for personal growth and
            professional success. Outside from the implications of coding which
            look good on a resume, coding actually does boost skills which are
            actually useful to most jobs. Problem solving and logic are the main
            two. Learning to code is like an exercise session for the “left”
            side of the brain.
          </motion.p>
          <h2 className=" font-bold text-stone-700 dark:text-gray-300 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
            Who can code?
          </h2>
          <p className="mt-2 text-stone-600 dark:text-gray-400">
            Anyone can learn how to code, although do not expect linear
            progress. Anyone can learn to code with persistence, the right
            teachers and optimal learning environment. While coding can be
            learned alone by sifting through dozens, if not hundreds, of
            tutorials, it will take significantly longer.<br></br>Learning to
            code is much the same way as learning a new language. It often
            consists of several ‘aha’ moments where gains in learning increase
            substantially. Similarly, learning accelerates when someone is put
            into an immersive environment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
    // </section>
  );
}

export default Home;
