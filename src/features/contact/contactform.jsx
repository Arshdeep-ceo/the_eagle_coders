import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Contactform() {
  const [agreed, setAgreed] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    skills: "",
    institute: "",
    yearOfAdmission: "",
    currentSemester: "",
    department: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phoneNumber,
      skills,
      institute,
      yearOfAdmission,
      currentSemester,
      department,
    } = user;
    if (
      name &&
      email &&
      phoneNumber &&
      skills &&
      institute &&
      yearOfAdmission &&
      currentSemester &&
      department
    ) {
      const res = await fetch(
        "https://eaglecodersforms-default-rtdb.firebaseio.com/contactusform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber,
            skills,
            institute,
            yearOfAdmission,
            currentSemester,
            department,
          }),
        },
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phoneNumber: "",
          skills: "",
          institute: "",
          yearOfAdmission: "",
          currentSemester: "",
          department: "",
        });
        alert("Data Stored Successfully!😍");
      }
    } else {
      alert("Please fill all the data!😊");
    }
  };
  return (
    <div className=" dark:bg-white/10 rounded-large mt-8 mb-6 px-4 ">
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
        <h2 className="font-bold tracking-tight dark:text-amber-600 text-xl sm:text-3xl animate-pulse">
          Interested?<br></br>
          <p>Request a call</p>
        </h2>
        <p className="mt-2 pb-6 text-xl leading-8 dark:text-gray-300">
          Contact AstraBytes® here by Email Skype or Contact form - We look
          forward to starting a conversation with you!
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className=" animate-appearance-in mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className=" grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
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
            <div className="mt-2.5">
              <input
                type="text"
                name="institute"
                id="Institute"
                placeholder="Enter your college/university name"
                value={user.institute}
                onChange={getUserData}
                autoComplete="institute"
                className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="text"
                name="yearOfAdmission"
                id="Year of Admission"
                placeholder="Enter year of admission"
                value={user.yearOfAdmission}
                onChange={getUserData}
                autoComplete="yearOfAdmission"
                className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="text"
                name="currentSemester"
                id="current Semester"
                placeholder="Enter current semester"
                value={user.currentSemester}
                onChange={getUserData}
                autoComplete="currentSemester"
                className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="text"
                name="department"
                id="Department"
                placeholder="Enter department"
                value={user.department}
                onChange={getUserData}
                autoComplete="department"
                className="block w-full rounded-md border-0 dark:bg-gray-950/30 px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
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
  );
}
