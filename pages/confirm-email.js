import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../reusables/Buttons";
const ConfirmEmail = () => {
  return (
    <div className="pt-[50px] pb-[70px] px-[440px] h-[100vh]">
      <div className="px-[32px] py-[35px] border-[1px] border-black/30 rounded-[10px]">
        <h1 className="text-[20px] text-green font-[500] mb-[15px]">
          APPSTEST
        </h1>
        <div className="relative w-[430px] h-[2px] ">
          <Image src="/images/Line 17.svg" layout="fill" />
        </div>
        <h2 className="mt-[18px] text-[16px] text-black/70">Hi Maureen!</h2>
        <p className="mt-[18px] text-black/70 text-[14px] font-[500]">
          Thanks for signing up with AppsTest! Before you get started with
          AppsTest, we need you to confirm your email address.
        </p>
        <p className="mt-[18px] text-black/70 text-[14px]  font-[500]">
          Please click the button below to complete your signup.
        </p>

        <PrimaryButton
          className="block text-center w-[95%] py-[12px] mt-[30px] text-[15px]"
          text="Confirm Email Address"
        />

        <p className="mt-[30px] mb-[28px] text-black/70 text-[14px] font-[500]">
          If you have any trouble clicking the button above, please copy and
          paste the URL below into your web browser.
        </p>
        <Link
          href="/"
          className=""
        >
          <a href="" className=" text-blue text-[14px] underline underline-offset-4 font-[500] cursor-pointer">
            https://dashboard.appstest.com/#/confirm-email/
            d5c0633e331b570c8b263e96b974a50ff13322d7
          </a>
        </Link>
      </div>
      <p className="text-center text-[12px] mt-[14px] text-black/90">
        &copy; {}AppsTest Ltd 2021 <br />
        Manual Testing Platfrom for Africa
      </p>
    </div>
  );
};

export default ConfirmEmail;
