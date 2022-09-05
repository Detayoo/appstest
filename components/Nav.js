import Image from "next/image";
import Router from "next/router";

import { PrimaryButton } from "../reusables/Buttons";

const Nav = () => {
  return (
    <div className="flex z-10 justify-between items-center px-[110px] h-[70px] shadow-sm sticky top-0 left-0 navbar">
      <div className="flex items-center justify-between gap-[10px]">
        <div className=" relative w-[29px] h-[32px]">
          <Image src="/icons/LogoIcon.svg" layout="fill" />
        </div>
        <div className="relative w-[99px] h-[13px]">
          <Image src="/icons/Logo.png" layout="fill" />
        </div>
      </div>

      <div>
        <PrimaryButton
          text="Login"
          className="py-[12px] px-[30px]"
          onClick={() => Router.push("/request-access")}
        />
      </div>
    </div>
  );
};

export default Nav;
