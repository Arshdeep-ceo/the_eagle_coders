// import AppBar from "../../ui/components/home/Appbar";
import { Card } from "@nextui-org/react";
import Hero from "../../ui/components/home/Hero";
import { useScroll, motion, useTransform } from "framer-motion";
import "../../index.css";
import Footer from "../home/footer/footer.jsx";

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
      <div className="-mt-8 items-start grid grid-cols-1 px-5 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none backdrop-blur-lg bg-white/10 h-48"
        >
          Fast
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none grow backdrop-blur-lg bg-white/10 h-48"
        >
          Yo
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none grow backdrop-blur-lg bg-white/10 h-48"
        >
          Yo
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none grow backdrop-blur-lg bg-white/10 h-48"
        >
          Yo
        </Card>
      </div>

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
            professional success.
          </motion.p>
          <h2 className=" font-bold text-stone-700 dark:text-gray-300 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
            Who can code?
          </h2>
          <p className="mt-2 text-stone-600 dark:text-gray-400">
            Learning to code is essential in {"today's"} tech-driven world,
            offering students the power to solve complex problems, drive
            innovation, access diverse career opportunities, and shape the
            future. It enhances creativity, problem-solving skills, and digital
            literacy, all while being a pathway to high-demand, high-paying
            jobs, making it an invaluable skill for personal growth and
            professional success.
          </p>
        </div>
      </section>
      <section className=" p-6" style={{}}>
        <div className=" font-bold text-stone-700 dark:text-gray-200 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
          Why Us?
        </div>

        <p className="mt-2 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          mollitia autem, nostrum error repudiandae praesentium hic quia
          voluptatum ratione itaque, quibusdam quae provident atque fuga neque
          culpa explicabo quo! Cupiditate. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Commodi mollitia autem, nostrum error
          repudiandae praesentium hic quia voluptatum ratione itaque, quibusdam
          quae provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudirelativandae praesentium hic quia
          voluptatum ratione itaque, quibusdam quae provident atque fuga neque
          culpa explicabo quo! Cupiditate. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Commodi mollitia autem, nostrum error
          repudiandae praesentium hic quia voluptatum ratione itaque, quibusdam
          quae provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate.
        </p>
      </section>
      <Footer />
    </div>
    // </section>
  );
}

export default Home;
