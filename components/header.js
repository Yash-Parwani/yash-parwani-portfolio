import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(props) {
  const router = useRouter();

  return (
    <div className="bg-void grid grid-cols-12">
      <div className="logo-image fixed top-0 left-0 ">
        <Link href="/">
          <button>
            <Image src="/apple-touch-icon.png" width={115} height={100} />
          </button>
        </Link>
      </div>

      <div className="col-span-6">
        <div className="px-32 py-3">
          <Link href="/">
            <button>
              <h1 className="text-fuchsia-800  text-5xl">
                Yash Kishore Parwani
              </h1>
              <h3 className="text-fuchsia-700 px-28 text-xl">
                Programmer/Developer
              </h3>
            </button>
          </Link>
        </div>
      </div>
      {router.pathname === "/aboutme" && (
        <div className="col-span-2 flex justify-center items-center">
          <AnchorLink href="#skill-section ">
            <button className="text-stark text-center py-5 text-2xl w-full ">
              {" "}
              My Skills
            </button>
          </AnchorLink>
        </div>
      )}
      {router.pathname === "/" && (
        <Link href="#projects">
          <button className="text-stark text-center py-5 text-2xl px-auto col-span-2">
            {" "}
            Projects
          </button>
        </Link>
      )}
      {router.pathname === "/contactme" && (
        <Link href="/">
          <button className="text-stark text-center py-5 text-2xl px-auto col-span-2">
            {" "}
            Home
          </button>
        </Link>
      )}

      <Link href="/aboutme">
        <button className="text-stark text-center py-5 text-2xl px-auto col-span-2">
          About Me
        </button>
      </Link>
      <Link href="/contactme">
        <button className="text-stark text-center rounded-md mr-2 bg-jewel py-5 text-2xl px-auto col-span-2">
          {" "}
          Hire Me
        </button>
      </Link>
    </div>
  );
}
