// import AppBar from "../../ui/components/home/Appbar";
// import { Image } from "@nextui-org/react";
import Main from "../../ui/components/home/Main";
import { useScroll, motion, useTransform } from "framer-motion";

function Home() {
  // const { scrollYProgress } = useScroll();
  // const gradient = ""
  const { scrollY } = useScroll();
  const animatedY = useTransform(scrollY, [0, 400], [0, -300]);
  const animatedText = useTransform(scrollY, [0, 400], ["#fff", "#000"]);
  return (
    // <section className="">
    // <div className="overflow-visible">
    <div className="flex  items-stretch flex-col overflow-hidden">
      <Main />
      <motion.section
        className=" mt-[30vh] p-7 bg-gradient-to-tr from-blue-50  to-pink-100 via-purple-100 rounded-lg flex flex-col sm:flex-row"
        style={{ y: animatedY }}
      >
        <img
          src="/images/raman.jpg"
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt=""
          // className="w-[50%] h-[40%] m-3  transform transition duration-[10000] hover:scale-105 overflow-hidden self-start sm:w-[40%]"
          className="overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[25rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl "
          // style={{}}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // animate={{ transform: "translateX(100px)", opacity: 1 }}
        />
        <div className="pt-4 sm:basis-[65%] sm:ml-6 sm:p-0">
          <h2
            className=" font-bold text-stone-700 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            Why to learn Code?
          </h2>
          <p className="my-2 text-stone-600 ">
            Learning to code is essential in {"today's"} tech-driven world,
            offering students the power to solve complex problems, drive
            innovation, access diverse career opportunities, and shape the
            future. It enhances creativity, problem-solving skills, and digital
            literacy, all while being a pathway to high-demand, high-paying
            jobs, making it an invaluable skill for personal growth and
            professional success.
          </p>
          <h2 className=" font-bold text-stone-700 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
            Who can code?
          </h2>
          <p className="mt-2 text-stone-600">
            Learning to code is essential in {"today's"} tech-driven world,
            offering students the power to solve complex problems, drive
            innovation, access diverse career opportunities, and shape the
            future. It enhances creativity, problem-solving skills, and digital
            literacy, all while being a pathway to high-demand, high-paying
            jobs, making it an invaluable skill for personal growth and
            professional success.
          </p>
        </div>
      </motion.section>
      <section className="bg-white -mt-64 p-6" style={{}}>
        <div className=" font-bold text-stone-700 text-2xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
          Why Us?
        </div>

        <p className="mt-2 ">
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
    </div>
    // </section>
  );
}

export default Home;

{
  /* <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            mollitia autem, nostrum error repudiandae praesentium hic quia
            voluptatum ratione itaque, quibusdam quae provident atque fuga neque
            culpa explicabo quo! Cupiditate. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Commodi mollitia autem, nostrum error
            repudiandae praesentium hic quia voluptatum ratione itaque,
            quibusdam quae provident atque fuga neque culpa explicabo quo!
            Cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Commodi mollitia autem, nostrum error repudirelativandae
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
            explicabo quo! Cupiditate.
          </p> */
}
