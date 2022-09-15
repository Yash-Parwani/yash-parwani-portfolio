import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/footer";

export default function ContactMe() {
  return (
    <div className="bg-void grid grid-cols-12 max-h-full h-full">
      <Head>
        <title>Yash-Parwani/Contact-Me</title>
        <meta name="description" content="Contact Yash Kishore Parwani" />
        <link rel="icon" href="/android-chrome.png" />
      </Head>
      {/* TODO add lottie rocket animatiion after successfull submission */}
      {/* Contact me section */}
      <aside className="col-span-1"></aside>
      <section className="My skills text-stark h-fit col-span-10 flex flex-col items-center  ">
        <h1 className="  h-fit text-6xl text-center w-max ">Contact Me</h1>
        <h4 className="text-4xl">Get in Touch</h4>
        <div className="flex  justify-around mt-10 w-full">
          {/* left side */}
          <div className="contact-form ">
            <h3 className="text-3xl mb-5">Contact</h3>
            <form>
              <div className="flex flex-col mb-10">
                <label htmlFor="name" className="text-xl">
                  Name{" "}
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border bg-void  rounded-md w-96 h-10 mt-4"
                />
              </div>
              <div className="flex flex-col  mb-10">
                <label htmlFor="email" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-void border rounded-md h-10  mt-4"
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="bg-void border rounded-sm h-24 mt-4"
                />
              </div>
            </form>
          </div>
          {/* right side */}
          <div className="Details">
            <h3 className="text-3xl mb-7">Details</h3>
            <div className="mb-4">
              <h4 className="text-xl mb-3">Contact Information</h4>
              <p className="flex justify-center">
                <span className="mr-3">
                  <Image src="/gmail.png" width="32" height="32" />
                </span>{" "}
                parwaniyash5610@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-3">Socials</h4>
              <Link href="https://www.linkedin.com/in/yash-parwani-5610/">
                <button className="flex mb-4">
                  <Image src="/linkedin.png" width="32" height="32" />

                  <p className="ml-2">Linked-In</p>
                </button>
              </Link>
              <Link href="https://www.instagram.com/parwani583/">
                <a target="_blank"  rel="noopener noreferrer">
                  <button className="flex mb-4">
                    <Image src="/instagram.png" width="32" height="32" />

                    <p className="ml-2">parwani583</p>
                  </button>

                </a>
              </Link>

              <Link href="https://github.com/Yash-Parwani">
                <button className="flex ">
                  <Image src="/github.png" width="32" height="32" />

                  <p className="ml-2">Github</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <aside className="col-span-1"></aside>

      {/* footer */}
      <div className="col-span-12 h-fit ">
        <Footer />
      </div>
    </div>
  );
}
