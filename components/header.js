import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-void grid grid-cols-12">
      <div className="logo-image fixed top-0 left-0 ">
        <Image src="/apple-touch-icon.png" width={115} height={100} />
      </div>

      <div className="col-span-6">
        <div className="px-32 py-3">
          <h1 className="text-fuchsia-800  text-5xl">Yash Kishore Parwani</h1>
          <h3 className="text-fuchsia-700 px-28 text-xl">
            Programmer/Developer
          </h3>
        </div>
      </div>
      <Link href="#">
        <h1 className="text-stark text-center py-5 text-2xl px-auto col-span-2">
          {" "}
          Projects
        </h1>
      </Link>
      <Link href="#">
        <h1 className="text-stark text-center py-5 text-2xl px-auto col-span-2">
          {" "}
          About Me
        </h1>
      </Link>
      <Link href="#">
        <button className="text-stark text-center rounded-md mr-2 bg-jewel py-5 text-2xl px-auto col-span-2">
          {" "}
          Hire Me
        </button>
      </Link>
    </div>
  );
}
