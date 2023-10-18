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
      imageUrl: "../../public/images/office.bg.jpeg",
    },
    {
      imageUrl: "../../public/images/team.bg.jpeg",
    },
    {
      imageUrl: "../../public/images/meet.bg.jpeg",
    },
    {
      imageUrl: "../../public/images/meet2.bg.jpeg",
    },

    // More people...
  ];
  const team = [
    {
      name: "Arshdeep Singh",
      role: "Web Developer",
      imageUrl: "../../public/images/team/t2.webp",
    },
    {
      name: "Sunil Jaswal",
      role: "Developer",
      imageUrl: "../../public/images/team/t1.webp",
    },

    {
      name: "Ramanpreet kaur",
      role: "Web Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    <div className="pr-0 flex overflow-hidden bg-white  dark:bg-gray-950 pt-4 pl-3  ">
      {/* <img
        src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      {/* <div // ki aa eh div oh taan menu vi dikhda eh ki answer aa  oh yr code kito copy krea kito kuch elaemdednt krebaol na kerha eh element bol kerha ki krda eh code eh ta ma dhyan ni dita
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" // aa ki kr ryi dance
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          // style={{
          //   clipPath:
          //     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          // }}
        />
      </div> */}
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
        <div className=" mx-auto max-w-2xl lg:mx-0">
          <h2 className=" text-[2.8rem] font-bold bg-clip-text dark:bg-gradient-to-r from-pink-600 via-amber-700 to bg-amber-600 tracking-tight text-transparent sm:text-6xl animate-[bounce_5s_ease-in_infinite] duration-10000 ">
            Work with us
          </h2>
          <p className=" text-md leading-6 text-black dark:text-gray-600 animate-drip-expand">
            Learn with Expert Learning with Experts is a global classroom
            community that brings people together to learn from expert tutors
            and each other.
          </p>
          <h2 className=" text-[2.8rem] font-semibold bg-clip-text dark:bg-gradient-to-r from-pink-400 via-amber-500 to bg-amber-300 tracking-tight text-transparent sm:text-4xl animate-[pulse_5s_ease-in_infinite] duration-10000  ">
            We provide
          </h2>
        </div>
        {/* <div className="bg-slate-100"></div> */}
        <div className="mt-5">
          <div className=" text-gray-500 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 animate-appearance-in">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 bg-black dark:text-gray-500">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight bg-black dark:text-gray-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className=" rounded-lg pl-5 pr-4 pt-24 sm:pt-14 mt-8  bg-gradient-to-r from-pink-600 via-amber-400 to bg-amber-600 ">
            <div className="max-w-2xl">
              <h2 className="ml-0 text-3xl  tracking-tight sm:text-6xl animate-[bounce_5s_ease-in_infinite] duration-10000">
                Our Awesome Team!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-800">
                Meet the leaders behind the worlds leading software development
                platform.
              </p>
            </div>
            <ul // Team Cards
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-2 gap-y-12 sm:grid-cols-3 sm:gap-y-10 sm:gap-x-4   xl:col-span-2 place-content-stretch place-items-stretch mb-8" //
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
                    className="h-30 w-unit-5xl ring-transparent drop-shadow-xl"
                  />

                  <h3 className=" text-left font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-left text-sm font-semibold leading-6 text-amber-1000">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" bg-gradient-to-r from-amber-200 via-amber-100 to bg-amber-600 py-24 sm:py-22">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-pink-600 via-amber-700 to bg-amber-600 tracking-tight text-transparent sm:text-6xl animate-[bounce_5s_ease-in_infinite] duration-10000 ">
                  Some interesting stories!{" "}
                </h2>
                <p className="mt-6 text-lg font-serif leading-8 text-gray-600">
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
