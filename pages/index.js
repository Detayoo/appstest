import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import AboutUs from "../components/LandingPage/AboutUs";
import HowToUse from "../components/LandingPage/HowToUse";
import Intro from "../components/LandingPage/Intro";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <div className=" py-[13px]  bg-lightestgray">
        <p className="font-[700] text-center text-[18px] mb-[30px]">
          Trusted by:
        </p>
        <div className="flex px-[20px] justify-evenly">
          <div className="relative w-[126px] h-[42px]">
            <Image src="/images/Aella.svg" layout="fill" objectFit="cover" />
          </div>

          <div className="relative w-[146px] h-[42px]">
            <Image src="/images/Bleyt.svg" layout="fill" objectFit="cover" />
          </div>

          <div className="relative w-[142px] h-[42px]">
            <Image src="/images/Inlaks.png" layout="fill" objectFit="cover" />
          </div>

          <div className="relative w-[216px] h-[40px]">
            <Image src="/images/Providus.svg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <HowToUse />
      <AboutUs />
      <Footer />
    </div>
  );
}
