import Image from "next/dist/client/image";
import { useState } from "react";

import RequestSidebar from "../components/RequestsSidebar";
import { PrimaryButton } from "../reusables/Buttons";
import { useFormik } from "formik";
import * as Yup from "yup";

const RequestAccess = () => {
  const formik = useFormik({
    initialValues: {
      workEmail: "",
      terms: false,
      followUp: false,
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
  const { workEmail, terms, followUp } = formik.values;
  // const defaultForm = {
  //   workEmail: "",
  //   terms: false,
  //   followUp: false,
  // };
  // const [accessForm, setAccessForm] = useState(defaultForm);
  // const { workEmail, terms, followUp } = accessForm;
  // console.log(accessForm);

  const validateEmail = workEmail.includes("@gmail.com");
  console.log(formik.values);

  // const handleChange = (e) => {
  //   const { type, name, value, checked } = e.target;
  //   setAccessForm({
  //     ...accessForm,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  return (
    <div className="flex w-full">
      <RequestSidebar />
      <div className="w-[56.2%] pt-[105px] pl-[158px] pr-[130px] ">
        <div className="relative w-[22px] h-[19px]">
          <Image src="/icons/BackButton.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex items-center gap-[7px] mt-[48px]">
          <h1 className=" text-[24px]">Request Access</h1>
          <div className="relative w-[26px] h-[33px]">
            <Image src="/icons/Padlock.svg" layout="fill" objectFit="cover" />
          </div>
        </div>

        <form className="w-[100%] ">
          <div className="w-[100%] mt-[40px]">
            <label className="text-[13px]" htmlFor="">
              Work Email
            </label>
            <br />
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
              <div className="relative w-[1px] h-[40px] mx-[15px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <input
                className="text-[13px] bg-inputGray py-[12px] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%]"
                type="email"
                placeholder="Enter your work email address"
                name="workEmail"
                {...formik.getFieldProps("workEmail")}
              />
              {validateEmail && (
                <div className="relative w-[22px] h-[17px]">
                  <Image
                    src="/icons/Green Mark.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-[40px] flex items-center gap-[10px] text-[13px] font-[500]">
            <input
              type="checkbox"
              className="h-[24px] w-[24px] accent-black"
              name="terms"
              {...formik.getFieldProps("terms")}
            />
            <p className="text-black/70 flex-1">
              I have read and I accept the {}
              <span className="text-green underline underline-green  underline-offset-[2px] decoration-2 decoration-green/50">
                Terms of use
              </span>
            </p>
          </div>

          <div className="mt-[22px] flex items-center gap-[10px] text-[13px] font-[500]">
            <input
              type="checkbox"
              className="h-[24px] w-[24px] accent-black"
              name="followUp"
              {...formik.getFieldProps("followUp")}
            />
            <p className="text-black/70 flex-1">
              Send me occassional emails about Appstest’s services (unsubscribe
              at any time)
            </p>
          </div>

          <PrimaryButton
            className="mt-[36px] py-[12px] px-[63px]"
            text="Request Access"
          />
        </form>
      </div>
    </div>
  );
};

export default RequestAccess;
