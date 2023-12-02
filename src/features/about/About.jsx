import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useScroll, motion, useTransform } from "framer-motion";
import Fellowship from "./fellowship.jsx";
import Footer from "../home/footer/footer.jsx";
import Team from "./team.jsx";

const links = [
  { name: "Offline courses", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "2" },
  { name: "Full-time colleagues", value: "30+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function About() {
  const people = [
    {
      imageUrl: "/images/office.bg.jpeg",
    },
    {
      imageUrl: "/images/team.bg.jpeg",
    },
    {
      imageUrl: "/images/img11.jpeg",
    },
    {
      imageUrl: "/images/img22.jpeg",
    },
    {
      imageUrl: "/images/img33.jpeg",
    },
    {
      imageUrl: "/images/img44.jpeg",
    },
    {
      imageUrl: "/images/img55.jpeg",
    },
    {
      imageUrl: "/images/meet.bg.jpeg",
    },
    {
      imageUrl: "/images/meet2.bg.jpeg",
    },
    {
      imageUrl: "/images/img66.jpeg",
    },
    {
      imageUrl: "/images/img77.jpeg",
    },
    {
      imageUrl: "/images/img88.jpeg",
    },
    {
      imageUrl: "/images/img99.jpeg",
    },
    {
      imageUrl: "/images/img111.jpeg",
    },
    {
      imageUrl: "/images/img222.jpeg",
    },
    {
      imageUrl: "/images/img333.jpeg",
    },
    {
      imageUrl: "/images/img444.jpeg",
    },

    // More people...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? people.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === people.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (peopleIndex) => {
    setCurrentIndex(peopleIndex);
  };

  const { scrollY } = useScroll();
  const animatedText = useTransform(scrollY, [0, 400], ["#fff", "#000"]);

  const textSize = useTransform(scrollY, [100, 350], [1, 2]);
  const photoX = useTransform(scrollY, [100, 350], [-100, 0]);
  const animatedY = useTransform(scrollY, [0, 400], [0, -300]);
  return (
    <div className=" bg-white  dark:bg-gray-950 p-4 ">
      <div
        className="fixed -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="absolute aspect-[1097/845] w-[68.5625rem] dark:bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
      <div className=" ">
        <div className="p-4 text-center rounded-xl bg-slate-800">
          <h2 className=" text-3xl sm:text-[3rem] font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-600 to bg-amber-200 animate-appearance-in">
            Work with us
          </h2>
          <p className="mt-4 lg:text-xl leading-6 text-black  dark:text-gray-400 animate-drip-expand">
            Learn with Expert Learning with Experts is a global classroom
            community that brings people together to learn from expert tutors
            and each other.<br></br>An industry that will bring the biggest
            transformation in the future in just a couple of decades.
          </p>
          <section
            className="mt-8 p-7   rounded-lg flex flex-col sm:flex-row text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg"
            style={{ y: animatedY }}
          >
            <div className="pt-4 sm:basis-[65%] sm:ml-6 sm:p-0 ">
              <h2
                className="pt-4 font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
                style={{ color: { animatedText } }}
              >
                What we do?
              </h2>
              <motion.p
                className="pr-6 lg:text-xl my-2 text-stone-600 dark:text-gray-400 "
                style={{ fontSize: `${textSize}rem` }}
              >
                <ul className=" text-blue-500 lg:text-xl font-bold">
                  <p> Train</p>
                  <p>Educate</p>
                  <p>Innovate</p>
                </ul>
                AstraBytes is a collective and collaborative initiative to
                train, educate and innovate young data enthusiasts of India to
                become changemakers of society using Data Science.<br></br>
                <p className="hidden lg:block">
                  AstraBytes aims to train, educate and develop aspiring Data
                  Scientists into benchmark leaders to promote sustainable,
                  socially responsible, and impactful solutions for the modern
                  world.
                </p>
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, transform: "translateX(-40px)" }}
              style={{ x: photoX }}
              transition={{ type: "spring", stiffness: 400 }}
              whileInView={{ opacity: 1, transform: "translateX(0px)" }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/images/about.webp"
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                // className="w-[50%] h-[40%] m-3  transform transition duration-[10000] hover:scale-105 overflow-hidden self-start sm:w-[40%]"
                className="  bg-[#4B5563] overflow-hidden bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[25rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 shadow-xl"
                // style={{}}
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // animate={{ transform: "translateX(100px)", opacity: 1 }}
              />
            </motion.div>
          </section>
        </div>
        <Fellowship />
        {/* <div className="bg-slate-100"></div> */}
        <div className="mt-5">
          <h2 className=" mb-4 bg-clip-text text-center mt-5 text-2xl font-bold dark:text-amber-600  sm:text-4xl  ">
            We provide
          </h2>
          <p className="  text-gray-300 text-center lg:text-xl animate-appearance-in ">
            At AstraBytes, we train students to apply Data Science to problems
            that really matter and work with government & NGO data to create
            real change in society.<br></br>We understand that true Data
            Scientists must satisfy their need to learn more in a subject that
            is rapidly growing in addition to meeting consumer demands.
          </p>

          <div className=" dark:text-gray-200 text-center grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <p
                key={link.name}
                className="p-6 text-2xl bg-slate-800 m-8 rounded-full"
              >
                {link.name} <span aria-hidden="true"></span>
              </p>
            ))}
          </div>

          <div className="mt-12 text-center  rounded-3xl pt-6 pb-6 ">
            <div className="">
              <h2 className="mb-4 bg-clip-text text-center mt-5 text-4xl font-bold dark:text-amber-600  sm:text-5xl">
                Our Awesome Team!
              </h2>
              <p className="mt-2 lg:text-2xl  text-gray-800 dark:text-gray-300">
                Meet the leaders behind the worlds leading software development
                platform.
              </p>
            </div>
            <Team />
          </div>
          <p className="dark:text-gray-300 text-3xl text-center pt-6 font-bold">
            Our company has
          </p>
          <div className=" text-center mt-16 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 animate-appearance-in">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col ">
                <dt className="text-base leading-7 dark:bg-white/30 rounded-lg pl-2 dark:text-gray-300">
                  {stat.name}
                  <dd className="text-2xl font-bold leading-9 tracking-tight pl-2 dark:text-gray-300">
                    {stat.value}
                  </dd>
                </dt>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 sm:py-16 bg-slate-900 ">
            <div className="grid text-center ">
              <div className=" ">
                <h2 className=" text-3xl font-bold text-amber-700 sm:text-5xl">
                  Some interesting stories!{" "}
                </h2>
                <p className="mt-6 text-lg text-gray-400  text-center">
                  Learn more about our dedicated, focused and experienced
                  leadership team ...
                </p>
              </div>
            </div>
            <div className="mt-10 max-w-[1000px] h-[700px] w-full m-auto py-16 px-4 relative group ">
              <div
                style={{
                  backgroundImage: `url(${people[currentIndex].imageUrl})`,
                }}
                className="w-full h-full rounded-2xl lg:bg-cover bg-contain bg-no-repeat bg-scroll duration-500 top-0 left-0 absolute"
              ></div>
              <div className="hidden group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div className="hidden group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4  justify-center py-2">
                {people.map((peoples, peopleIndex) => {
                  <div
                    key={peopleIndex}
                    onClick={() => goToSlide(peopleIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>;
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
