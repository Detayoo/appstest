import Image from "next/image";
import Router from "next/router";
import LoginSidebar from "../components/LoginPage/Login-Sidebar";
import { PrimaryButton } from "../reusables/Buttons";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      workEmail: "",
    },
    validationSchema: Yup.object({
      workEmail: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("You have to fill this in"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { workEmail } = formik.values;
  console.log(formik.values);
  return (
    <div className="w-full h-screen flex">
      <LoginSidebar />
      <div className="w-[56.2%] py-[120px] px-[100px]">
        <h1 className="text-[22px] text-green font-[500]">APPSTEST</h1>
        <h2 className="text-[23px] mt-[21px]">Forgot Password</h2>
        <p className="text-black/40 text-[13px] mt-[7px] font-[450] leading-[17px]">
          Enter your email address and you will receive an email with your{" "}
          <br />
          password reset link.
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-[34px]">
            <label className="text-[13px] font-[500] text-black/80" htmlFor="">
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
                className="text-[13px] bg-inputGray py-[13px] pl-[10px] font-[500] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%]"
                type="text"
                placeholder="Enter your work email address"
                {...formik.getFieldProps("workEmail")}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-[35px]">
            <PrimaryButton text="Send email" className="py-[11px] px-[47px]" />
            <p
              onClick={() => Router.push("/login")}
              className="text-green text-[14px] font-[600]"
            >
              Back to Login page
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
