import { motion, useScroll } from "framer-motion";
import Footer from "../home/footer/footer.jsx";
import Contactform from "../../features/contact/contactform.jsx";
export default function Internship() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-slate-750 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-950 shadow-xl shadow-indigo-600/10 ring-1 ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <Contactform />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.div style={{ scaleX: scrollYProgress }} />
          <img className=" h-auto bg-white" src="/images/blog/b3.webp" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <figcaption className="mt-4">
                <h2 className="text-3xl pb-6 text-amber-600">
                  Full-time/Part-time Internship Programme
                </h2>
                <p className=" text-xl text-gray-300 text-left">
                  The program is a combination of offline-classroom learning,
                  hands-on work experience, mentoring and coaching by some of
                  the most inspiring academics and professionals in our
                  industry. These courses are carefully designed with a
                  multi-disciplinary curricula that meet today{"’s"} aspirations
                  for innovation.
                </p>
              </figcaption>
              <p className=" text-left underline pt-6 text-amber-600 pb-6">
                Our students feel happy with us.
              </p>
              <div className=" bg-slate-500 rounded-3xl">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base ">
                  <div className="font-semibold text-white mb-4">
                    Jasleen Kaur
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white mb-4">
                    Student of The Eagle Coders
                  </div>
                </div>
                <p>
                  “We are satisfied with the solution given to us and with the
                  communication flow through the project. We would like to
                  recommend Mr. Arshdeep Singh and his development team. We look
                  forward to working with them in future projects. I wanted to
                  take a moment to thank you for the services your team has
                  provided.”
                </p>
              </div>
            </blockquote>
          </figure>
          <div className=" bg-slate-500 rounded-3xl">
            <blockquote className="mt-14 text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <figcaption className="mt-4">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="/images/team/t1.webp"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className=" mb-4 font-semibold text-white">
                    Rahul Kumar
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white mb-4">
                    Student of The Eagle Coders
                  </div>
                </div>
              </figcaption>
              <p>
                “Choosing The Eagle Coders was the best decision for our digital
                initiatives. Their tailoed solutions and flexibility have
                exceeded our expectations.”
              </p>
            </blockquote>
          </div>
          <div className=" bg-slate-500 rounded-3xl">
            <blockquote className=" mt-14 text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <figcaption className="mt-4">
                <img
                  className="  mx-auto h-10 w-10 rounded-full"
                  src="/images/team/t2.webp"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white mb-4">
                    Hamid Sharma
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white mb-4">
                    Student of The Eagle Coders
                  </div>
                </div>
              </figcaption>
              <p>
                “The eagle coders is a standout digital agency in our area,
                offering personalize attention and exceptional expertise.”
              </p>
            </blockquote>
          </div>
          <div className=" bg-slate-500 rounded-3xl">
            <blockquote className="mt-14 text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <figcaption className="mt-4 ">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="/images/team/t3.webp"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white mb-4">
                    Simranjeet Kaur
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white mb-4">
                    Student of The Eagle Coders
                  </div>
                </div>
              </figcaption>
              <p>
                “I am impressed by The eagle coders dedication, creativity and
                attention to detail. They deliver high-quality solutions with
                speed and agility.”
              </p>
            </blockquote>
          </div>
          <div className=" bg-slate-500 rounded-3xl">
            <blockquote className="mt-14 text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <figcaption className="mt-4">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="/images/team/t4.webp"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white mb-4">
                    Jaswinder Singh
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900 mb-4"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white mb-4">
                    Student of The Eagle Coders
                  </div>
                </div>
              </figcaption>
              <p>
                “The eagle coders stands out with their skill, efficiency and
                their customer focused approach. Highly regarded in the
                industry.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
