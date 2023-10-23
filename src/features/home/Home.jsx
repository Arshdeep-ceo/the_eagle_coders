// import AppBar from "../../ui/components/home/Appbar";
// import { Image, Card, CardFooter, Button } from "@nextui-org/react";
import Hero from "../../ui/components/home/Hero";
import { useScroll, motion, useTransform } from "framer-motion";
import "../../index.css";
import Footer from "../home/footer/footer.jsx";
import Use from "../home/use.jsx";
import SoftProducts from "./products";
import AIservices from "./aiservices";
import { useOutletContext } from "react-router-dom";

function Home() {
  // const { scrollYProgress } = useScroll();
  const [setCurrentTab] = useOutletContext();
  // const gradient = ""
  const { scrollY } = useScroll();
  const animatedY = useTransform(scrollY, [0, 400], [0, -300]);
  const animatedText = useTransform(scrollY, [0, 400], ["#fff", "#000"]);
  const photoX = useTransform(scrollY, [100, 350], [-100, 0]);
  const textSize = useTransform(scrollY, [100, 350], [1, 2]);
  return (
    // <section className="">
    // <div className="overflow-visible">

    <div className="flex items-stretch flex-col ">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/916283669924?text=Hey%20there%20Eagle%20Coders%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="fixed bottom-5 right-5 z-30 hover:scale-[1.05] shadow-lg "
          alt="Chat on WhatsApp"
          src="/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.svg"
        />
      </a>
      <Hero setCurrentTab={setCurrentTab} />
      <Use />

      <div className="bg-gray-900 ">
        <div className="mx-auto pl-4 pr-8 pt-10 pb-12 ">
          <div className="">
            <h2 className=" text-center text-5xl font-bold text-amber-600 ">
              Services provided by<br></br> The Eagle Coders
            </h2>

            <p className=" text-center mt-4 text-2xl text-gray-400">
              Our company provide IT services and software products.At The Eagle
              Coders, we craft software that pushes the boundaries of innovation
              and delivers exceptional user experiences.From ideation to
              deployment,our company is your end-to-end partner for cutting-edge
              software solutions.Transforming your vision into pixel-perfect
              reality, one line of code at a time.
            </p>
          </div>
        </div>
        <div className="h-auto w-auto">
          <p className=" -mt-4 pb-6 text-center pl-6 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">
            IT Services:
          </p>
          <p className="pb-4 text-xl pl-6 mb-2 tracking-tight text-gray-900 dark:text-gray-400 animate-pulse">
            In a digital world that never stops evolving, our company stands at
            the forefront, delivering agile and scalable software solutions. We
            power businesses with IT solutions that are both innovative and
            reliable.From robust infrastructure management to cutting-edge cloud
            solutions, Eagle coders is your trusted IT partner for the digital
            age.<br></br>Our commitment? Seamless IT solutions that optimize
            operations, reduce costs, and drive growth.
          </p>

          <div className="mt-6 mb-6 items-start grid grid-cols-1 px-5 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://assets-global.website-files.com/62be22872850996333a4861f/62be2287285099f561a48ee2_IT%20services%20.jpg"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tech Support Solutions managed IT services
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://www.veritis.com/wp-content/uploads/2022/09/What-are-the-Different-Types-of-Cloud-Computing-Services.jpg"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cloud Computing Services provided
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://www.bitlyft.com/hubfs/Cybersecurity-solutions.jpeg"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Network Security Solutions provided
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://www.irissol.com/wp-content/uploads/2020/12/Data-Backup-And-Recovery-Services.jpeg"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Data Recovery and Backup Services
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://statesecurity.com.au/wp-content/uploads/2019/08/security_consulting.jpg"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cybersecurity Consulting IT Infrastructure
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://distantjob.com/wp-content/uploads/2022/05/Software-Development-Project-Management.png"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Management Software Development
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Web Design and Development
                </p>
              </div>
            </div>
            <div className="border-none grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-60 w-full"
                src="https://www.finesofttechnologies.com/wp-content/uploads/2019/04/Custom-Application-Development.jpg"
                alt=""
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Custom Application Development
                </p>
              </div>
            </div>
          </div>
          <AIservices />
          <SoftProducts />
        </div>
      </div>
      <section
        className="mt-8 p-7  rounded-lg flex flex-col sm:flex-row text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg"
        style={{ y: animatedY }}
      >
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
            Dive and learn
          </h2>
        </div>
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
            You are definitly going to
          </h2>
          <p className=" mt-4 bg-white/10  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none  ">
            Love coding
          </p>
        </div>
      </section>
      <section
        className="mt-8 p-7 justify-center rounded-lg flex flex-col sm:flex-row text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg"
        style={{ y: animatedY }}
      >
        <div className="pt-4 sm:basis-[65%] sm:ml-6 sm:p-0 ">
          <h2
            className=" font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            PLACEMENT SUPPORT
          </h2>
          <motion.p
            className="my-2 text-stone-600 dark:text-gray-400 "
            style={{ fontSize: `${textSize}rem` }}
          ></motion.p>

          <p className=" lg:text-xl mt-2 text-stone-600 dark:text-gray-400">
            The Placement Program is designed to help interns improve their
            chances to get the right career opportunity and make them
            industry-ready. Sabudh seeks to assist interns with professional
            development and improve their interpersonal skills, hence making
            them ready to deliver in all kinds of business environments. For
            this purpose, Sabudh organizes various workshops to help the interns
            get ready for their future endeavors.
          </p>
          <p className="lg:text-xl mt-2 text-stone-600 dark:text-gray-400">
            The list of proposed workshops is as follows:<br></br> Team Building
            sessions<br></br>
            Resume and cover letter building<br></br> Curating social media
            presence<br></br>
            Interview training including mock interviews
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          style={{ x: photoX }}
          transition={{ type: "spring", stiffness: 400 }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/placement-support.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className=" overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[25rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
        </motion.div>
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
