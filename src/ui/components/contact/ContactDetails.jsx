import { Card } from "@nextui-org/react";
import { Gmail } from "styled-icons/simple-icons";
import { PhoneCall } from "styled-icons/boxicons-solid";
import { Location } from "@styled-icons/entypo/Location";

("@styled-icons/evaicons-solid/PhoneCall");
export default function ContactDetails() {
  return (
    <div className=" mt-4 dark:text-gray-500 text-center flex flex-col gap-5 flex-wrap">
      <a
        href="mailto:rkrk09134@gmail.com?body=Hey there CodeRippleX, I'm "
        className="grow "
      >
        <Card
          isFooterBlurred
          radius="lg"
          className=" text-xl border-none  bg-white/10 h-48 shadow-lg hover:scale-[1.03] items-center "
        >
          <p className="font-bold pb-4">Chat</p>
          <p className="">We are here to help</p>
          <Gmail size="30" color="white" className="self-center" />

          <p className=" underline">theeaglecoders@gmail.com</p>
        </Card>
      </a>
      <Card
        isFooterBlurred
        radius="lg"
        className=" text-xl border-none  bg-white/10 h-48 grow shadow-lg hover:scale-[1.03]"
      >
        <div className="my-auto ">
          <div className=" font-bold pb-4">Visit us</div>
          <Location size="30" color="white" />
          <p className="mt-3 underline">Visit our office HQ.</p>
          <p className="font-semibold mt-4 ">
            d, 185D, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh
            Nagar, Punjab 160055
          </p>
        </div>
      </Card>
      <Card
        isFooterBlurred
        radius="lg"
        className="text-xl border-none  bg-white/10 h-48 grow shadow-lg hover:scale-[1.03]"
      >
        <div className="my-auto ">
          <div className="pb-4 font-bold">Call us</div>
          <p className=" ">Speak to our friendly team</p>
          <PhoneCall size="30" color="white" />
          <p className=" font-semibold underline mt-2">
            +91 88723 12729<br></br>+91 88475 97046
          </p>
        </div>
      </Card>
    </div>
  );
}
