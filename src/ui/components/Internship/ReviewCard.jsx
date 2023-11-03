const reviews = [
  {
    name: "Jasleen Kaur",
    role: "Client of AstraBytes",
    comment:
      "We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Mr. Arshdeep Singh and his development team. We look forward to working with them in future projects. I wanted to take a moment to thank you for the services your team has provided.",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Rahul Kumar",
    comment:
      "Choosing AstraBytes was the best decision for our digital initiatives. Their tailoed solutions and flexibility have exceeded our expectations. The company's internship program is top-notch. I was involved in meaningful projects, and the guidance and support I received from my mentors were invaluable. The experience significantly enhanced my skills and knowledge.",
    imgUrl: "/images/team/t1.webp",
    role: "Student of AstraBytes",
  },
  {
    name: "Hamid Sharma",
    comment:
      "AstraBytes is a standout digital agency in our area, offering personalize attention and exceptional expertise. They help me create a fantastic platforms. AstraBytes is a good choice for student interns. The work was engaging, and the company offered opportunities for growth. I learned a lot during my time there, and the mentors were supportive. However, the workload can be intense, so be prepared for some long hours during busy periods.",
    imgUrl: "/images/team/t2.webp",
    role: "Student of AstraBytes",
  },
  {
    name: "Simranjeet Kaur",
    comment:
      "I am impressed by AstraBytes dedication, creativity and attention to detail. They deliver high-quality solutions with speed and agility. On the positive side, the company did provide flexible working hours, which was helpful for balancing my studies.",
    imgUrl: "/images/team/t3.webp",
    role: "Student of AstraBytes",
  },
  {
    name: "Jasvinder Singh",
    comment:
      "I cannot say enough good things about my experience at AstraBytes. The company's internship program is top-notch. I received excellent mentorship, participated in innovative projects, and gained valuable industry insights. The work culture is also fantastic, making it a great place for students to kickstart their careers.",
    imgUrl: "/images/team/t4.webp",
    role: "Student of AstraBytes",
  },
];
export default function ReviewCard() {
  return (
    <>
      {reviews.map((person, index) => (
        <div key={person.name} className=" bg-black/20 rounded-3xl ">
          <blockquote
            key={person.name}
            className=" p-4 mt-14 text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9"
          >
            <figcaption className="mt-4">
              <img
                className="mx-auto h-16 w-16 rounded-full"
                src={person.imgUrl}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className=" mb-4 font-semibold text-white">
                  {person.name}
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
                <div className="text-white mb-4">{person.role}</div>
              </div>
            </figcaption>
            <p className="pb-4 text-sm">{person.comment}</p>
          </blockquote>
        </div>
      ))}
    </>
  );
}
