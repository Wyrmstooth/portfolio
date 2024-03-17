import Image from "next/image";
import richard from "@/../public/richard.png";

export default function Home() {
  return (
    <main className=" ml-16 mr-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-xl mt-4 lg:mt-0">
        <div className="text-5xl sm:text-4xl lg:text-7xl font-extrabold mb-4 lg:mb-8 flex flex-col">
          <span> Hi! I am</span>
          <span className=" text-2xl bg-blue-600 text-white p-4 rounded-full mt-2 absolute ml-[300px] ">
            Web Developer
          </span>
          <span>Umer Jahangir</span>
        </div>
        <p className="text-base sm:text-lg lg:text-xl mb-4 lg:mb-8">
          I have been developing sites for over <strong> a year</strong> as a
          web developer
        </p>
        <button className="bg-orange-600 text-white w-24 sm:w-32 h-full p-3 sm:p-4 px-4 sm:px-5 font-bold text-base sm:text-lg mb-4 lg:mb-8 hover:bg-orange-700 transition-all">
          Hire me
        </button>
        <span className="ml-2 sm:ml-12 font-semibold">Projects -&gt;</span>
        <div className="mt-6 lg:mt-12">
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold">+84 </p>
          <p className="w-24 sm:w-36 lg:w-48 text-base sm:text-lg lg:text-xl mb-4 lg:mb-8">
            Clients on work worldwide
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mb-16 lg:mb-32">
          <div>
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold">572+</p>
            <p className="w-24 sm:w-36 lg:w-48 text-base sm:text-lg lg:text-xl mb-4 lg:mb-8">
              Projects done
            </p>
          </div>
          <div>
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold">Contact</p>
            <p className="w-24 sm:w-36 lg:w-48 text-base sm:text-lg lg:text-xl mb-4 lg:mb-8">
              wyrmstooth0@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Image
        src={richard}
        width={500}
        height={500}
        alt="richard"
        className="w-full lg:w-1/2"
      />
    </main>
  );
}
