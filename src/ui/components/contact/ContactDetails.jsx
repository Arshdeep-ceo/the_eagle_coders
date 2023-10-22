import { Card } from "@nextui-org/react";
import { Gmail } from "styled-icons/simple-icons";
import { PhoneCall } from "styled-icons/boxicons-solid";

("@styled-icons/evaicons-solid/PhoneCall");
export default function ContactDetails() {
  return (
    <div className=" mt-4 dark:text-gray-500 text-center sm:max-w-[70%] flex flex-col gap-5 sm:flex-row flex-wrap">
      <Card
        isFooterBlurred
        radius="lg"
        className=" text-xl border-none  bg-white/10 h-48 shadow-lg grow "
      >
        <div className="my-auto">
          <p className="font-bold ">Chat</p>
          <p className="">We are here to help</p>
          <Gmail size="30" color="white" />

          <p className=" underline">
            theeaglecoders
            <br />
            @gmail.com
          </p>
        </div>
      </Card>
      <Card
        isFooterBlurred
        radius="lg"
        className=" text-xl border-none  bg-white/10 h-48 grow shadow-lg "
      >
        <div className="my-auto ">
          <div className=" font-bold">Visit us</div>

          <p className="mt-3 underline">Visit our office HQ.</p>
          <p className="font-semibold mt-4">
            d, 185D, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh
            Nagar, Punjab 160055
          </p>
        </div>
      </Card>
      <Card
        isFooterBlurred
        radius="lg"
        className="text-xl border-none  bg-white/10 h-48 grow shadow-lg "
      >
        <div className="my-auto ">
          <div className=" font-bold">Call us</div>
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
