import ContactDetails from "../../ui/components/contact/ContactDetails";
import Contactform from "./contactform";

export default function Contact() {
  return (
    <div className=" p-7  flex flex-col  items-center text-center">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/916283669924?text=Hey%20there%20Eagle%20Coders%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="fixed bottom-5 right-5 z-30 hover:scale-[1.05] shadow-lg "
          alt="Chat on WhatsApp"
          src="/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.svg"
        />
      </a>

      <div className=" lg:mx-0 bg-transparent  flex flex-col items-center">
        <h2 className="my-2 text-2xl font-bold sm:text-6xl dark:text-amber-600 ">
          Contact our friendly team
        </h2>
        <p className=" text-2xl text-gray-400 animate-[appearance-in_3s_ease-in] duration-1000">
          Let us know how we can help..
          <br />
          We are open for any suggestion or just to have a chat
        </p>
        <img
          className=" m-12 animate-drip-expand rounded-xl self-center"
          src="/images/Contact.png"
          alt=""
        />
      </div>
      <ContactDetails />
      <Contactform />

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2422507052315!2d76.6939939!3d30.7115894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee561aa9133b%3A0x690bedf187a1dff!2sd%2C%20185D%2C%20Phase%208B%2C%20Industrial%20Area%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160055!5e0!3m2!1sen!2sin!4v1698169301783!5m2!1sen!2sin"
        className="  h-full rounded-lg"
        allowfullscreen=""
        loading="lazy"
      ></iframe> */}
    </div>
  );
}
