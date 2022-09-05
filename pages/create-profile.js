import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import ProfileSidebar from "../components/ProfilePage/ProfileSidebar";
import { PrimaryButton } from "../reusables/Buttons";

const CreateProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      workEmail: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("You have to fill this in"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);

  return (
    <div className="flex w-screen h-screen ">
      <ProfileSidebar
        Text="Setup a Profile"
        subText="Please, provide every necessary credentials so as to
        setup your account."
      />
      <div className=" flex-1 py-[110px] px-[100px]">
        <h1 className="text-[24px]">Setup your profile</h1>
        <p className="text-black/70 text-[14px] mt-[4px] font-[500]">
          Please fill in your details to create your profile
        </p>

        <form className="mt-[22px] onSubmit={formik.handleSubmit}">
          <div className="flex gap-[30px]">
            <div className="w-[50%]">
              <label className="text-[14px]" htmlFor="">
                First Name
              </label>
              <br />
              <div className="bg-inputGray flex items-center px-[20px] mt-[10px] rounded-[5px] border-b-[1px] border-white">
                <div className="relative w-[25px] h-[25px]">
                  <Image
                    src="/icons/Profile.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-[1px] h-[33px] mx-[15px]">
                  <Image src="/icons/ThinLine.svg" layout="fill" />
                </div>
                <input
                  className="text-[14px] bg-inputGray py-[12px] placeholder:text-black/50 placeholder:font-[500] w-[100%]"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
              </div>
            </div>

            <div className="w-[50%]">
              <label className="text-[14px]" htmlFor="">
                Last Name
              </label>
              <br />
              <div className="text-[14px] bg-inputGray flex items-center px-[20px] mt-[10px] rounded-[5px] border-b-[1px] border-white">
                <div className="relative w-[25px] h-[25px]">
                  <Image
                    src="/icons/Profile.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-[1px] h-[33px] mx-[15px]">
                  <Image src="/icons/ThinLine.svg" layout="fill" />
                </div>
                <input
                  className="text-[14px] bg-inputGray py-[12px] placeholder:text-black/50 placeholder:font-[500] w-[100%]"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  {...formik.getFieldProps("lastName")}
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-[15px]">
            <label className="text-[14px]" htmlFor="">
              Work Email
            </label>
            <br />
            <div className="bg-inputGray  flex items-center px-[20px] mt-[10px] rounded-[5px] border-b-[1px] border-white">
              <div className="relative w-[22px] h-[18px] m-[2px]">
                <Image
                  src="/icons/Message.svg"
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
                className="text-[14px] bg-inputGray py-[12px]  placeholder:text-black/50 placeholder:font-[500] w-[100%]"
                type="text"
                placeholder="Enter your work email address"
                name="workEmail"
                {...formik.getFieldProps("workEmail")}
              />
            </div>
          </div>

          <div className="mt-[11px]">
            <label className="text-[13px]" htmlFor="">
              Password
            </label>
            <div className="bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px] border-white">
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
                className="text-[13px] bg-inputGray py-[12px] pl-[10px] font-[500] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%] tracking-[1px]"
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

          <div className="mt-[15px] w-[100%] ">
            <label htmlFor="" className="text-[14px]">
              Phone Number
            </label>{" "}
            <br />
            <div className="flex gap-[9px] mt-[10px]">
              <p className="py-[12px] px-[20px] bg-inputGray rounded-[5px] text-black/50 font-[500]">
                +234
              </p>
              <input
                className="text-[14px] py-[12px] bg-inputGray w-[90%] pl-[20px] placeholder:text-black/50 placeholder:font-[500] rounded-[5px]"
                type="text"
                placeholder="90000000000"
                name="phoneNumber"
                {...formik.getFieldProps("phoneNumber")}
              />
            </div>
          </div>
          <PrimaryButton
            className="mt-[35px] py-[12px] px-[83px]"
            text="Proceed"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
