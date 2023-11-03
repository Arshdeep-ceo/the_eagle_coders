import { Card } from "@nextui-org/react";
import { Gmail } from "styled-icons/simple-icons";
import { PhoneCall } from "styled-icons/boxicons-solid";
import { Location } from "@styled-icons/entypo/Location";

("@styled-icons/evaicons-solid/PhoneCall");
export default function ContactDetails() {
  return (
    <div className=" mt-4 dark:text-gray-500 text-center flex flex-col gap-5 flex-wrap">
      <a
        href="mailto:theastrabytes@gmail.com?body=Hey there Astrabytes, I'm "
        className="grow "
      >
        <Card
          isFooterBlurred
          radius="lg"
          className="p-4 text-xl border-none  bg-white/10 shadow-lg hover:scale-[1.03] items-center "
        >
          <p className="font-bold ">Chat</p>
          <p className="">We are here to help</p>
          <Gmail size="30" color="white" className="self-center" />

          <p className=" underline ">theastrabytes@gmail.com</p>
        </Card>
      </a>

      <Card
        isFooterBlurred
        radius="lg"
        className=" p-4 text-xl border-none  bg-white/10 grow shadow-lg hover:scale-[1.03] pb-4"
      >
        <div className="my-auto hover:scroll-auto ">
          <div className=" font-bold ">Visit us</div>
          <Location size="30" color="white" />
          <p className="mt-3 underline">Visit our office HQ.</p>
          <p className="font-semibold mt-4 ">
            Prosperity Square, Second floor ,D-185, Sector 74, Sahibzada Ajit
            Singh Nagar, Punjab 160055
          </p>
        </div>
      </Card>

      <a href="tel:62833247119" className="grow ">
        <Card
          isFooterBlurred
          radius="lg"
          className="text-xl border-none  bg-white/10  grow shadow-lg hover:scale-[1.03]"
        >
          <div className="my-auto p-4 ">
            <div className=" font-bold">Call us</div>
            <p className=" ">Speak to our friendly team</p>
            <PhoneCall size="30" color="white" />
            <p className=" font-semibold underline mt-2">+91-62833247119</p>
          </div>
        </Card>
      </a>
    </div>
  );
}
