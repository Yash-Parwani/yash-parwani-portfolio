import Image from "next/image"
export default function Footer() {
    return (
      <footer className="flex flex-col items-center justify-evenly mt-10" >
          <div className="logo-image  ">
              <Image src="/apple-touch-icon.png" width={115} height={100} />
      </div>
      <h1 className="text-5xl text-stark">Yash Kishore Parwani</h1>
      <p className="container text-xl text-stark text-center mt-10">Feel free to connect</p>
       <div className="socials w-96 flex justify-evenly mt-3">
              <Image src="/linkedin.png" width={64} height={64} />
              <Image src="/github.png" width={64} height={64} />
              <Image src="/gmail.png" width={64} height={64} />

       </div>
       <div className="flex justify-between text-stark text-base w-full" >
        <p>Yash Parwani-India</p>
        <p>yashparwani.com</p>
       </div>

      </footer>
    )
  }
  