import Features from "./features.jsx";
import Course from "../home/course.jsx";
import { Button } from "flowbite-react";
import { Zoom } from "react-awesome-reveal";
import Footer from "../home/footer/footer.jsx";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();
  const [setCurrentTab] = useOutletContext();
  function handleStartJourneyBtn() {
    setCurrentTab(0);
    navigate("/contact");
  }

  return (
    <div className="flex flex-col relative overflow-hidden bg-gray-950 ">
      <div className="flex flex-col sm:flex-row justify-between xl:justify-around p-3 md:p-12 sm:px-6 lg:px-8 pt-16 sm:pb-40 sm:pt-24 pb-10 lg:pt-26">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Get in touch and
            <br /> explore from here
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            This year, our trainers will going to give you <br></br> the best
            experience😍<br></br> come and join us..
          </p>
          <Button
            onPress={() => handleStartJourneyBtn()}
            variant="shadow"
            color="primary"
            radius="medium"
            className="mt-4 w-48 p-5 dark:bg-indigo-600 text-white"
          >
            Start your journey now...
          </Button>
        </div>
        <div className="flex flex-row pt-16 sm:pt-0 space-x-6 lg:space-x-8">
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className=" h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 animate-[floating_3s_linear_infinite]">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg animate-[floating_5s_linear_infinite]">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
            <div className="h-64 w-44 overflow-hidden rounded-lg animate-[floating_4s_linear_infinite]">
              <img
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg animate-[floating_6s_linear_infinite]">
              <img
                src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className=" py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="-mt-20 relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 524 524"
              className=" absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className=" max-w-md text-center lg:py-32 lg:text-left">
              <h2 className=" text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Vision
              </h2>
              <p className=" mt-6 text-lg leading-8 text-gray-300">
                CodeRippleX aims to train, educate and develop aspiring Data
                Scientists into benchmark leaders to promote sustainable,
                socially responsible, and impactful solutions for the modern
                world.<br></br>CodeRippleX is a collective and collaborative
                initiative to train, educate and innovate young data enthusiasts
                of India to become changemakers of society using Data Science.
              </p>

              <div className="relative mt-10 h-50 lg:mt-8">
                <img
                  className="relative left-0 top-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="https://iaam.se/img/Our%20Vision%20&%20Mission/Pic%201%20-%20640%20X%20426px%20Vision.jpg"
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Features />
      <Footer />
    </div>
  );
}
