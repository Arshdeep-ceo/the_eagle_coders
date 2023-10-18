export default function ContactDetails() {
  return (
    <div className="text-center sm:max-w-[50%] flex flex-col sm:flex-row ">
      <div className="shadow-large mt-4">
        <div className=" font-bold">Chat to support</div>
        <p className="font-semibold">We are here to help</p>
        <img
          className="mx-auto h-unit-2xl mt-3"
          src="../../public/images/logo.png"
          alt=""
        />
        <p className="mt-3">theeaglecoders@gmail.com</p>
      </div>

      <div className="shadow-large mt-4">
        <div className=" font-bold">Vist us</div>

        <p className="mt-3 underline">Visit our office HQ.</p>
        <p className="font-semibold mt-4">
          d, 185D, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh
          Nagar, Punjab 160055
        </p>
      </div>
      <div className="shadow-large mt-4">
        <div className=" font-bold">Call us</div>
        <p className=" font-semibold mt-1">Speak to our friendly team</p>
        <img
          className="mx-auto h-unit-2xl mt-3"
          src="../../public/images/logo.png"
          alt=""
        />
        <p className=" font-semibold underline mt-2">+91 88723 12729</p>
      </div>
    </div>
  );
}
