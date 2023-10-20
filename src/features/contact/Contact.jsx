import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import ContactDetails from "../../ui/components/contact/ContactDetails";
// import { Header } from "styled-icons/fa-solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [user, setUser] = useState({
    name: "",
    course: "",
    email: "",
    phoneNumber: "",
    skills: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, course, email, phoneNumber, skills } = user;
    if (name && course && email && phoneNumber && skills) {
      const res = await fetch(
        "https://eaglecodersforms-default-rtdb.firebaseio.com/contactusform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            course,
            email,
            phoneNumber,
            skills,
          }),
        },
      );
      if (res) {
        setUser({
          name: "",
          course: "",
          email: "",
          phoneNumber: "",
          skills: "",
        });
        alert("Data Stored Successfully!😍");
      }
    } else {
      alert("Please fill all the data!😊");
    }
  };

  return (
    <div className=" p-7  flex flex-col  items-center text-center">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/916283669924?text=Hey%20there%20Eagle%20Coders%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="fixed bottom-5 right-5 z-30 hover:scale-[1.05] shadow-lg "
          alt="Chat on WhatsApp"
          src="/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.svg"
        />
      </a>
      <div className=" lg:mx-0 bg-transparent  flex flex-col items-center">
        <img
          className="h-unit-4xl animate-drip-expand bg-white rounded-full self-center"
          src="/images/logo.png"
          alt=""
        />
        <h2 className="my-2 text-2xl font-bold sm:text-4xl dark:text-gray-400 ">
          Contact our friendly team
        </h2>
        <p className="text-gray-400 animate-[appearance-in_3s_ease-in] duration-1000">
          Let us know how we can help..
          <br />
          We are open for any suggestion or just to have a chat
        </p>
        {/* <figure className="mt-3  ">
          <blockquote className=" mt-3 text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"></blockquote>
        </figure> */}
      </div>
      <ContactDetails />
      <div className=" dark:bg-white/10 rounded-large mt-8 mb-6 px-4">
        <div
          className=" absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className=" rounded-xl shadow-2xl mt-6 pt-6 mx-auto max-w-2xl text-center">
          <h2 className="font-bold tracking-tight dark:text-gray-400 text-xl sm:text-3xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 dark:text-gray-300">
            Contact the Eagle Coders® here by Email Skype or Contact form - We
            look forward to starting a conversation with you!
          </p>
        </div>

        <form
          action="#"
          method="POST"
          className=" animate-appearance-in mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className=" grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900 "
              >
                Name
              </label> */}
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={getUserData}
                  autoComplete="name"
                  className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Course
              </label> */}
              <div className="mt-2.5">
                <input
                  type="text"
                  name="course"
                  id="course"
                  placeholder="Enter your branch name"
                  value={user.course}
                  onChange={getUserData}
                  autoComplete="course"
                  className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label> */}
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email-address"
                  value={user.email}
                  onChange={getUserData}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Mobile number
              </label> */}
              <div className="mt-2.5">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={user.phoneNumber}
                  onChange={getUserData}
                  autoComplete="course"
                  className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Skills you want to learn
              </label> */}
              <div className="mt-2.5">
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="Enter skills you want to learn"
                  value={user.skills}
                  onChange={getUserData}
                  autoComplete="skills"
                  className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-indigo-600" : "bg-gray-950",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-500">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-6 pb-8">
            <button
              type="submit"
              className=" block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm dark:bg-indigo-500 dark:hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={postData}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d270749.72481984575!2d76.57867897943643!3d30.808395150261166!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1697443684655!5m2!1sen!2sin"
        className="  h-full rounded-lg"
        allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
