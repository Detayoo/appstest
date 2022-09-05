import Image from "next/image";
import TestSidebarLayout from "../../../layouts/TestSidebarLayout";

const OverviewSidebar = () => {
  return (
    <TestSidebarLayout>
      <div className="relative w-[70px] h-[50px]">
        <Image src="/icons/Sticky Web Image.svg" layout="fill" />
      </div>
      <div className="pl-[23px] mt-[43px] text-[15px]">
        <p className="text-black/60 ">Start time</p>
        <p>2nd April 2022 &nbsp; 6:15PM</p>

        <p className="mt-[34px] text-black/60">Total duration</p>
        <p className="mt-[6px]">00:01:12:322</p>

        <p className="mt-[26px] text-black/60">Requested device</p>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <div className="relative w-[22px] h-[22px]">
            <Image src="/icons/Windows.svg" layout="fill" />
          </div>
          <p>Windows 10.14 and Higher</p>
        </div>

        <p className="mt-[28px] text-black/60">Browser types</p>
        <div className="flex gap-[18px] mt-[7px]">
          <div className="relative w-[30px] h-[30px]">
            <Image src="/icons/Chrome.svg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-[30px] h-[30px]">
            <Image src="/icons/Edge.svg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-[30px] h-[30px]">
            <Image src="/icons/Firefox.svg" layout="fill" objectFit="cover" />
          </div>
        </div>

        <p className="mt-[26px] text-black/60">Total tests</p>
        <p className="mt-[3px]">25</p>
      </div>
    </TestSidebarLayout>
  );
};

export default OverviewSidebar;
