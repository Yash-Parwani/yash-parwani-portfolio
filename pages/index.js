import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <div className="bg-void grid grid-cols-12  ">
      <Head>
        <title>Yash-Parwani</title>
        <meta name="description" content="Yash Parwani Portfolio" />
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <aside className="col-span-1"></aside>
      <section className="hero-section h-screen col-span-11 grid grid-cols-3 ">
        <article className="col-span-1 h-fit text-stark">
          <h2 className="">
            A Developer
          </h2>
          <p className=" max-w-5xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </article>
        <aside className="col-span-2  flex justify-end h-fit">
          <div className="">
              <Image src="/Jason-2fuchsia-1.png" width={760} height={680} />

          </div>
        </aside>
      </section>
      <section className="projects"></section>
    </div>
  );
}
