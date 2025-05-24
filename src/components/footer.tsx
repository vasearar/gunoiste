import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#202020] flex justify-between px-[15.3vw] py-8 mt-14">
      <div className="flex flex-col">
        <Image 
          src="/thrift_for_black.png"
          alt="Gunoiște logo"
          width={64}
          height={64}
        />
        <p className="text-white mt-2">Gunoiște oferă obiectelor viață nouă,<br/> reducând poluarea prin reciclare responsabilă.<br/><br/><span className="text-sm">© Gunoiște 2025</span></p>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-[#E86842] font-['Unbounded']">Menu</h3>
          <ul className="text-[#f1f1f1] mt-2.5">
            <li><Link href="#howitworks">Cum asta lucrează?</Link></li>
            <li><Link href="#rules">Ce primim/nu primim?</Link></li>
            <li><Link href="#aboutUs">Despre noi</Link></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-[#E86842] font-['Unbounded']">Contacte</h3>
           <ul className="text-[#f1f1f1] mt-2.5">
            <li>+373 (67) 206 822</li>
            <li>gunoiste_eco@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}