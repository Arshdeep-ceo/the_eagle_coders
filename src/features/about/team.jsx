import { motion } from "framer-motion";

const team = [
  {
    name: "Arshdeep Singh",
    role: "Web Developer",
    experience:
      "Mr.Arshdeep Singh works as a Full stack developer. He is a software engineer who loves to create websites as well as apps for people. He think that people should look at the bigger picture when they are building something. He love to work in groups where everyone can voice their opinions and ideas.",
    imageUrl: "/images/arsh.jpeg",
  },
  {
    name: "Sunil Jaswal",
    role: "Python Developer",
    experience:
      "Mr.Sunil Jaswal have expertise in areas such as machine learning, deep learning, natural language processing and computer vision. He believe that AI has the potential to make a significant impact on society and various industries. By developing AI solutions, you can contribute to advancements in healthcare, finance, transportation, climate change, and many other areas, making a positive difference in the world.",

    imageUrl: "/images/Sunil.jpeg",
  },

  {
    name: "Ramanpreet kaur",
    role: "Web Developer",
    experience:
      "Ms.Ramanpreet Kaur works as a web developer. She has consistently showcased exceptional technical prowess coupled with a keen eye for design. Being a pivotal part of our team, she brings an unmatched passion for creating responsive, user-friendly, and innovative websites.Beyond technical skills, his strength lies in her dedication to continuous learning and improvement.",
    imageUrl: "/images/myimg1.JPG",
  },
  {
    name: " Neha Sharma",
    role: "HR manager",
    experience:
      "Ms. Neha Sharma stands at the crossroads of people and strategy with Three years of dedicated experience in Human Resources. She seamlessly marries theoretical principles with pragmatic solutions tailored to our organizational needs. As our HR Manager, Neha's approach is defined by a keen understanding of both individual aspirations and business objectives.",
    imageUrl: "/images/Neha.jpeg",
  },
  {
    name: "Jaspreet Kaur",
    role: "Marketing Manager",
    experience:
      "Ms. Jaspreet Kaur's ability to adapt and learn is also striking. In the ever-evolving world of marketing, she is always up-to-date with the latest trends, technologies, and best practices. This dedication to growth and improvement is a testament to her passion for what she do.",
    imageUrl: "/images/team/t3.webp",
  },
  {
    name: "Shubham agarwal",
    role: "Project Manager",
    experience:
      "Mr. Shubam agarwal is an outstanding project manager with a proven track record of successful project deliveries. I've had the privilege of working alongside him on several projects, and I can confidently say that he is a valuable asset to any team or organization. He possesses exceptional organizational and leadership skills. He has a keen eye for detail, ensuring that every aspect of a project is carefully planned and executed.",
    imageUrl: "/images/team/t2.webp",
  },
  {
    name: "Harshita Sharma",
    role: "ReactJs developer",
    experience:
      "Ms.Harshits Sharma is a talented ReactJS developer. I've had the pleasure of collaborating with her on a few projects, and I've been consistently impressed with their skills and dedication. She excel at designing and implementing responsive user interfaces, leveraging the power of React to create efficient and modular components.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: " Jasika",
    role: "Flutter developer",
    experience:
      "Ms. Jasika  is an exceptional Flutter developer. I've had the opportunity to witness their talent and dedication in the field of mobile app development, and I'm consistently impressed by her  skills. Jasika has a deep understanding of Flutter and the Dart programming language, which they leverage to create polished and user-friendly mobile applications. She excel at building responsive and visually appealing UIs. ",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // More people...
];
export default function Team() {
  // const { scrollY } = useScroll();
  // const animatedText = useTransform(scrollY, [0, 400], ["#fff", "#000"]);

  // const textSize = useTransform(scrollY, [100, 350], [1, 2]);
  // const photoX = useTransform(scrollY, [100, 350], [-100, 0]);
  // const animatedY = useTransform(scrollY, [0, 400], [0, -300]);
  return (
    <div className=" lg:ml-72 lg:mr-72 text-center rounded-xl ">
      {team.map((person, index) => (
        <section
          key={person.name}
          className={`mt-2 p-7 sm:flex-row  rounded-lg flex flex-col  ${
            index === 1 && "sm:flex-row-reverse"
          }  
          ${index === 3 && "sm:flex-row-reverse"} 
          ${index === 5 && "sm:flex-row-reverse"} 
          ${index === 7 && "sm:flex-row-reverse"} 
           text-gray-400 dark:bg-gray-900/40 backdrop-blur-lg`}
          // style={{ y: animatedY }}
        >
          <motion.div
            initial={{
              opacity: 0,
              transform: `translateX(${
                (index === 0 && "-40px") ||
                (index === 1 && "40px") ||
                (index === 2 && "-40px") ||
                (index === 3 && "40px") ||
                (index === 4 && "-40px") ||
                (index === 5 && "40px") ||
                (index === 6 && "-40px") ||
                (index === 7 && "40px") ||
                (index === 8 && "-40px")
              })`,
            }}
            // style={{ x: photoX }}
            transition={{ type: "spring", stiffness: 400 }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={person.imageUrl}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
              // className="w-[50%] h-[40%] m-3  transform transition duration-[10000] hover:scale-105 overflow-hidden self-start sm:w-[40%]"
              className="bg-[#4B5563]  bg-contain rounded-2xl bg-clip-border sm:basis-[35%] max-h-[17rem]  drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl duration-75 shadow-xl "
              // style={{}}
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // animate={{ transform: "translateX(100px)", opacity: 1 }}
            />
          </motion.div>
          <div className=" pt-4 sm:basis-[65%] sm:mx-5 sm:p-0 ">
            <h2
              className="pt-4 font-bold text-stone-700 dark:text-gray-300 text-4xl transition-all hover:scale-[1.01] hover:drop-shadow-lg"
              // style={{ color: { animatedText } }}
            >
              {person.name}
            </h2>
            <motion.p
              className="my-2 text-stone-600 dark:text-gray-400 "
              // style={{ fontSize: `${textSize}rem` }}
            >
              <p className=" text-xl font-semibold  text-amber-200">
                {person.role}
              </p>
              {person.experience}
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  );
}
