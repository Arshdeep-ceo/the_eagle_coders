import { Card } from "@nextui-org/react";
export default function ContactDetails() {
  return (
    <div className=" mt-4 dark:text-gray-500 text-center sm:max-w-[70%] flex flex-col gap-5 sm:flex-row flex-wrap">
      <Card
        isFooterBlurred
        radius="xl"
        className="border-none  bg-white/10 h-48 shadow-lg "
      >
        <div className="my-auto p-4 text-xl">
          <p className="font-bold ">Chat</p>
          <p className="">We are here to help</p>
          <img
            className="mx-auto h-unit-2xl mt-3"
            src="../../public/images/logo.png"
            alt=""
          />
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
          <img
            className="mx-auto h-unit-2xl mt-3"
            src="../../public/images/logo.png"
            alt=""
          />
          <p className=" font-semibold underline mt-2">
            +91 88723 12729<br></br>+91 88475 97046
          </p>
        </div>
      </Card>
    </div>
  );
}
