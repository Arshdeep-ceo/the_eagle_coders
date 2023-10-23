import Features from "./features.jsx";
import { Button } from "@nextui-org/react";
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
      <div className="flex flex-col sm:flex-row justify-between xl:justify-around p-3 md:p-12 sm:px-6 lg:px-8 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-26">
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

      <Features />
      <Footer />
    </div>
  );
}
