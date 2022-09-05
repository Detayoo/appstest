import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

import ProfileSidebar from "../components/ProfilePage/ProfileSidebar";
import { PrimaryButton } from "../reusables/Buttons";

const CreateOrganizationProfile = () => {
  const formik = useFormik({
    initialValues: {
      nameOfOrg: "",
      roleInOrg: "",
      teamEmail: "",
      role: "",
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
  // const { nameOfOrg, roleInOrg, teamEmail, role } = formik.values;

  return (
    <div className="flex w-screen h-screen ">
      <ProfileSidebar
        Text="Setup Organisation Profile"
        subText="Let’s get to know more about your organization and also
        to get started with Appstest."
      />
      <div className=" flex-1 py-[110px] pl-[100px] pr-[140px]">
        <h1 className="text-[23px]">Setup your organization profile</h1>
        <p className="text-black/70 text-[14px] mt-[4px] font-[500]">
          Please fill in your details to create your organization profile
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-[32px]">
            <label className="text-[13px] text-black/80 font-[500]" htmlFor="">
              Name of Organization
            </label>
            <div className="bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px] border-white">
              <div className="relative w-[22px] h-[22px] m-[2px]">
                <Image src="/icons/Organization.svg" layout="fill" />
              </div>
              <div className="relative w-[1px] h-[33px] mx-[15px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <input
                className="text-[13px] bg-inputGray py-[13px] pl-[0px] placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%]"
                type="text"
                placeholder="Company"
                name="nameOfOrg"
                {...formik.getFieldProps("nameOfOrg")}
              />
            </div>
          </div>

          <div className="mt-[11px]">
            <label className="text-[13px]  text-black/80 font-[500]" htmlFor="">
              Role in Organization
            </label>
            <div className="bg-inputGray flex items-center px-[20px] mt-[8px] rounded-[5px] border-b-[1px] border-white">
              <div className="relative w-[22px] h-[22px] m-[2px]">
                <Image src="/icons/Organization.svg" layout="fill" />
              </div>
              <div className="relative w-[1px] h-[33px] mx-[15px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <select
                className="text-[13px] bg-inputGray py-[13px] pl-[0px] font-[500]  placeholder:text-black/50 placeholder:font-[500] placeholder:text-[13px] w-[100%]"
                id=""
                name="roleInOrg"
                {...formik.getFieldProps("roleInOrg")}
              >
                <option value="">CTO</option>
                <option value="test">Test</option>
              </select>
            </div>
          </div>

          <div className="mt-[9px] ">
            <label className="text-[13px] text-black/80 font-[500]" htmlFor="">
              Invite your teams
            </label>
            <div className="flex bg-inputGray items-center pl-[20px] mt-[5px] rounded-[5px] border-[1px] border-black/20">
              <input
                className="text-[13px] bg-inputGray py-[13px] pl-[0px] pr-[0] font-[500]
                placeholder:text-black/50 placeholder:font-[500]
               placeholder:text-[13px] w-[100%]"
                placeholder="Invite by email (Multiple lines and Comma)"
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
                <option value="admin">Admin</option>
              </select>
              <PrimaryButton
                type="button"
                text="Invite"
                className="py-[12px] px-[42px] ml-[23px]"
              />
            </div>
          </div>
          <PrimaryButton
            text="Setup Profile"
            className="mt-[53px] py-[12px] px-[47px]"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateOrganizationProfile;
