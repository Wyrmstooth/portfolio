import Image from "next/image";
import richard from "@/../public/richard.png";

export default function Home() {
  return (
    <main className="ml-60 inline-flex flex-grow-0 gap-5 items-start">
      <div className=" mt-28">
        <div className="text-7xl font-extrabold shr flex flex-col w-92">
          <span> Hi! I am</span>
          <span className=" text-2xl bg-blue-600 text-white p-5 rounded-full absolute  ml-[300px]">
            Web Developer
          </span>
          <span>Umer Jahangir</span>
        </div>
        <p className=" text-xl mt-14 ">
          I have been developing sites for aver <strong>an year</strong> as a
          web developer
        </p>
        <button className=" bg-orange-600 text-white w-32 h-full p-5 font-bold text-lg mt-10 hover:bg-orange-700 transition-all">
          Hire me
        </button>
        <span className=" ml-12 font-semibold">Projects -&gt;</span>
        <div className=" mt-12">
          <p className=" text-2xl font-bold">+84 </p>
          <p className=" w-36 text-lg">Clients on work worldwide</p>
        </div>
        <div className=" mt-12 flex gap-12 mb-32">
          <div>
            <p className=" text-2xl font-bold">572+</p>
            <p className=" w-36 text-lg">Projects done</p>
          </div>
          <div>
            <p className=" text-2xl font-bold">Contact</p>
            <p className=" w-36 text-lg">wyrmstooth0@gmail.com</p>
          </div>
        </div>
      </div>
      <Image src={richard} width={500} height={500} alt="richard" />
    </main>
  );
}
