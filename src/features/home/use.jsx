import { useScroll, motion, useTransform } from "framer-motion";

export default function Use() {
  const { scrollY } = useScroll();
  const animatedY = useTransform(scrollY, [0, 400], [0, -300]);
  const animatedText = useTransform(scrollY, [0, 400], ["#fff", "#000"]);
  const photoX = useTransform(scrollY, [100, 350], [-100, 0]);
  const textSize = useTransform(scrollY, [100, 350], [1, 2]);
  return (
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
          src="/images/Picture2.png"
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
          Welcome to <br></br>
          <span className=" text-pink-800 text-4xl">The eagle coders 😍</span>
        </h2>
        <motion.p
          className="my-2 text-stone-600 dark:text-gray-400 "
          style={{ fontSize: `${textSize}rem` }}
        ></motion.p>

        <p className="mt-2 text-stone-600 dark:text-gray-400">
          The eagle coders is Project based Software Company primarily focused
          on delivering solutions accessed via Web & Mobile Platforms.
          Technologies we are experts in Web Projects, Mobile Applications, IoT,
          AI & ML.
        </p>
        <p className="mt-2 text-stone-600 dark:text-gray-400">
          Students benefit from personalized guidance, thanks to our dedicated
          instructors who boast not only academic prowess but also extensive
          industry experience. Beyond mastering languages like JavaScript,
          Python, and Ruby, learners delve deep into user experience design,
          ensuring the sites and apps they create are not only functional but
          also user-friendly. Collaborative projects foster team dynamics,
          simulating real-world development scenarios, while our partnerships
          with tech giants offer internships and invaluable networking events.
          Moreover, through our global exchange programs, students gain exposure
          to international coding standards and practices.
        </p>

        <p className=" mt-4 bg-gradient-to-r from-pink-500 to-yellow-500  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {" "}
          we{"'re"} not just teaching code.<br></br> we{"'re"} shaping the
          future architects of the web.
        </p>
      </div>
    </section>
  );
}
