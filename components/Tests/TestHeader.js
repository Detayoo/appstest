import Image from "next/image";
import { useDashboard } from "../../context/Dashboard-Context";
import { PrimaryButton } from "../../reusables/Buttons";
const TestHeader = () => {
  const { testType, setTestType } = useDashboard();
  return (
    <div className="bg-lightestgray sticky top-[94px] right-0 z-50">
      <div className="flex justify-between">
        <p className="text-[23px] font-[500] tracking-tight leading-normal text-black/90">
          Tests
        </p>
        <div className="flex bg-green items-center gap-[8px] pl-[15px] cursor-pointer rounded-[5px]">
          <div className="relative w-[18px] h-[18px]">
            <Image src="/icons/Plus Sign.svg" layout="fill" />
          </div>
          <PrimaryButton
            text="Add team"
            className="py-[12px] pr-[18px] font-[400]"
          />
        </div>
      </div>
      <div className="flex gap-[45px] text-[13px] mt-[5px]">
        <p
          onClick={() => setTestType("All")}
          className={`text-black/60 cursor-pointer pb-[7px]  ${
            testType === "All" &&
            "text-green font-[600] pb-[0px] border-b-[2.5px] border-green"
          }`}
        >
          All tests
        </p>
        <div
          onClick={() => setTestType("Android")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] ${
            testType === "Android" &&
            "text-green font-[600] pb-[2px] border-b-[2.5px] border-green"
          }`}
        >
          <div className="relative w-[17px] h-[20px]">
            <Image
              src={
                testType === "Android"
                  ? "/icons/Bold Android.svg"
                  : "/icons/Light Android.svg"
              }
              layout="fill"
            />
          </div>
          <p>Android (12)</p>
        </div>
        <div
          onClick={() => setTestType("iOS")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] ${
            testType === "iOS" &&
            "text-green font-[600] pb-[2px] border-b-[2.5px] border-green"
          }`}
        >
          <div className="relative w-[17px] h-[20px]">
            <Image
              src={
                testType === "iOS"
                  ? "/icons/Bold IOS.svg"
                  : "/icons/Light IOS.svg"
              }
              layout="fill"
            />
          </div>
          <p className="pt-[3px]">iOS (5)</p>
        </div>
        <div
          onClick={() => setTestType("Web")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] ${
            testType === "Web" &&
            "text-green font-[600] pb-[2px] border-b-[2.5px] border-green"
          }`}
        >
          <div className="relative w-[17px] h-[20px]">
            <Image
              src={
                testType === "Web"
                  ? "/icons/Bold Web.svg"
                  : "/icons/Light Web.svg"
              }
              layout="fill"
            />
          </div>
          <p className="pt-[2px]">Web (21)</p>
        </div>
      </div>
      <div className="relative w-full h-[1px] mt-[0px]">
        <Image src="/images/Line 20.svg" layout="fill" />
      </div>
    </div>
  );
};

export default TestHeader;
