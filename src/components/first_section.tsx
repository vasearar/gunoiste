import Image from "next/image";

export default function FirstSection() {
  return (
    <section className="w-full lg:h-[80vh] relative flex justify-center items-center">
      <Image
        src="/background1.png"
        alt="Background Gunoiște"
        width={1920}
        height={1080}
        className="w-full mx-auto h-auto lg:absolute lg:inset-0 lg:h-full lg:w-auto
             object-contain object-center"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30"></div>
      <div className="cursor-pointer w-2.5 h-2.5 arrow-parrent lg:block hidden">
        <div className="arrow arrow-first"></div>
        <div className="arrow arrow-second"></div>
      </div>
    </section>
  );
}