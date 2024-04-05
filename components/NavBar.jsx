import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-full flex items-center px-4 md:px-12">
      {/* LOGO */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-bold flex items-center justify-center"
        >
          <span className="text-white mr-1">Central do</span>
          <span className="w-14 h-8 rounded bg-white text-black flex items-center justify-center">
            Recreio
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
