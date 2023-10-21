import { List } from "@material-tailwind/react";

export default function Fellowship() {
  return (
    <div>
      <div className="items-center overflow-hidden p-4 m-4 rounded-xl text-center  bg-slate-800">
        <h2 className=" shadow-2xl text-3xl sm:text-[3rem] font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-600 to bg-amber-200">
          CODERIPPLEX FELLOWSHIP
        </h2>
        <div className="m-8 dark:bg-slate-950 rounded-xl ">
          <p className=" dark:text-amber-600 text-2xl  font-bold p-8">
            Full - Time: Duration: 6 Months{" "}
          </p>
          <div className="  flex lg:flex-row flex-col p-6">
            <div className=" p-6  border border-gray-800 rounded-lg shadow  dark:border-gray-700 lg:flex-grow">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Time commitment-
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                6 Months<br></br>(48+ hours/week )
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Eligibility-
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Interested candiate from any background
              </p>
            </div>
            <div className=" p-6 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Fees-
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                We will consider based on the candidate{"'s"}
                commitment and dedication towards the fellowship.
              </p>
            </div>
          </div>
          <p className="text-gray-400 pl-2 pr-2">
            As long as you have the passion to learn, this innovative program
            will ensure that you{"’re"} equipped to kickstart your learning
            career in development.
          </p>
          <p className="font-bold text-gray-200 text-left pl-8 pb-12 pt-4">
            Who is it for-
            <List className="text-gray-400">
              <p>
                {" "}
                This program is for students looking to gain a foothold in the
                Data Science Industry.
              </p>
              <p>
                Readily available to invest your hard work, dedication,
                sincerity, and time.
              </p>
            </List>
          </p>
        </div>
        <div className="m-8 dark:bg-slate-950 rounded-xl ">
          <p className=" dark:text-amber-600 text-2xl font-bold p-8">
            Part - Time: Duration: 12 Months{" "}
          </p>
          <div className=" flex lg:flex-row flex-col  p-6 ">
            <div className=" p-6  border border-gray-800 rounded-lg shadow  dark:border-gray-700 lg:flex-grow">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Time commitment-
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                12 Months(12-14 hours/week )
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Eligibility-
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Working professionals/ candidates (First year- Final year) who
                genuinely want to learn the future tech.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Fees-
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                We will consider based on the candidate{"'s"}
                commitment and dedication towards the fellowship.
              </p>
            </div>
          </div>
          <p className="text-gray-400 pl-6">
            As long as you have the passion to learn, this innovative program
            will ensure that you{"’re"} equipped to kickstart your learning
            career in development.
          </p>
          <p className="font-bold text-gray-200 text-left pl-8 pb-12 pt-4">
            Who is it for-
            <List className="text-gray-400">
              <p>
                While this program is primarily geared towards working
                professionals, students with valid schedule constraints are also
                welcome to apply.
              </p>
              <p>
                Enthusiasm and willingness to learn, challenge and practice.
                <br></br>
                Students / Professionals who want to learn at their own pace.
              </p>
            </List>
          </p>
        </div>
      </div>
    </div>
  );
}
