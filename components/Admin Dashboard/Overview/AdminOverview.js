import Image from "next/image";
import Link from "next/link";

import AdminTestSidebar from "../Admin Tests Sidebar/AdminTestSidebar";

const AdminOverview = () => {
  return (
    <div className="min-h-screen flex gap-x-[100px]">
      <div className="w-[74.5%] min-h-full pt-[20px] pr-[75px] overflow-y-auto">
        <p className="font-[500] mt-[37px] text-[24px] tracking-tight">Bug Overview</p>
        <div>
          <p className="text-[15px] font-[500] mt-[15px]">Attachments</p>
          <div className="relative w-[362px] h-[207px] mt-[4px]">
            <Image src="/images/Video Attachment.svg" layout="fill" />
          </div>
        </div>
        <div className="mt-[20px]">
          <p className="text-black/60">Expected result</p>
          <p className="text-[13px] text-black/80 mt-[10px]">
            When the user selects the document she wants to upload on the file
            page, she loads the <br /> document she has determined into the
            file.
          </p>
        </div>
        <div className="mt-[15px]">
          <p className="text-black/60">Actual result</p>
          <p className="text-[13px] text-black/80 mt-[10px]">
            When the user selects the document she wants to upload on the file
            page, the page says <br /> “Sorry! Something went wrong” gives
            error.
          </p>
        </div>

        <div className="mt-[15px]">
          <p>Attachments</p>
          <div className="relative w-[352px] h-[60px] mt-[4px]">
            <Image src="/images/Attachment 2.svg" layout="fill" />
          </div>
        </div>

        <div className="mt-[15px]">
          <p className="text-black/60">Additional comments</p>
          <p className="text-[13px] text-black/80 mt-[10px]">
            This is a legit bug but already exists. We have already logged{" "}
            <br /> a ticket for this issue
          </p>
        </div>
        <div className="mt-[15px] mb-[220px]">
          <p className="text-black/50 text-[14px]">April 24, 2022 2:43pm by</p>
          <p className="mt-[10px] text-[13px]">Test Wizard</p>
        </div>
      </div>
      <AdminTestSidebar />
      <div className="mt-[22px] fixed bottom-0 w-full z-30">
        <div className="w-[40%]  bg-lightestgray">
          <p className="text-[16px] text-black/60 tracking-tight mb-[8px]">
            Steps
          </p>
          <div className="flex items-center gap-[16px] text-[13px]">
            <div className="relative w-[30px] h-[30px]">
              <Image src="/images/Admin Step 1.svg" layout="fill" />
            </div>
            <p>
              Go to
              <Link href="/">
                <a className="text-blue">
                  https://release.betamoney.dev/manualregression
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
      </div>
    </div>
  );
};

export default AdminOverview;
