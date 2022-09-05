import Image from "next/image";

import { useDashboard } from "../../context/Dashboard-Context";
import { PrimaryButton } from "../../reusables/Buttons";

const CreateTestHeader = () => {
  const { testStatus, setTestStatus } = useDashboard();
  return (
    <div className="bg-lightestgray sticky top-[94px] right-0 z-50">
      <div className="flex justify-between">
        <p className="text-[23px] font-[500] tracking-tight leading-normal text-black/90">
          My first tests
        </p>

        <PrimaryButton
          text="Create test"
          className="py-[12px] px-[32px] font-[400]"
        />
      </div>
      <div className="flex gap-[72px] text-[16px] mt-[5px]">
        <p
          onClick={() => setTestStatus("Overview")}
          className={`text-black/60 cursor-pointer pb-[7px] ${
            testStatus === "Overview" &&
            "text-green/100 font-[600] pb-[0px] border-b-[3px] border-green"
          }`}
        >
          Overview
        </p>
        <p
          onClick={() => setTestStatus("Bug List")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] tracking-wide  ${
            testStatus === "Bug List" &&
            "text-green/100 font-[600] pb-[2px] border-b-[3px] border-green"
          }`}
        >
          Bug list
        </p>
        <p
          onClick={() => setTestStatus("Communication")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] ${
            testStatus === "Communication" &&
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

export default CreateTestHeader;
