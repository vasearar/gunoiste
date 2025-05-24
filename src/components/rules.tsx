 import Checkmark from "@/components/checkmark";
 import Cross from "@/components/cross";
 export default function FirstSection() {
   return (
    <section className="w-1/2 relative mx-auto flex flex-col items-center mb-24">
      <div className="relative flex flex-col items-center w-full">
        <h1 className="text-[#E86842] text-5xl font-medium mb-16">Ce noi primim</h1>
        <div className="flex justify-between w-full">
          <ul className="[&>li]:flex [&>li]:gap-5 [&>li]:text-lg [&>li]:mb-6">
            <li>
              <Checkmark />
              Haine în stare bună pentru purtat
            </li>
            <li>
              <Checkmark />
              Cărți
            </li>
            <li>
              <Checkmark />
              Bijuterii, genți, accesorii
            </li>
            <li>
              <Checkmark />
              Mobilă asamblată
            </li>
          </ul>
          <ul className="[&>li]:flex [&>li]:gap-4 [&>li]:text-lg [&>li]:mb-6">
            <li>
              <Checkmark />
              Electrocasnice în orice stare
            </li>
            <li>
              <Checkmark />
              Veselă
            </li>
            <li>
              <Checkmark />
              Decorațiuni, obiecte de interior și artă
            </li>
            <li>
              <Checkmark />
              Obiecte de uz zilnic
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full">
        <h1 className="text-[#E86842] text-5xl font-medium mt-24 mb-16">Ce noi nu primim</h1>
        <div className="flex justify-between w-full">
          <ul className="[&>li]:flex [&>li]:gap-4 [&>li]:text-lg [&>li]:mb-6 [&>li]:max-w-[371px]">
            <li>
              <Cross />
              Îmbrăcăminte în stare proastă, cu pete sau miros
            </li>
            <li>
              <Cross />
              Mobilier moale (canapele, paturi, fotolii)
            </li>
            <li>
              <Cross />
              Medicamente
            </li>
          </ul>
          <ul className="[&>li]:flex [&>li]:gap-4 [&>li]:text-lg [&>li]:mb-6 [&>li]:max-w-[371px]">
            <li>
              <Cross />
              Lenjerie intimă <br/><br/>
            </li>
            <li>
              <Cross />
              Echipamente electrocasnice mari (frigidere etc.)
            </li>
            <li>
              <Cross />
              Obiecte cu termen de valabilitate sau care conțin lichide
            </li>
          </ul>
        </div>
      </div>
    </section>
   );
 }