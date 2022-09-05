import { OtherButton, PrimaryButton } from "../../reusables/Buttons";
import Image from "next/image";
import { useState } from "react";
import Router from "next/router";

const Intro = () => {
  const [hoverAccess, setHoverAccess] = useState(false);
  const [hoverQuote, setHoverQuote] = useState(false);
  const access = () => {
    Router.push("/request-access");
  };
  const quote = () => {
    Router.push("/request-quote");
  };
  return (
    <div className="h-[580px] px-[310px] py-[100px] text-center">
      <p className="text-green rounded-[5px] font-[700] mb-[40px] mt-[-15px] ">
        GREAT SOFTWARE REQUIRES GREAT TESTING
      </p>
      <h2 className="font[900] text-[44px] tracking-tight leading-[3.5rem] mb-[45px] ">
        Find Profit Zapping Bugs Before Your Customers Do!
      </h2>
      <p className="text-black/70 font-[500] mb-[48px]">
        As you are scaling and building fast, it becomes super easy to overlook
        critical issues that may affect your bottom line. Appstest act as a
        cover to ensure that you ship faster to the market while guaranteeing
        product quality that your developers and internal QA may overlook.
      </p>
      <div className="flex justify-center items-center font-[600]">
        <div
          onClick={access}
          onMouseEnter={() => setHoverAccess(true)}
          onMouseLeave={() => setHoverAccess(false)}
          className="flex items-center gap-[5px] bg-green text-white rounded-[5px] mr-[20px] py-[12px] px-[26px] border-white border-[1px] hover:bg-white hover:text-green hover:border-green cursor-pointer"
        >
          <p>Request Access</p>
          <div className="relative w-[12px] h-[12px]">
            <Image
              src={
                hoverAccess ? "/icons/GreenArrow.png" : "/icons/WhiteArrow.png"
              }
              layout="fill"
            />
          </div>
        </div>
        <div
          onClick={quote}
          onMouseEnter={() => setHoverQuote(true)}
          onMouseLeave={() => setHoverQuote(false)}
          className="flex items-center gap-[5px] bg-gray rounded-[5px] py-[12px] px-[26px] border-white border-[1px] hover:bg-black hover:text-white cursor-pointer"
        >
          <p>Request Quote</p>
          <div className="relative w-[12px] h-[12px]">
            <Image
              src={
                hoverQuote ? "/icons/WhiteArrow.png" : "/icons/BlackArrow.png"
              }
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
