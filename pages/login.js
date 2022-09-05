import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";

import LoginSidebar from "../components/LoginPage/Login-Sidebar";
import { PrimaryButton } from "../reusables/Buttons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const forgotPassword = () => {
    Router.push("forgot-password");
  };

  const formik = useFormik({
    initialValues: {
      workEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      workEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { workEmail, password } = formik.values;
  return (
    <div className="w-full h-screen flex ">
      <LoginSidebar />
      <div className="w-[56.2%] py-[73px] px-[102px]">
        <div className="relative w-[22px] h-[19px]">
          <Image src="/icons/BackButton.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex items-center gap-[12px] mt-[45px]">
          <h1 className=" text-[23px] font-[700]">Welcome back</h1>
          <div className="relative w-[32px] h-[32px]">
            <Image src="/icons/Hand.svg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <p className="mt-[8px] text-black/70 font-[500] text-[13.5px]">
          We’re excited to have you back.{" "}
        </p>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-[30px]">
            <label className="text-[13px]" htmlFor="">
              Work Email
            </label>
            <div
              className={`bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px] ${
                workEmail ? "border-green" : "border-white"
              } `}
            >
              <div className="relative w-[20px] h-[15px] m-[2px]">
                <Image
                  src={
                    workEmail
                      ? "/icons/Active Message.svg"
                      : "/icons/Message.svg"
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[1px] h-[33px] mx-[15px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <input
                className="text-[13px] bg-inputGray py-[12px] pl-[10px] font-[500] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%]"
                type="text"
                placeholder="Enter your work email address"
                name="workEmail"
                {...formik.getFieldProps("workEmail")}
              />
              {formik.touched.workEmail
                ? console.log("touched")
                : console.log("untouched")}
            </div>
          </div>

          <div className="mt-[15px]">
            <label className="text-[13px]" htmlFor="">
              Password
            </label>
            <div
              className={`bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px]  ${
                password ? "border-green" : "border-white"
              } `}
            >
              <div className="relative w-[22px] h-[20px] m-[2px]">
                <Image src="/icons/Key.svg" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[1px] h-[33px] mx-[13px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <input
                className="text-[13px] bg-inputGray py-[12px] pl-[10px] font-[500] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%]"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                {...formik.getFieldProps("password")}
              />
              <p
                onClick={togglePassword}
                className="text-black/60 text-[14px] font-[500] cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>
          </div>
          <p
            onClick={forgotPassword}
            className="text-right text-[13px] text-black/90 mt-[20px] font-[500] cursor-pointer"
          >
            Forgot Password?
          </p>
          <PrimaryButton
            text="Sign in"
            className="py-[12px] px-[90px] mt-[11px]"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
