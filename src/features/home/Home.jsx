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

    <div className="flex  flex-col p-0 m-0 overflow-x-clip">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/916283247119?text=Hey%20there%20AstraBytes%20"
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
            <h2 className=" text-center lg:text-5xl text-3xl font-bold text-amber-600 animate-appearance-in ">
              Services provided by<br></br> AstraBytes
            </h2>

            <p className=" text-center mt-4 lg:text-2xl text-lg text-gray-400">
              Our company provide IT services and software products.<br></br>At
              AstraBytes, we craft software that pushes the boundaries of
              innovation and delivers exceptional user experiences.
            </p>
            <p className="hidden lg:block text-center mt-4 lg:text-2xl text-gray-400">
              From ideation to deployment,our company is your end-to-end partner
              for cutting-edge software solutions.Transforming your vision into
              pixel-perfect reality, one line of code at a time.
            </p>
          </div>
        </div>
        <div className="h-auto w-auto">
          <p className=" -mt-4 pb-6 text-center pl-6 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-pink-700 ">
            IT Services
          </p>
          <p className="pb-4 text-xl pl-6 mb-2 tracking-tight text-gray-900 dark:text-gray-400 animate-pulse">
            In a digital world that never stops evolving, our company stands at
            the forefront, delivering agile and scalable software solutions. We
            power businesses with IT solutions that are both innovative and
            reliable.
          </p>
          <p className=" hidden lg:block pb-4 text-xl pl-6 mb-2 tracking-tight text-gray-900 dark:text-gray-400 animate-pulse">
            From robust infrastructure management to cutting-edge cloud
            solutions, AstraBytes is your trusted IT partner for the digital
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

          <p className="mt-2 text-stone-600 dark:text-gray-400 text-sm lg:text-sm pr-4">
            1.Navigating the complexities of today{"'s"} industries requires
            specialized tools; our training software stands as a beacon, guiding
            firms to success.<br></br>2.Merging cutting-edge technology with
            deep industry insights, our software reshapes the landscape of
            professional training.<br></br>3.In an era of relentless change, our
            training software provides businesses the anchor they need:
            tailored, industry-specific solutions.
          </p>
          <p className=" hidden lg:block text mt-2 text-stone-600 dark:text-gray-400 text-xs lg:text-sm pr-4">
            4.From novices to experts, our platform elevates every professional,
            gearing them up to face real-world challenges.<br></br>5.We don
            {"'t"} just train, we transform. Dive deep into industry practices
            with our software and emerge as a leader.
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
            className="pt-4 font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
            style={{ color: { animatedText } }}
          >
            Experience <br></br>excellence<br></br>with us
          </h2>
          <motion.p
            className="my-2 text-stone-600 dark:text-gray-400 "
            style={{ fontSize: `${textSize}rem` }}
          ></motion.p>

          <p className="mt-2 text-stone-600 dark:text-gray-400 pb-4 ">
            At the<span className="text-pink-500 font-bold"> AstraBytes</span> ,
            we provide an unparalleled experience for aspiring web developers,
            ensuring they are equipped for the rapidly evolving digital
            landscape. Our curriculum is meticulously designed to offer a blend
            of theoretical knowledge and hands-on coding practice, emphasizing
            both the art and science of web development.
          </p>
          <p className=" hidden lg:block mt-2 text-stone-600 dark:text-gray-400">
            Dive into the dynamic world of coding with us! At our company, we
            believe that every line of code is a step towards the future, and we{" "}
            {"'re"} eager to guide you on this transformative journey.<br></br>
          </p>
          <p className=" hidden lg:block mt-2 text-stone-600 dark:text-gray-400">
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
            You are definitely going to
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

          <p className=" lg:text-lg mt-2 text-stone-600 dark:text-gray-400">
            The Placement Program is designed to help interns improve their
            chances to get the right career opportunity and make them
            industry-ready.AstraBytes seeks to assist interns with professional
            development and improve their interpersonal skills, hence making
            them ready to deliver in all kinds of business environments. For
            this purpose,AstraBytes organizes various workshops to help the
            interns get ready for their future endeavors.
          </p>
          <p className=" hidden lg:block lg:text-lg mt-2 text-stone-600 dark:text-gray-400">
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
      <div className=" grid bg-slate-950 rounded-2xl lg:ml-24 lg:mr-24 pt-8">
        <div className="text-4xl font-bold text-center text-amber-700 px-6 ">
          100+ companies waiting for you
        </div>
        <p className="px-6 text-center pt-4 pb-4 text-gray-400 text-lg lg:pl-12 lg:pr-12 ">
          We{"'ll"} help you get hired. Our team will work with you throughout
          the program and after graduation to help you embellish your portfolio,
          practice interviewing and land a job that enhances your skills and
          accelerates your growth.
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-2 lg:ml-38 lg:mr-30">
          <img
            src="https://www.mphasis.com/content/dam/mphasis-com/global/logo/mphasis-logo.png.thumb.468.468.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="ml-8 mr-2 mt-12  bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[3rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://hopingminds.com/wp-content/uploads/2022/12/05-2.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://hopingminds.com/wp-content/uploads/2022/12/06-2.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://hopingminds.com/wp-content/uploads/2022/12/08-2.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://hopingminds.com/wp-content/uploads/2022/12/12-1.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://hopingminds.com/wp-content/uploads/2022/12/16-1.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://hopingminds.com/wp-content/uploads/2022/12/24-2.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/100/816/non_2x/microsoft-logo-transparent-free-png.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjmdkWXOCrsCDp-1PFF_EIX0OKoIdA9xP5hPac9wBN-V27FlhsxFHSKi_0NTJma_xClY&usqp=CAU"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49PrKIZY4PJPfHSUTMevLTOkliEgqA-TwKA&usqp=CAU"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://www.valueresearchonline.com/content-assets/images/31484_20160706-stockwire-lntinfotech-480px.jpg"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://img.favpng.com/17/11/7/larsen-toubro-l-t-technology-services-india-architectural-engineering-logo-png-favpng-4nSSxK3dYjg71FUbT12j0Bk4F.jpg"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://www.passionateinmarketing.com/wp-content/uploads/2023/02/Info-Edge-India-Limited-4.jpeg"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://ttlwebassets.tatatechnologies.com/app/uploads/2023/03/TataTTLgrouplockup.jpg"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/837px-Tata_logo.svg.png"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="m-8 bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[5rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 "
          />
        </div>
      </div>
      <section className=" p-6" style={{}}>
        <div className=" font-bold text-stone-700 dark:text-yellow-500 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg duration-100">
          Why Us?
        </div>

        <p className="mt-2 dark:text-gray-400 text-lg">
          Our company offers a unique blend of hands-on experience and
          theoretical and practical knowledge, ensuring that students not only
          understand the concepts but can also apply them in real-world
          scenarios. This holistic approach to education equips our learners
          with practical skills that make them industry-ready from day one.
          <br></br>
        </p>
        <p className="hidden lg:block mt-2 dark:text-gray-400 text-lg">
          Our company is at the forefront of industry innovations, giving
          students access to the latest tools, technologies, and methodologies.
          By learning with us, students are always a step ahead, positioning
          themselves as top candidates for future opportunities in a competitive
          market.
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
