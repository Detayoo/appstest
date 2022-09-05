import Image from "next/image";
import { useTester } from "../../../context/Tester-Context";
const TesterHeader = () => {
  const { testerStatus, setTesterStatus } = useTester();
  return (
    <div className="bg-lightestgray sticky top-[57px] right-0 z-50">
      <div className="flex justify-between bg-lightestgray">
        <p className="text-[23px] pt-[37px] font-[500] tracking-tight leading-normal text-black/90">
          Providus Bank
        </p>
      </div>
      <div className="flex gap-[72px] text-[16px] mt-[30px]">
        <p
          onClick={() => setTesterStatus("Overview")}
          className={`text-black/60 cursor-pointer pb-[7px] ${
            testerStatus === "Overview" &&
            "text-green/100 font-[600] pb-[0px] border-b-[3px] border-green"
          }`}
        >
          Overview
        </p>
        <p
          onClick={() => setTesterStatus("Bug List")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] tracking-wide  ${
            testerStatus === "Bug List" &&
            "text-green/100 font-[600] pb-[2px] border-b-[3px] border-green"
          }`}
        >
          Bug list
        </p>
        <p
          onClick={() => setTesterStatus("Communication")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] ${
            testerStatus === "Communication" &&
            "text-green/100 font-[600] pb-[2px] border-b-[3px] border-green"
          }`}
        >
          Communication
        </p>
      </div>
      <div className="relative w-full h-[2px] mt-[0px]">
        <Image src="/images/Line 20.svg" layout="fill" />
      </div>
    </div>
  );
};

export default TesterHeader;

{
  /* <PrimaryButton
            text="Create test"
            className="py-[12px] px-[32px] font-[400]"
          /> */
}
