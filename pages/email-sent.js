import Router from "next/router";

import LoginSidebar from "../components/LoginPage/Login-Sidebar";
import { PrimaryButton } from "../reusables/Buttons";

const EmailSent = () => {
  return (
    <div className="w-full h-screen flex">
      <LoginSidebar />
      <div className="w-[40%] py-[120px] px-[100px]">
        <h1 className="text-[22px] text-green font-[500]">APPSTEST</h1>
        <h2 className="text-[21px] mt-[21px]">
          We’ve just sent you an email to <br /> reset your password
        </h2>
        <PrimaryButton
          text="Open email app"
          className="mt-[46px] py-[12px] px-[100px]"
        />
        <p className="mt-[35px] text-center text-[15px] font-[600] text-black/70">
          Skip, I'll confirm later
        </p>
        <p className="mt-[29px] text-[14px] text-center text-black/60 font-[600]">
          Didn’t receive the email? Check your spam <br /> folder or{" "}
          <span
            className="text-green/90 underline decoration-green/90 underline-offset-2"
            onClick={() => Router.push("/forgot-password")}
          >
            try another email address
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmailSent;
