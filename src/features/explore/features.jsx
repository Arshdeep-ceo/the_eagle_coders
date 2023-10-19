const features = [
  {
    name: "Machine learning with python",
  },
  {
    name: "Artificial Intelligence",
  },
  { name: "Data science" },
  {
    name: "Web development",
  },
  {
    name: "Flutter app development",
  },
  {
    name: "MERN stack",
  },
  {
    name: "MEAN stack",
  },
  {
    name: "JAVA fullstack",
  },
  {
    name: "C/C++/python programming",
  },
  {
    name: "Digital marketing",
  },
  {
    name: "PHP",
  },
];

export default function Features() {
  return (
    <div className=" bg-gray-900 rounded-large">
      <div className=" mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className=" pt-36 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            List of courses we provide
          </h2>
          <p className="mt-4 text-gray-400">
            Go through the modules of the courses and choose the course you want
            to learn from the best trainers of our company...
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6  sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="text-sm text-gray-300">{feature.name}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww&w=1000"
            alt=""
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1682002135678-87b8a2fdde50?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww&w=1000"
            alt=""
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000"
            alt=""
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1564865878688-9a244444042a?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&w=1000"
            alt=""
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
