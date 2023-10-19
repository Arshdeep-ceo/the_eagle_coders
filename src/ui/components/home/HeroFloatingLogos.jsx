import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Tensorflow } from "@styled-icons/simple-icons/Tensorflow";
// import { Card } from "@nextui-org/react";

function HeroFloatingLogos() {
  return (
    <div className="absolute right-16 bottom-10 flex space-x-4 space-y-4 flex-shrink opacity-[0.1] md:opacity-80 lg:opacity-100">
      <Flutter
        size="110"
        color="white"
        className="animate-[floating_4s_linear_infinite] self-end"
      />

      <div className="space-y-3 flex flex-col">
        <ReactLogo
          size="120"
          color="white"
          className="animate-[floating_5s_linear_infinite]"
        />
        <Tensorflow
          size="110"
          color="white"
          className="animate-[floating_7s_linear_infinite]"
        />
      </div>
    </div>
  );
}

export default HeroFloatingLogos;
