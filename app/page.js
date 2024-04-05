import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col md:flex-row px-4 md:px-12 gap-4">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 md:h-full md:w-1/2 relative">
        <Image src="/territorio.jpg" alt="" fill className="object-contain" />
      </div>
      {/* QUADRAS CONTAINER */}
      <div className="h-1/2 md:h-full md:w-1/2 pt-8 md:p-14">
        <h1 className="text-sm font-bold mb-2">QUADRAS DA PRAIA</h1>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            1
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            2
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            3
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            4
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            5
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            6
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            7
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            8
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            9
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            10
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            11
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            12
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            13
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            14
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            15
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            16
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            17
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            18
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            19
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            20
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            21
          </Link>
          <Link
            href="/quadra1"
            className="flex justify-center p-2 w-8 rounded-sm ring-1 ring-black bg-black text-white"
          >
            22
          </Link>
        </div>
      </div>
    </div>
  );
}
