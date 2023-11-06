import { motion, useScroll } from "framer-motion";
import Footer from "../home/footer/footer.jsx";
import Contactform from "../contact/contactform.jsx";
import ReviewCard from "../../ui/components/Internship/ReviewCard.jsx";

export default function Internship1() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-slate-750 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        {/* <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-950 shadow-xl shadow-indigo-600/10 ring-1 ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
        <div
          className="absolute"
          style={{
            backgroundClip: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
            backgroundColor: "red",
          }}
        />
        <Contactform />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.div style={{ scaleX: scrollYProgress }} />
          <img className=" h-auto bg-white" src="/images/blog/b3.webp" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl leading-8 text-white sm:text-2xl sm:leading-9">
              <figcaption className="mt-4">
                <h2 className="text-3xl pb-6 text-amber-600">
                  Full-time/Part-time Internship Programme
                </h2>
                <p className=" lg:text-xl text-gray-300 text-left">
                  The program is a combination of offline-classroom learning,
                  hands-on work experience, mentoring and coaching by some of
                  the most inspiring academics and professionals in our
                  industry. These courses are carefully designed with a
                  multi-disciplinary curricula that meet today{"’s"} aspirations
                  for innovation.
                </p>
              </figcaption>
              <p className="  text-left underline pt-6 text-amber-600 pb-6">
                Our students feel happy with us.
              </p>
              <ReviewCard />
            </blockquote>
          </figure>
        </div>
      </section>
      <Footer />
    </div>
  );
}
