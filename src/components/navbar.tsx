'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <nav className="flex items-center justify-between bg-[#f1f1f1] py-[2rem] px-[8vw] xl:px-[15.4vw] relative z-30">
      <div className="flex items-center gap-2">
        <Image src="/thrift.png" alt="Gunoiște logo" width={90} height={90} />
        <h1 className="text-xl font-bold font-['Unbounded'] mt-1">Gunoiște</h1>
      </div>

      <ul className="hidden lg:flex items-center gap-9 xl:gap-12 font-bold text-[18px]">
        <li className="hover:text-[#545454]"><Link href="#aboutUs">Despre</Link></li>
        <li className="hover:text-[#545454]"><Link href="#form">Solicită colectare</Link></li>
        <li className="hover:text-[#545454]"><Link href="#footer">Contacte</Link></li>
      </ul>

      <div className="hidden lg:flex">
        <Link href="tel:+37367206822" className="bg-[#E86842] hover:bg-[#EB8B6E] text-[#f1f1f1] myshadow border-2 border-[#202020] px-4 py-2.5 font-bold">
          +373 (67) 206 822
        </Link>
      </div>

      <button aria-label="Toggle menu" onClick={toggle} className={`flex flex-col gap-1 burger ${open ? "burger-active" : ""} lg:hidden`}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`mobile-menu ${open ? "mobile-menu--show" : ""}`}>
        <li><Link href="#howitworks" onClick={toggle}>Cum asta lucrează</Link></li>
        <li><Link href="#rules" onClick={toggle}>Reguli</Link></li>
        <li><Link href="#aboutUs" onClick={toggle}>Despre</Link></li>
        <li><Link href="#form" onClick={toggle}>Solicită colectare</Link></li>
        <li><Link href="#footer" onClick={toggle}>Contacte</Link></li>
        <li>
          <Link href="tel:+37367206822" className="bg-[#E86842] hover:bg-[#EB8B6E] text-[#f1f1f1] myshadow border-2 border-[#202020] px-6 py-3 font-bold" onClick={toggle}>
            +373 (67) 206 822
          </Link>
        </li>
      </ul>
    </nav>
  );
}