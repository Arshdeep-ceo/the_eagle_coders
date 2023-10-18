import { motion, useScroll } from "framer-motion";
export default function Testimonials() {
  const { scrollYProgress } = useScroll();
  return (
    <section className="relative isolate overflow-hidden bg-slate-700 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-950 shadow-xl shadow-indigo-600/10 ring-1 ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <motion.div style={{ scaleX: scrollYProgress }} />
        <img
          className="mx-auto h-unit-4xl bg-white"
          src="../../public/images/logo.png"
          alt=""
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              “We are satisfied with the solution given to us and with the
              communication flow through the project. We would like to recommend
              Mr. Arshdeep Singh and his development team. We look forward to
              working with them in future projects. I wanted to take a moment to
              thank you for the services your team has provided.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Jasleen Kaur</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white">Student of The Eagle Coders</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
