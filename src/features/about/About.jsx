import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Avatar } from "@nextui-org/react";

const links = [
  { name: "Offline courses", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "1" },
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
      imageUrl: "/images/meet.bg.jpeg",
    },
    {
      imageUrl: "/images/meet2.bg.jpeg",
    },

    // More people...
  ];
  const team = [
    {
      name: "Arshdeep Singh",
      role: "Founder & Web Developer",
      experience: "Two years",
      imageUrl: "/images/arsh.jpeg",
    },
    {
      name: "Sunil Jaswal",
      role: "Founder & Web Developer",
      experience: "Two years",
      imageUrl: "/images/Sunil.jpeg",
    },

    {
      name: "Ramanpreet kaur",
      role: "Web Developer",
      experience: "One year",
      imageUrl: "/images/Raman.jpeg",
    },
    {
      name: "Neha Sharma",
      role: "HR manager",
      experience: "Three years",
      imageUrl: "/images/team/t3.webp",
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
  return (
    <div className="overflow-hidden bg-white  dark:bg-gray-950 p-4 ">
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
      <div className="">
        <div className="">
          <h2 className=" text-3xl sm:text-[2.5rem] font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-500 to bg-amber-300">
            Work with us
          </h2>
          <p className=" text-md leading-6 text-black  dark:text-gray-400 animate-drip-expand">
            Learn with Expert Learning with Experts is a global classroom
            community that brings people together to learn from expert tutors
            and each other.
          </p>
          <h2 className="mt-5 text-lg font-semibold dark:text-gray-400 sm:text-2xl   ">
            We provide
          </h2>
        </div>
        {/* <div className="bg-slate-100"></div> */}
        <div className="mt-5">
          <div className=" dark:text-gray-300 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 mr-4 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 animate-appearance-in">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col ">
                <dt className="text-base leading-7 dark:bg-white/30 rounded-lg pl-2 dark:text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight pl-2 dark:text-gray-300">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 ">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold dark:text-gray-300 tracking-tight sm:text-4xl ">
                Our Awesome Team!
              </h2>
              <p className="mt-2 text-md  text-gray-800 dark:text-gray-300">
                Meet the leaders behind the worlds leading software development
                platform.
              </p>
            </div>
            <ul // Team Cards
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-2 gap-y-12 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-4   xl:col-span-2 place-content-stretch place-items-stretch mb-8 " //
            >
              {team.map((person) => (
                <li key={person.name} className="text-center ">
                  {/* <img
                    className=" rounded-md w-[100%] p-3"
                    src={person.imageUrl}
                    alt=""
                  /> */}
                  <Avatar
                    isBordered
                    radius="sm"
                    color="primary"
                    src={person.imageUrl}
                    className="h-30 w-unit-5xl ring-transparent drop-shadow-xl hover:scale-[1.05] transition-transform"
                  />

                  <h3 className=" text-left font-semibold leading-7 tracking-tight dark:text-gray-300 ">
                    {person.name}
                  </h3>
                  <p className="text-left text-sm font-semibold  text-amber-100">
                    {person.role}
                  </p>
                  <p className="text-left text-sm font-semibold  text-amber-100">
                    {person.experience} of experience
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:py-16">
            <div className="grid  gap-y-20 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-400 sm:text-5xl">
                  Some interesting stories!{" "}
                </h2>
                <p className="mt-6 text-lg text-gray-400">
                  Learn more about our dedicated, focused and experienced
                  leadership team ...
                </p>
              </div>
            </div>
            <div className="mt-6 max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group ">
              <div
                style={{
                  backgroundImage: `url(${people[currentIndex].imageUrl})`,
                }}
                className="w-full h-full rounded-2xl bg-cover bg-scroll duration-500 top-0 left-0 absolute"
              ></div>
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
        </div>
      </div>
    </div>
  );
}
