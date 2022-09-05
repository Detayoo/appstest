import Image from "next/image";
import { useAdmin } from "../../../context/Admin-Context";

const AdminTestHeader = () => {
  const { adminTestStatus, setAdminTestStatus } = useAdmin();
  return (
    <div className="bg-lightestgray sticky top-[94px] right-0 z-50">
      <div className="flex justify-between bg-lightestgray">
        <p className="text-[23px] font-[500] tracking-tight leading-normal text-black/90">
          Providus Bank
        </p>

        {/* <PrimaryButton
          text="Create test"
          className="py-[12px] px-[32px] font-[400]"
        /> */}
      </div>
      <div className="flex gap-[72px] text-[16px] mt-[30px]">
        <p
          onClick={() => setAdminTestStatus("Overview")}
          className={`text-black/60 cursor-pointer pb-[7px] ${
            adminTestStatus === "Overview" &&
            "text-green/100 font-[600] pb-[0px] border-b-[3px] border-green"
          }`}
        >
          Overview
        </p>
        <p
          onClick={() => setAdminTestStatus("Bug List")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] tracking-wide  ${
            adminTestStatus === "Bug List" &&
            "text-green/100 font-[600] pb-[2px] border-b-[3px] border-green"
          }`}
        >
          Bug list
        </p>
        <p
          onClick={() => setAdminTestStatus("Communication")}
          className={`flex gap-[9px] items-center text-black/60 cursor-pointer pb-[5px] ${
            adminTestStatus === "Communication" &&
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

export default AdminTestHeader;
