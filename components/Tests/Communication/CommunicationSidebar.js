import TestSidebarLayout from "../../../layouts/TestSidebarLayout";
import Image from "next/image";
import { PrimaryButton, WhiteButton } from "../../../reusables/Buttons";

const CommunicationSidebar = () => {
  return (
    <div className="w-[30%] h-[90px] sticky top-[191px] right-0">
      <TestSidebarLayout>
        <div className="relative w-[160px] h-[50px]">
          <Image src="/icons/Chats Session.svg" layout="fill" />
        </div>
        <div className="mt-[20px] pl-[15px]">
          <div>
            <p className="text-black/60">Online Testers</p>
            <PrimaryButton
              text="15"
              className="bg-green/10 text-green py-[5px] px-[15px]"
              disabled
            />
          </div>
          <div className="mt-[20px]">
            <p className="text-black/60">Active Testers</p>
            <WhiteButton
              text="24"
              className="bg-green/10 text-green py-[5px] px-[15px]"
              disabled
            />
          </div>
          <div className="mt-[20px]">
            <p className="text-black/60">Total Testers</p>
            <WhiteButton
              text="24"
              className="bg-green/10 text-green py-[5px] px-[15px]"
              disabled
            />
          </div>
        </div>
      </TestSidebarLayout>
    </div>
  );
};

export default CommunicationSidebar;
