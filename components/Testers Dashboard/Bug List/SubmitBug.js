import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import TestersDashboardLayout from "../../../layouts/TestersDashboardLayout";
import { DemoButton, WhiteButton } from "../../../reusables/Buttons";
import TesterHeader from "../Header/TesterHeader";
const SubmitBug = () => {
  const [featureDropdown, setFeatureDropdown] = useState(false);
  const [bugTypeDropdown, setBugTypeDropdown] = useState(false);
  const handleFeature = () => {
    setFeatureDropdown(!featureDropdown);
    setBugTypeDropdown(false);
  };

  const handleBug = () => {
    setBugTypeDropdown(!bugTypeDropdown);
    setFeatureDropdown(false);
  };

  const goBack = (e) => {
    e.preventDefault();
    Router.push("/tester/available-tests/each");
  };

  return (
    <TestersDashboardLayout>
      <div className="min-h-screen pl-[28px] pr-[96px] pt-[16px] bg-lightestgray text-[14px]">
        <TesterHeader />
        <form action="" className="pt-[40px]">
          <div className="w-[74.5%]">
            <p className="text-[20px] font-[500] tracking-tight">Submit Bug</p>
            <div className="relative w-full h-[2px] mt-[6px]">
              <Image src="/images/Line 20.svg" layout="fill" />
            </div>

            <div className="mt-[22px] text-[14px]">
              <p className="text-black/80">Feature</p>
              <div
                className={`h-[48px] bg-green rounded-[5px] mt-[7px] flex items-center pl-[20px] ${
                  featureDropdown && "rounded-b-[0]"
                } `}
              >
                <p className="text-white w-[86%]">Please select</p>
                <div className="relative w-[1px] h-[52px] mr-[30px]">
                  <Image src="/images/Select Line.svg" layout="fill" />
                </div>
                <div
                  onClick={handleFeature}
                  className="relative w-[11px] h-[11px] cursor-pointer"
                >
                  <Image
                    src={
                      featureDropdown
                        ? "/icons/Select Arrow 2.svg"
                        : "/icons/Select Arrow.svg"
                    }
                    layout="fill"
                  />
                </div>
              </div>

              {featureDropdown && (
                <div
                  className={`border-[1px] border-black/60 rounded-b-[5px] transition-all duration-1000`}
                >
                  <p className="bg-black/10 py-[13px] pl-[20px]">
                    Auth:: Create Account Page
                  </p>
                  <p className="py-[16px] pl-[20px]">
                    Category Listing Page (CLP)
                  </p>
                </div>
              )}
            </div>

            <div className="mt-[18px] text-[14px]">
              <p className="text-black/80">Bug type</p>
              <div
                className={`h-[48px] bg-green rounded-[5px] mt-[7px] flex items-center pl-[20px] ${
                  bugTypeDropdown && "rounded-b-[0]"
                }`}
              >
                <p className="text-white w-[86%]">Please select</p>
                <div className="relative w-[1px] h-[52px] mr-[30px] ">
                  <Image src="/images/Select Line.svg" layout="fill" />
                </div>
                <div
                  onClick={handleBug}
                  className="relative w-[11px] h-[11px] cursor-pointer"
                >
                  <Image
                    src={
                      bugTypeDropdown
                        ? "/icons/Select Arrow 2.svg"
                        : "/icons/Select Arrow.svg"
                    }
                    layout="fill"
                  />
                </div>
              </div>

              {bugTypeDropdown && (
                <div className="border-[1px] border-black/60 rounded-b-[5px]">
                  <div className="bg-black/10 flex gap-[15px] items-center py-[5px] pl-[20px]">
                    <div className="relative w-[38px] h-[38px]">
                      <Image src="/icons/Red Bug.svg" layout="fill" />
                    </div>
                    <p>Functional</p>
                  </div>
                  <div className="flex gap-[15px] items-center py-[10px] pl-[20px]">
                    <div className="relative w-[38px] h-[38px]">
                      <Image src="/icons/Green Bug.svg" layout="fill" />
                    </div>
                    <p>Usability</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-[15px]">
              <p className="text-black/80">Severity</p>
              <div className="flex gap-[9px] mt-[8px]">
                <div className="flex gap-[12px] py-[5px] px-[17px] border-[1px] border-black/30 rounded-[3px]">
                  <input
                    type="radio"
                    className="accent-blue h-[25px] w-[25px]"
                  />
                  <p className="mt-[2px]">Low</p>
                </div>

                <div className="flex gap-[12px] py-[5px] px-[15px] border-[1px] border-black/30 rounded-[3px]">
                  <input
                    type="radio"
                    className="accent-yellow h-[25px] w-[25px]"
                  />
                  <p className="mt-[2px]">Medium</p>
                </div>

                <div className="flex gap-[12px] py-[5px] px-[26px] border-[1px] border-black/30 rounded-[3px]">
                  <input
                    type="radio"
                    className="accent-pending h-[25px] w-[25px]"
                  />
                  <p className="mt-[2px]">High</p>
                </div>

                <div className="flex gap-[12px] py-[5px] px-[18.5px] border-[1px] border-black/30 rounded-[3px]">
                  <input
                    type="radio"
                    className="accent-likeRed h-[25px] w-[25px]"
                  />
                  <p className="mt-[2px]">Critical</p>
                </div>
              </div>
            </div>

            <div className="mt-[17px]">
              <p className="text-black/80">Steps</p>
              <div className="flex gap-[15px] justify-between mt-[8px]">
                <div className="relative w-[50px] h-[50px]">
                  <Image src="/icons/Add.svg" layout="fill" />
                </div>
                <textarea
                  type="text"
                  className="flex-1 pt-[10px] pb-[5px] border-[1px] border-black/30 pl-[20px] placeholder:font-[400] placeholder:text-[14px] rounded-[5px]"
                  placeholder="Add a step"
                />
              </div>
              <div className="mt-[15px] flex items-center">
                <div className="flex items-center justify-center w-[5%] py-[7px] px-[18px]  mr-[26px] rounded-[50%] border-[2px] text-green border-green">
                  1
                </div>
                <p className="border-[1px] border-black/40 p-[12px] rounded-[5px] flex-1 text-[13px]">
                  Go to{" "}
                  <Link href="#">
                    <a className="text-offBlue">
                      “https:// release.betamoney.dev/manualregression
                      testing/login”
                    </a>
                  </Link>
                </p>
                <div className="border-[1px] border-black/40 ml-[15px] py-[12px] rounded-[5px] w-[9%] flex justify-center items-center">
                  <div className="relative w-[20px] h-[24px]">
                    <Image src="/icons/Delete.svg" layout="fill" />
                  </div>
                </div>
              </div>

              <div className="mt-[15px] flex items-center">
                <div className="flex items-center justify-center w-[5%] py-[7px] px-[18px]  mr-[26px] rounded-[50%] border-[2px] text-green border-green">
                  2
                </div>
                <p className="border-[1px] py-[13px] border-black/40 px-[12px] rounded-[5px] flex-1 text-[12px]">
                  Go to{" "}
                  <Link href="#">
                    <a className="">
                      Sign in with account (
                      <span className="text-offBlue">qatest@betamoney.com</span>
                      )/ (Password: Teswtw123)
                    </a>
                  </Link>
                </p>
                <div className="border-[1px] border-black/40 ml-[15px] py-[12px] rounded-[5px] w-[9%] flex justify-center items-center">
                  <div className="relative w-[20px] h-[24px]">
                    <Image src="/icons/Delete.svg" layout="fill" />
                  </div>
                </div>
              </div>

              <div className="mt-[15px] flex items-center">
                <div className="flex items-center justify-center w-[5%] py-[7px] px-[18px]  mr-[26px] rounded-[50%] border-[2px] text-green border-green">
                  3
                </div>
                <p className="border-[1px] py-[13px] border-black/40 px-[12px] rounded-[5px] flex-1 text-[12px]">
                  Go to{" "}
                  <Link href="#">
                    <a className="text-[13px]">Click to Homepage</a>
                  </Link>
                </p>
                <div className="border-[1px] border-black/40 ml-[15px] py-[12px] rounded-[5px] w-[9%] flex justify-center items-center">
                  <div className="relative w-[20px] h-[24px]">
                    <Image src="/icons/Delete.svg" layout="fill" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[30px]">
              <label htmlFor="" className="text-black/80">
                Expected result
              </label>
              <textarea
                className="w-full min-h-[90px] pl-[20px] pt-[10px] mt-[8px] border-[1px] border-black/30 rounded-[5px] placeholder:font-[400] placeholder:text-[14px]"
                placeholder="Write something"
              />
            </div>

            <div className="mt-[17px]">
              <label htmlFor="" className="text-black/80">
                Actual result
              </label>
              <textarea
                className="w-full min-h-[90px] pl-[20px] pt-[10px] mt-[8px] border-[1px] border-black/30 rounded-[5px] placeholder:font-[400] placeholder:text-[14px]"
                placeholder="Write something"
              />
            </div>

            <div className="mt-[17px]">
              <p>Upload attachment (s)</p>
              <label
                htmlFor="bug-attachment"
                className="w-full pl-[20px] h-[70px] flex justify-center items-center mt-[8px] border-[1px] border-dashed border-green/30 underline decoration-green text-green rounded-[5px] placeholder:font-[400] placeholder:text-[14px]"
              >
                +Add attachment
              </label>

              <input
                type="file"
                id="bug-attachment"
                className="w-full min-h-[90px] pl-[20px] pt-[10px] mt-[8px] border-[1px] border-black/30 rounded-[5px] placeholder:font-[400] placeholder:text-[14px]"
                placeholder="Write something"
              />
            </div>

            <div className="mt-[18px] text-[14px]">
              <p className="text-black/80">Minimum version</p>
              <div
                className={`h-[48px] rounded-t-[5px] mt-[7px] flex items-center pl-[20px] border-[1px] border-b-0 border-black/30`}
              >
                <p className="w-[86%]">Please select</p>
                <div className="relative w-[1px] h-[52px] mr-[30px] ">
                  <Image src="/images/Select Line.svg" layout="fill" />
                </div>
                <div className="relative w-[11px] h-[11px] cursor-pointer">
                  <Image src="/icons/Black Select Arrow.svg" layout="fill" />
                </div>
              </div>

              <div className="border-[1px] border-b-0 border-black/20">
                <div className="flex gap-[10px] items-center py-[8px] pl-[20px]">
                  <input type="checkbox" className="w-[28px] h-[28px]" />
                  <p>5.0</p>
                </div>
              </div>
              <div className="border-[1px] border-b-0 border-black/20">
                <div className="flex gap-[10px] items-center py-[8px] pl-[20px]">
                  <input type="checkbox" className="w-[28px] h-[28px]" />
                  <p>6.0</p>
                </div>
              </div>
              <div className="border-[1px] border-b-0 border-black/20">
                <div className="flex gap-[10px] items-center py-[8px] pl-[20px]">
                  <input type="checkbox" className="w-[28px] h-[28px]" />
                  <p>7.0</p>
                </div>
              </div>
              <div className="border-[1px] border-black/20 rounded-b-[5px]">
                <div className="flex gap-[10px] items-center py-[8px] pl-[20px]">
                  <input type="checkbox" className="w-[28px] h-[28px]" />
                  <p>8.0</p>
                </div>
              </div>
            </div>

            <div className="mt-[17px]">
              <label htmlFor="">Browser used</label>
              <div className="flex gap-[8px] items-center mt-[8px]">
                <input type="checkbox" className="w-[28px] h-[28px]" />
                <p>Chrome</p>
                <div className="relative w-[28px] h-[28px]">
                  <Image src="/icons/Chrome.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[8px] items-center mt-[20px]">
                <input type="checkbox" className="w-[28px] h-[28px]" />
                <p>Microsoft Edge</p>
                <div className="relative w-[28px] h-[28px]">
                  <Image src="/icons/Edge.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[8px] items-center mt-[20px]">
                <input type="checkbox" className="w-[28px] h-[28px]" />
                <p>Mozilla Firefox</p>
                <div className="relative w-[28px] h-[28px]">
                  <Image src="/icons/Firefox.svg" layout="fill" />
                </div>
              </div>
            </div>

            <div className="mt-[20px] mb-[80px]">
              <label htmlFor="" className="text-black/80">
                Additional Comment
              </label>
              <textarea
                className="w-full min-h-[90px] pl-[20px] pt-[10px] mt-[8px] border-[1px] border-black/30 rounded-[5px] placeholder:font-[400] placeholder:text-[14px]"
                placeholder="Write something"
              />
            </div>
          </div>
          <div className="bg-green fixed bottom-0 w-full flex items-center h-[65px] gap-[18px] ml-[-26px] pl-[30px] mt-[8px]">
            <div className="flex bg-white items-center justify-center gap-[8px] px-[20px] py-[10px] rounded-[5px] cursor-pointer">
              <div className="relative w-[17px] h-[13px]">
                <Image src="/icons/Approve.svg" layout="fill" />
              </div>
              <WhiteButton text="Submit" className="text-green" />
            </div>

            <div className="flex items-center justify-center gap-[8px] px-[24px] py-[8px] rounded-[5px] cursor-pointer border-2 border-white">
              <div className="relative w-[13px] h-[13px]">
                <Image src="/icons/Decline.svg" layout="fill" />
              </div>
              <DemoButton
                onClick={goBack}
                text="Cancel"
                className="text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </TestersDashboardLayout>
  );
};

export default SubmitBug;
