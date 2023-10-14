// import AppBar from "../../ui/components/home/Appbar";
import { Image } from "@nextui-org/react";
import Main from "../../ui/components/home/Main";

function Home() {
  // const gradient = ""
  return (
    <>
      <Main />
      <div className=" mt-[100vh] z-10 relative  bg-gradient-to-tr from-blue-100 to-pink-200 rounded-lg drop-shadow-2xl flex flex-row basis-full">
        {/* <img
          src="/images/raman.jpg"
          alt=""
          className="w-[50%] h-[40%] m-3 rounded-2xl transform transition duration-[10000] hover:scale-105 overflow-hidden self-start bg-clip-border sm:w-[40%]"
        /> */}
        <Image
          isBlurred
          width={240}
          src="/images/raman.jpg"
          alt="NextUI Album Cover"
          className=" p-16 hover:scale-105 "
        />

        {/* Paragraph */}
        <p className="p-10 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          mollitia autem, nostrum error repudiandae praesentium hic quia
          voluptatum ratione itaque, quibusdam quae provident atque fuga neque
          culpa explicabo quo! Cupiditate. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Commodi mollitia autem, nostrum error
          repudiandae praesentium hic quia voluptatum ratione itaque, quibusdam
          quae provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudirelativandae praesentium hic quia
          voluptatum ratione itaque, quibusdam quae provident atque fuga neque
          culpa explicabo quo! Cupiditate. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Commodi mollitia autem, nostrum error
          repudiandae praesentium hic quia voluptatum ratione itaque, quibusdam
          quae provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia
          autem, nostrum error repudiandae praesentium hic quia voluptatum
          ratione itaque, quibusdam quae provident atque fuga neque culpa
          explicabo quo! Cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Commodi mollitia autem, nostrum error repudiandae
          praesentium hic quia voluptatum ratione itaque, quibusdam quae
          provident atque fuga neque culpa explicabo quo! Cupiditate.
        </p>
      </div>
    </>
  );
}

export default Home;
