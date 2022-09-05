import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

import {
  DemoButton,
  PrimaryButton,
  WhiteButton,
} from "../../../reusables/Buttons";

const TesterOverview = () => {
  const [createAcc, setCreateAcc] = useState(false);
  const handleCreateAcc = () => {
    setCreateAcc(!createAcc);
  };
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 min-h-full pt-[20px] pr-[75px] overflow-y-auto">
        <p className="font-[500] text-[23px] tracking-tight">
          Conditions of this test
        </p>
        <div className="flex flex-wrap mt-[18px] gap-x-[30px] gap-y-[14px]">
          <div className="relative w-[264px] h-[76px]">
            <Image src="/images/No Order.svg" layout="fill" />
          </div>
          <div className="relative w-[264px] h-[76px]">
            <Image src="/images/Customer Support.svg" layout="fill" />
          </div>
          <div className="relative w-[264px] h-[76px]">
            <Image src="/images/Product Reviews.svg" layout="fill" />
          </div>
          <div className="relative w-[264px] h-[76px]">
            <Image src="/images/Submit in English.svg" layout="fill" />
          </div>
        </div>
        <div className="mt-[16px] text-[13px] w-[80%]">
          <p className="text-black text-[23px]">Access Credentials</p>
          <div className="flex justify-between mt-[6px]">
            <p className="text-black/60">URL:</p>
            <Link href="#">
              <a className="text-blue underline decoration-blue underline-offset-4 mr-[32px]">
                https:// release.betamoney.dev/manualregressiontesting/login
              </a>
            </Link>
          </div>

          <div className="flex gap-[35px] mt-[16px]">
            <p className="text-black/60 ">Username:</p>
            <p className="justify-self-start">qatest@betamoney.com</p>
          </div>

          <div className="flex gap-[35px] mt-[16px]">
            <p className="text-black/60 ">Password:</p>
            <p className="justify-self-start">TwfEWQ1234@jdlk#3</p>
          </div>

          <div className="flex gap-[25px] mt-[16px]">
            <p className="text-black/60 ">
              Further <br /> Instructions:
            </p>
            <p className="justify-self-start">
              Additional power user accounts added. <br /> Password:
              BetaMoney1234!
            </p>
          </div>

          <div className="relative w-[558px] h-[45px] mt-[25px]">
            <Image src="/images/No Bookings.svg" layout="fill" />
          </div>

          <div className="mt-[20px]">
            <p className="text-[24px]">Goal of this test</p>
            <p className="text-black/60 text-[13px] mt-[5px]">No information</p>
          </div>

          <div className="mt-[35px]">
            <p className="text-[24px]">Out of scope</p>
            <p className="text-black/60 text-[13px] mt-[5px]">
              File only High and Critical bugs. Do not file low priority ones
            </p>
          </div>

          <div className="mt-[35px]">
            <p className="text-[24px]">Additional requirement</p>
            <p className="text-black/60 text-[13px] mt-[5px]">No information</p>
          </div>

          <div className={`mt-[35px] w-[120%]`}>
            <p className="text-[24px]">Test these features</p>

            <div
              className={`${createAcc && "bg-dropPrimary pb-[20px] mb-[20px]"}`}
            >
              <div
                className={`flex w-full justify-between items-center mb-[15px] min-h-[50px] border-[1px] border-black/40 pl-[20px] rounded-[5px] ${
                  createAcc &&
                  "border-0 border-b-[1px] border-black/10 rounded-none"
                }`}
              >
                <div className="w-[60%] hover:text-green">
                  Auth:: Create Account Modal
                </div>
                <div
                  onClick={handleCreateAcc}
                  className="relative w-[16px] h-[16px] ml-[45px] mr-[15px]"
                >
                  <Image
                    src={
                      createAcc
                        ? "/icons/Up Gray Arrow.svg"
                        : "/icons/Down Gray Arrow.svg"
                    }
                    layout="fill"
                  />
                </div>
                {!createAcc && (
                  <DemoButton
                    onClick={() =>
                      Router.push("/tester/available-tests/submit-bug")
                    }
                    text="Submit bug"
                    className="bg-green/20 py-[12px] px-[20px] text-green text-[16px] font-[400]"
                  />
                )}
              </div>
              {createAcc && (
                <div>
                  <p className="font-[500]  pl-[15px] pt-[15px]">
                    WHERE YOU CAN FIND THIS FEATURE:
                  </p>
                  <p
                    className={`py-[14px] text-black/70 bg-white  pl-[15px] mt-[5px] ml-[15px] rounded-[5px] `}
                  >
                    “My account” button global site header
                  </p>

                  <p className="font-[500] mt-[12px] pl-[15px] py-[14px]">
                    WHAT YOU SHOULD FIND THERE/TEST FOR:
                  </p>
                  <p className="pl-[15px] text-black/70 bg-white py-[15px] ml-[15px] rounded-[5px]">
                    This feature allows users to quickly create a new account
                    from any page. <br /> <br />{" "}
                    <span className="text-black/90 font-[500]">
                      Expected behaviour:{" "}
                    </span>
                    <br /> Upon clicking the “My account” button, as an
                    unauthenticated user, a modal should appear where you can
                    select the “Create Account” option. After completing the
                    required fields and submitting the form, the modal should
                    close and “My account” menu should be updated to reflect the
                    customer name.
                  </p>
                  <div className="flex justify-end mt-[50px]">
                    <PrimaryButton
                      onClick={() =>
                        Router.push("/tester/available-tests/submit-bug")
                      }
                      text="Submit bug"
                      className="text-right px-[28px] py-[12px] mr-[25px]"
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className={`flex w-[100%] justify-between items-center mb-[15px] h-[50px] border-[1px] border-black/40 pl-[20px] rounded-[5px] `}
            >
              <div className="w-[60%] hover:text-green">
                Auth:: Create Account Page
              </div>
              <div className="relative w-[16px] h-[16px] ml-[50px]">
                <Image src="/icons/Down Gray Arrow.svg" layout="fill" />
              </div>

              <DemoButton
                text="Submit bug"
                className="bg-green/20 h-full px-[20px] text-green text-[16px] font-[400]"
              />
            </div>
            <div className="flex w-[100%] justify-between items-center mb-[15px] h-[50px] border-[1px] border-black/40 pl-[20px] rounded-[5px]">
              <div className="w-[60%] hover:text-green">
                Auth:: Sign-In Modal
              </div>
              <div className="relative w-[16px] h-[16px] ml-[50px]">
                <Image src="/icons/Down Gray Arrow.svg" layout="fill" />
              </div>

              <DemoButton
                text="Submit bug"
                className="bg-green/20 h-full px-[20px] text-green text-[16px] font-[400]"
              />
            </div>
            <div className="flex w-[100%] justify-between items-center mb-[15px] h-[50px] border-[1px] border-black/40 pl-[20px] rounded-[5px]">
              <div className="w-[60%] hover:text-green">
                Category Listing Page (CLP)
              </div>
              <div className="relative w-[16px] h-[16px] ml-[50px]">
                <Image src="/icons/Down Gray Arrow.svg" layout="fill" />
              </div>
              <DemoButton
                text="Submit bug"
                className="bg-green/20 h-full px-[20px] text-green text-[16px] font-[400]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[26%] h-[60vh] bg-white sticky top-[189px] right-0">
        <div className="relative w-[70px] h-[50px]">
          <Image src="/icons/Sticky Web Image.svg" layout="fill" />
        </div>
        <div className="mt-[30px] pl-[20px]">
          <div>
            <p className="text-black/60">Total Bugs</p>
            <WhiteButton
              text="15"
              className="bg-green/10 text-green py-[5px] px-[15px] mt-[2px]"
              disabled
            />
          </div>
          <div className="mt-[20px]">
            <p className="text-black/60">My Submitted Bugs</p>
            <WhiteButton
              text="2"
              className="bg-green/10 text-green py-[5px] px-[15px] mt-[2px]"
              disabled
            />
          </div>

          <div className="mt-[20px]">
            <p className="text-black/60">Browser types</p>
            <div className="flex gap-[16px] mt-[8px]">
              <div className="relative w-[28px] h-[28px]">
                <Image src="/icons/Chrome.svg" layout="fill" />
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src="/icons/Edge.svg" layout="fill" />
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src="/icons/Firefox.svg" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green fixed bottom-0 w-full flex items-center h-[65px] gap-[18px] ml-[-26px] pl-[30px] mt-[8px]">
        <div className="flex items-center justify-center gap-[8px] px-[24px] py-[8px] rounded-[5px] cursor-pointer border-2 border-white text-white  hover:text-green hover:bg-white hover:border-green">
          <DemoButton text="Submit bug" className="" />
        </div>
      </div>
    </div>
  );
};

export default TesterOverview;

{
  /* <AdminTestSidebar /> */
}
{
  /* <div className="mt-[22px] fixed bottom-0 w-full z-30">
        <div className="w-[40%]  bg-lightestgray">
          <p className="text-[16px] text-black/60 tracking-tight mb-[8px]">
            Steps
          </p>
          <div className="flex items-center gap-[16px] text-[13px]">
            <div className="relative w-[30px] h-[30px]">
              <Image src="/images/Admin Step 1.svg" layout="fill" />
            </div>
            <p>
              Go to {}
              <Link href="/">
                <a className="text-blue">
                  "https://release.betamoney.dev/manualregression"
                </a>
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-[16px] mt-[10px] text-[13px]">
            <div className="relative w-[30px] h-[30px]">
              <Image src="/images/Admin Step 2.svg" layout="fill" />
            </div>
            <p className="">
              Sign in with account (
              <span className="text-blue">qatest@betamoney.com</span>)/
              (Password: Teswtw1237gGhy)
            </p>
          </div>
        </div>

        <div className="bg-green flex items-center h-[65px] gap-[18px] ml-[-26px] pl-[30px] mt-[8px]">
          <div className="flex bg-white items-center justify-center gap-[8px] px-[20px] py-[10px] rounded-[5px] cursor-pointer">
            <div className="relative w-[17px] h-[13px]">
              <Image src="/icons/Approve.svg" layout="fill" />
            </div>
            <p className="text-green">Approve</p>
          </div>

          <div className="flex items-center justify-center gap-[8px] px-[24px] py-[8px] rounded-[5px] cursor-pointer border-2 border-white">
            <div className="relative w-[13px] h-[13px]">
              <Image src="/icons/Decline.svg" layout="fill" />
            </div>
            <p className="text-white">Decline</p>
          </div>
        </div>
      </div> */
}
