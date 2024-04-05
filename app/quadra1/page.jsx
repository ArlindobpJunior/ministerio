import Image from "next/image";

const Quadra1 = () => {
  return (
    <div className="h-full flex flex-col md:flex-row px-4 md:px-12 gap-4">
      {/* IMAGE CONTAINER */}
      <div className="h-1/3 md:h-full md:w-1/3 relative">
        <Image src="/quadra1.jpg" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center h-2/3 md:h-full md:w-2/3 pt-8 md:p-14 gap-4">
        <div className="flex flex-col w-72 md:w-80 h-20 ring-1 ring-black p-2">
          <h1 className="font-semibold">Restaurante Àdorê - Recreio</h1>
          <h2 className="text-sm">Av. Lúcio Costa, 17.700 loja D, E</h2>
          <a
            href="tel:30951000"
            className="text-sm font-semibold text-blue-600"
          >
            3095-1000
          </a>
        </div>
        <div className="flex flex-col w-72 md:w-80 h-20 ring-1 ring-black p-2">
          <h1 className="font-semibold">Vista Mar Eventos</h1>
          <h2 className="text-sm">Av. Lúcio Costa, 17.700</h2>
          <a
            href="tel:994122176"
            className="text-sm font-semibold text-blue-600"
          >
            99412-2176
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quadra1;
