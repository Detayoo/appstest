import Image from "next/image";

import { OtherButton, DemoButton } from "../../reusables/Buttons";
import { useDashboard } from "../../context/Dashboard-Context";

const StepOne = () => {
  const { platform, setPlatform, setStep, setDashboardModal } = useDashboard();

  return (
    <div className="z-10 bg-white ml-[20px] h-[75%] w-[45.3%] rounded-[5px] pl-[28px] pr-[30px] pt-[30px] pb-[30px]">
      <div className="flex justify-between items-center">
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
      <div className="flex justify-end mt-[20px]">
        <div className="flex h-[10px] w-[30%] rounded-[15px]">
          <div className="bg-lightGreen w-[25%] rounded-l-[15px]"></div>
          <div className="bg-gray w-[75%] rounded-r-[15px]"></div>
        </div>
      </div>
      <p className="text-black/50 text-right mr-[38px] text-[12px] mt-[8px]">
        1 of 4 complete
      </p>
      <p className="text-center font-[500] text-[17px] mt-[3px]">
        Select platform and test application
      </p>
      <p className="text-black/60 text-[13px] text-center mt-[5px]">
        Please choose the device platform you will be testing on
      </p>
      <div className="flex items-center justify-center mt-[36px] gap-[22px]">
        <div onClick={() => setPlatform("Android")} className="flex flex-col cursor-pointer">
          <div
            className={`px-[33px] py-[30px]  rounded-[5px] ${
              platform === "Android" ? "bg-green" : "bg-gray"
            }`}
          >
            <div className="relative w-[33px] h-[40px] ">
              <Image
                src={
                  platform === "Android"
                    ? "/icons/ActiveAndroid.svg"
                    : "/icons/Android.svg"
                }
                layout="fill"
              />
            </div>
          </div>
          <p className="text-center mt-[20px]">Android</p>
        </div>
        <div onClick={() => setPlatform("IOS")} className="flex flex-col cursor-pointer">
          <div
            className={`px-[33px] py-[30px]  rounded-[5px]  ${
              platform === "IOS" ? "bg-green" : "bg-gray"
            }`}
          >
            <div className="relative w-[33px] h-[40px] ">
              <Image
                src={
                  platform === "IOS" ? "/icons/ActiveIOS.svg" : "/icons/IOS.svg"
                }
                layout="fill"
              />
            </div>
          </div>
          <p className="text-center mt-[20px]">IOS</p>
        </div>
        <div onClick={() => setPlatform("Web")} className="flex flex-col cursor-pointer">
          <div
            className={`px-[33px] py-[30px]  rounded-[5px]  ${
              platform === "Web" ? "bg-green" : "bg-gray"
            }`}
          >
            <div className="relative w-[33px] h-[40px] ">
              <Image
                src={
                  platform === "Web" ? "/icons/ActiveWeb.svg" : "/icons/Web.svg"
                }
                layout="fill"
              />
            </div>
          </div>
          <p className="text-center mt-[20px]">Web</p>
        </div>
        <div onClick={() => setPlatform("API")} className="flex flex-col cursor-pointer">
          <div
            className={`px-[33px] py-[30px]  rounded-[5px]  ${
              platform === "API" ? "bg-green" : "bg-gray"
            }`}
          >
            <div className="relative w-[33px] h-[40px] ">
              <Image
                src={
                  platform === "API" ? "/icons/ActiveAPI.svg" : "/icons/API.svg"
                }
                layout="fill"
              />
            </div>
          </div>
          <p className="text-center mt-[20px]">API</p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-[45px] mt-[50px]">
        {platform && (
          <OtherButton text="Back" className="py-[10px] px-[28px]" />
        )}
        <DemoButton
          text="Next"
          className={`py-[10px] px-[28px] bg-green/10 text-white/80 ${
            platform && "bg-green text-white/100"
          }`}
          disabled={!platform}
          onClick={() => setStep("two")}
        />
      </div>
    </div>
  );
};

export default StepOne;
