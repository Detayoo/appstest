import Image from "next/image";
import { useState } from "react";
import LoginSidebar from "../components/LoginPage/Login-Sidebar";
import { PrimaryButton } from "../reusables/Buttons";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Main } from "next/document";

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("You have to fill this in"),
      confirmPassword: Yup.string()
        .min(8, "Must be up to characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);

  return (
    <div className="w-full h-full flex">
      <LoginSidebar />
      <div className="w-[56.2%] pt-[52px] pb-[25px] px-[100px]">
        <div className="relative w-[22px] h-[20px] ">
          <Image src="/icons/BackButton.svg" layout="fill" />
        </div>

        <div className="flex items-center gap-[12px] mt-[26px]">
          <h1 className=" text-[22px] font-[700]">Reset Password</h1>
          <div className="relative w-[26px] h-[36px]">
            <Image src="/icons/Unlock.svg" layout="fill" />
          </div>
        </div>

        <p className="text-[14px] text-black/60 mt-[5px] font-[500]">
          Enter your new password and confirm your password.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-[22px]">
            <label className="text-[13px]" htmlFor="newPassword">
              New Password
            </label>
            <div
              className={`bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px] ${
                formik.newPassword ? "border-green" : "border-white"
              } `}
            >
              <div className="relative w-[21px] h-[18px] m-[2px]">
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
                className="text-[13px] bg-inputGray py-[12px] pl-[14px] font-[500] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%] tracking-[1px]"
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                placeholder="Enter your password"
                name="newPassword"
                {...formik.getFieldProps("newPassword")}
              />

              <p
                onClick={toggleNewPassword}
                className="text-black/60 text-[14px] font-[500] cursor-pointer"
              >
                {showNewPassword ? "Hide" : "Show"}
              </p>
            </div>
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <div>{formik.errors.newPassword}</div>
            ) : null}
            <p className="text-[12px] text-black/60 mt-[7px]">
              Must be at least 8 characters
            </p>
          </div>

          <div className="mt-[21px]">
            <label className="text-[13px]" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div
              className={`bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px] ${
                formik.confirmPassword ? "border-green" : "border-white"
              } `}
            >
              <div className="relative w-[22px] h-[18px] m-[2px]">
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
                className="text-[13px] bg-inputGray py-[12px] pl-[14px] font-[500] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%] tracking-[1px]"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="confirmPassword"
                id="confirmPassword"
                {...formik.getFieldProps("confirmPassword")}
              />
              <p
                onClick={toggleConfirmPassword}
                className="text-black/60 text-[14px] font-[500] cursor-pointer"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </p>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="text-pinkBg">{formik.errors.confirmPassword}</p>
            ) : null}
            <p className="text-[12px] text-black/60 mt-[7px]">
              Both passwords must match
            </p>
          </div>
          <PrimaryButton
            text="Sign in"
            className="py-[12px] px-[90px] mt-[30px]"
          />
        </form>
        <p className="text-[15px] mt-[32px] mb-[20px]">
          Password Requirements:
        </p>
        <div className="flex items-center gap-[20px]">
          <div className="relative w-[20px] h-[20px] ">
            <Image src="/icons/Gray-Mark.svg" layout="fill" />
          </div>
          <p className="text-[14px] text-black/80">
            Must contain a lowercase letter
          </p>
        </div>
        <div className="flex items-center gap-[20px] mt-[9px]">
          <div className="relative w-[20px] h-[20px] ">
            <Image src="/icons/Gray-Mark.svg" layout="fill" />
          </div>
          <p className="text-[14px] text-black/80">
            Must contain an uppercase letter
          </p>
        </div>
        <div className="flex items-center gap-[20px] mt-[9px]">
          <div className="relative w-[20px] h-[20px] ">
            <Image src="/icons/Gray-Mark.svg" layout="fill" />
          </div>
          <p className="text-[14px] text-black/80">Must contain a number</p>
        </div>
        <div className="flex items-center gap-[20px] mt-[9px]">
          <div className="relative w-[20px] h-[20px] ">
            <Image src="/icons/Gray-Mark.svg" layout="fill" />
          </div>
          <p className="text-[14px] text-black/80">
            Must contain a non-alphanumeric character
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
