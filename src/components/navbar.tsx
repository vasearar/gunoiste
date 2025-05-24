import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#f1f1f1] py-[2rem] px-[15.4vw] relative">
      <div className="flex items-center gap-2">
        <Image 
          src="/thrift.png"
          alt="Gunoiște logo"
          width={90}
          height={90}
        />
        <h1 className="text-xl font-bold font-['Unbounded'] mt-1">Gunoiște</h1>
      </div>
      <ul className="flex items-center gap-12 font-bold text-[18px] outline-none">
        <li className="hover:text-[#545454]"><Link href="/">Despre</Link></li>
        <li className="hover:text-[#545454]"><Link href="/">Solicită colectare</Link></li>
        <li className="hover:text-[#545454]"><Link href="/">Contacte</Link></li>
      </ul>
      <div className="bg-[#E86842] cursor-pointer hover:bg-[#EB8B6E] text-[#f1f1f1] myshadow border-2 border-[#202020] px-4 py-2.5 font-bold">
        <Link href="tel:+37367206822">+373 (67) 206 822</Link>
      </div>
    </nav>
  );
}