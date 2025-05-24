import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="w-full h-screen relative flex justify-center items-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[#E86842] text-5xl font-medium mb-20">Cum asta lucrează?</h1>
        <div className="flex justify-between items-center w-full px-16 lg:px-48 2xl:px-[22vw] text-nowrap">
          <div className="flex flex-col gap-9 text-2xl items-center font-bold">
            <Image 
              src="/envelope.png"
              alt="plic"
              width={100}
              height={100}
            />
            <p>Solicitare de colectare</p>
          </div>
          <svg className="-mt-16" width="42" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333171 8.6665L0.333171 11.3332L16.3332 11.3332L16.3332 13.9998L18.9998 13.9998L18.9998 11.3332L21.6665 11.3332L21.6665 8.6665L18.9998 8.6665L18.9998 5.99984L16.3332 5.99984L16.3332 8.6665L0.333171 8.6665ZM13.6665 3.33317L16.3332 3.33317L16.3332 5.99984L13.6665 5.99984L13.6665 3.33317ZM13.6665 3.33317L10.9998 3.33317L10.9998 0.666503L13.6665 0.666504L13.6665 3.33317ZM13.6665 16.6665L16.3332 16.6665L16.3332 13.9998L13.6665 13.9998L13.6665 16.6665ZM13.6665 16.6665L10.9998 16.6665L10.9998 19.3332L13.6665 19.3332L13.6665 16.6665Z" fill="#202020"/>
          </svg>
          <div className="flex flex-col gap-9 text-2xl items-center font-bold">
            <Image 
              src="/apel.png"
              alt="apel"
              width={70}
              height={70}
            />
            <p>Stabilim ora</p>
          </div>
          <svg className="-mt-16" width="42" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333171 8.6665L0.333171 11.3332L16.3332 11.3332L16.3332 13.9998L18.9998 13.9998L18.9998 11.3332L21.6665 11.3332L21.6665 8.6665L18.9998 8.6665L18.9998 5.99984L16.3332 5.99984L16.3332 8.6665L0.333171 8.6665ZM13.6665 3.33317L16.3332 3.33317L16.3332 5.99984L13.6665 5.99984L13.6665 3.33317ZM13.6665 3.33317L10.9998 3.33317L10.9998 0.666503L13.6665 0.666504L13.6665 3.33317ZM13.6665 16.6665L16.3332 16.6665L16.3332 13.9998L13.6665 13.9998L13.6665 16.6665ZM13.6665 16.6665L10.9998 16.6665L10.9998 19.3332L13.6665 19.3332L13.6665 16.6665Z" fill="#202020"/>
          </svg>
          <div className="flex flex-col gap-9 text-2xl items-center font-bold">
            <Image 
              src="/masina.png"
              alt="mașină"
              width={130}
              height={100}
            />
            <p className="-top-[30px] relative">GUNOIȘTE ia lucrurile</p>
          </div>
        </div>
        <h1 className="text-[#E86842] text-5xl font-medium mt-20">Serviciu de colectare a lucrurilor inutile</h1>
        <p className="text-2xl text-center w-1/2 mt-8">Venim și preluăm orice obiecte sau mobilier de care nu mai ai nevoie – din apartament, garaj sau birou. <br/><br/>Le sortăm cu grijă și le oferim o a <span className="underline">doua viață.</span></p>
        <Link href="#form" className="bg-[#E86842] group hover:bg-[#EB8B6E] relative font-medium text-2xl px-14 py-4 border-2 border-black mt-12 text-[#f1f1f1]">
          <div className="absolute inset-0 bg-[#E86842] group-hover:bg-[#EB8B6E] myshadow z-0"></div>
          <span className="relative z-10">Solicită colectare online</span>
          <svg role="presentation" className="absolute -left-16 -top-5 w-12" style={{ fill: "#202020" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 180"><path d="M54.1 109c-.8 0-1.6-.4-2-1.1-.8-1.1-.5-2.7.6-3.5 1.3-.9 6.8-4 11.6-6.6-15.9-1.3-29.2-8.3-38.5-20.2C8.9 56 8.5 24.1 13.2 3.4c.3-1.3 1.7-2.2 3-1.9 1.3.3 2.2 1.7 1.9 3-4.5 19.6-4.2 49.8 11.6 70 9 11.5 21.5 17.7 37.2 18.4l-1.8-2.3c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.9-1.1-.7-2.6.4-3.5 1.1-.9 2.6-.7 3.5.4 0 0 0 .1.1.1l6.4 7.9c.5.5.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.4 5.6 0 .1.1.1.1.2.1.3.2.5.3.8v.6c0 .2-.1.4-.2.6-.1.1-.1.3-.2.4-.1.2-.3.4-.5.6-.1.1-.3.2-.5.3-.1 0-.1.1-.2.1-1.2.6-16 8.6-18.1 10-.5.5-1 .6-1.5.6z"></path></svg>
        </Link>
      </div>
    </section>
  );
}