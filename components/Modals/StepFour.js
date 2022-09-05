import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  OtherButton,
  DemoButton,
  PrimaryButton,
} from "../../reusables/Buttons";

import { useDashboard } from "../../context/Dashboard-Context";
const StepFour = () => {
  const [testCredentials, setTestCredentials] = useState();
  const handleChange = () => setTestCredentials(!testCredentials);
  const { platform, setStep, setDashboardModal } = useDashboard();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      notification: [],
      teamEmail: "",
      role: "",
      date: "",
    },
    validationSchema: Yup.object({
      testName: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("You have to fill this in"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleNotifications = (e) =>
    (formik.values.notification = e.target.value);

  console.log(formik.values);
  return (
    <div className=" bg-white sticky top-0 left-0 ml-[20px]  h-auto w-[45.3%] rounded-[5px] pl-[28px] pr-[30px] pt-[20px] pb-[30px] ">
      <div className="bg-white sticky top-[10px] left-0 z-40">
        <div className="flex justify-between items-center bg-white">
          <p className="font-[400] text-[18px] tracking-tight">
            Create a new test
          </p>
          <div
            onClick={() => setDashboardModal(false)}
            className="relative w-[13px] h-[13px] cursor-pointer"
          >
            <Image src="/icons/Close.svg" layout="fill" />
          </div>
        </div>
        <div className="relative w-[100%] h-[8px] mt-[11px]">
          <Image src="/images/Modal Line.svg" layout="fill" />
        </div>
        <div className="flex justify-end mt-[18px]">
          <div className="flex h-[10px] w-[30%] rounded-[15px]">
            <div className="bg-lightGreen w-[100%] rounded-[15px]"></div>
          </div>
        </div>
        <p className="text-black/50 text-right mr-[38px] text-[12px] mt-[8px]">
          4 of 4 complete
        </p>
      </div>
      <div>
        <p className="text-center font-[500] text-[17px] mt-[8px]">
          {platform} application details
        </p>
        <p className="text-black/60 text-[13px] text-center mt-[5px]">
          You can add more application details
        </p>
        <form action="">
          <div className="px-[60px] mt-[22px]">
            <label htmlFor="" className="text-[13px]">
              Test Credentials
            </label>
            <div className="flex items-center mt-[4px] gap-[12px] py-[8px] pl-[12px] border-[1px] border-black/20 rounded-[4px] ">
              <input
                type="checkbox"
                className="accent-green w-[26px] h-[26px]"
                value="testCredentials"
                onChange={handleChange}
                checked={testCredentials ? true : false}
              />
              <p className="text-[13px] text-black/50 font-[500]">
                Provide test Credentials
              </p>
            </div>
          </div>
          {testCredentials && (
            <div>
              <div className="px-[60px] mt-[20px]">
                <input
                  type="text"
                  name="userName"
                  {...formik.getFieldProps("userName")}
                  placeholder="Username"
                  className="placeholder:text-[14px] bg-lightAsh w-full py-[10px] pl-[12px] font-[400] rounded-[1px]"
                />
              </div>

              <div className="px-[60px] mt-[20px]">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  {...formik.getFieldProps("password")}
                  className="placeholder:text-[14px]  bg-lightAsh w-full py-[10px] pl-[12px] font-[400] rounded-[1px]"
                />
              </div>
            </div>
          )}

          <div className="px-[60px] mt-[22px]">
            <label className="text-[13px] text-black/80 font-[500]">
              Where do you want to get your notification update?
            </label>
            <br />
            <div className="flex gap-[15px] mt-[10px] text-[14px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  name="notification"
                  value="Slack"
                  onChange={(e) => handleNotifications(e)}
                  className="w-[23px] h-[23px] accent-green"
                />
                <span className="font-[500] text-black/70 text-[15px]">
                  Slack
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  name="notification"
                  value="Jira"
                  onChange={(e) => handleNotifications(e)}
                  className="ml-[20px] w-[23px] h-[23px] accent-green"
                />
                <span className="font-[500] text-black/70 text-[15px]">
                  Jira
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[22px] px-[60px] ">
            <label className="text-[13px] text-black/80 font-[500]" htmlFor="">
              Invite your teams
            </label>
            <div className="flex bg-lightAsh items-center pl-[20px] mt-[8px] rounded-[5px] border-[1px] border-black/20">
              <input
                className="text-[13px] bg-lightAsh py-[13px] pl-[0px] pr-[0] font-[500]
               text-black/80 placeholder:text-black/50 placeholder:font-[500]
               placeholder:text-[13px] w-[100%]"
                placeholder="Invite by email (Multiple li.."
                name="teamEmail"
                {...formik.getFieldProps("teamEmail")}
              />
              <div className="relative w-[2px] h-[48px]  mr-[15px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <select
                name="role"
                {...formik.getFieldProps("role")}
                id=""
                className="text-green bg-inherit text-[14px]"
              >
                <option value="">Member</option>
                <option value="bigBoss">Big boss</option>
              </select>
              <PrimaryButton
                type="button"
                text="Invite"
                className="py-[14px] px-[42px] ml-[23px] font-[400] text-[14px]"
              />
            </div>
          </div>
          <div className="px-[60px] mt-[22px]">
            <label htmlFor="" className="text-[13px]">
              Schedule test
            </label>
            <br />
            <div className="bg-lightAsh flex justify-between items-center w-[70%] pr-[15px]  border-[1px] border-black/20 rounded-[4px]">
              <input
                type="date"
                name="date"
                {...formik.getFieldProps("date")}
                className="font-[500] bg-lightAsh text-[13px] text-black/50 px-[10px]  mt-[4px] gap-[12px] py-[12px]"
              />
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="/icons/Calendar.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mx-[45px] mt-[35px]">
            {platform && (
              <OtherButton
                text="Back"
                className="py-[10px] px-[28px] font-[400]"
                onClick={() => setStep("three")}
                type="button"
              />
            )}
            <DemoButton
              text="Submit Test"
              className={`py-[10px] px-[28px] bg-green/10 text-white/80 ${
                platform && "bg-green text-white/100"
              }`}
              disabled={!platform}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepFour;
