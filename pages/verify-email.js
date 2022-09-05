import Router from "next/router";
import { PrimaryButton } from "../reusables/Buttons";
const VerifyEmail = () => {
  const goBack = () => {
    Router.push("/request-quote");
  };
  return (
    <div className="w-full h-screen verify__email flex flex-col justify-center items-center text-center">
      <div className="bg-white h-[inherit] w-[40%] flex flex-col justify-center my-auto items-center">
        <p className="text-green text-[22px] font-[500] mt-[-10px]">APPSTEST</p>
        <h1 className="text-[24px] font-[900] mt-[50px] tracking-tighter">
          Verify your email address
        </h1>
        <p className="text-black/70 text-[15px] mt-[23px] mb-[24px] leading-relaxed">
          We have sent a unique link to your email address to help you <br />{" "}
          proceed in exploring AppTest.
        </p>
        <PrimaryButton
          text="Open email app"
          className="py-[12px] px-[100px] self-center"
        />
        <p className="font-[600] text-[16px] text-black/70 mt-[30px]">
          Skip, I’ll confirm later
        </p>
        <p className="text-black/70 font-[600] text-[13px] mt-[30px]">
          Didn’t receive the email? Check your spam <br /> folder or{" "}
          <span
            onClick={goBack}
            className="text-green underline decoration-green underline-offset-2 cursor-pointer"
          >
            try another email address
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
