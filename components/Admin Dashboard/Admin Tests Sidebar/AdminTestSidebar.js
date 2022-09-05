import Image from "next/image";
import TestSidebarLayout from "../../../layouts/TestSidebarLayout";

const AdminTestSidebar = () => {
  return (
    <div className="bg-white h-[50%] w-[34%] sticky top-[80px]">
      <TestSidebarLayout>
        <div className="relative w-[70px] h-[50px]">
          <Image src="/icons/Sticky Web Image.svg" layout="fill" />
        </div>

        <div className="pl-[10px] z-50">
          <div className="mt-[26px] flex gap-[50px]">
            <p className="text-black/60 text-[15px]">Status: </p>
            <p className="font-[700] text-[14px]">In review</p>
          </div>

          <div className="mt-[26px] flex items-center">
            <p className="text-black/60 text-[15px]">Bug Type: </p>
            <div>
              <div className="pl-[24px] flex items-center gap-[10px]">
                <div className="relative w-[25px] h-[25px]">
                  <Image src="/icons/Red Bug.svg" layout="fill" />
                </div>
                <p className="text-[14px]">Functional</p>
              </div>
            </div>
          </div>

          <div className="mt-[26px] flex items-center gap-[10px]">
            <p className="text-black/60 text-[15px]">Severity: </p>
            <div>
              <div className="pl-[24px] flex items-center gap-[10px]">
                <div className="relative w-[25px] h-[25px]">
                  <Image src="/icons/Severity Sign.svg" layout="fill" />
                </div>
                <p className="text-[14px]">Medium</p>
              </div>
            </div>
          </div>

          <div className="mt-[26px] flex gap-[50px]">
            <p className="text-black/60 text-[15px]">Bug ID: </p>
            <p className="font-[700] text-[14px]">#245678</p>
          </div>

          <div className="mt-[26px] flex gap-[10px]">
            <p className="text-black/60 text-[15px]">Reported on: </p>
            <p className="font-[700] text-[14px]">
              April 24, 2022 <br /> 2:43 PM
            </p>
          </div>

          <div className="mt-[26px] flex gap-[40px]">
            <p className="text-black/60 text-[15px]">Feature: </p>
            <p className="font-[700] text-[14px]">Auth: Create account modal</p>
          </div>

          <div className="mt-[26px] flex items-center gap-[25px]">
            <p className="text-black/60 text-[15px]">Tested by: </p>
            <div className="flex items-center gap-[8px]">
              <div className="relative w-[30px] h-[30px]">
                <Image src="/icons/Testers Profile Pic.svg" layout="fill" />
              </div>
              <p className="font-[700]">Tester Wizard</p>
            </div>
          </div>

          <div className="mt-[26px] flex items-center gap-[25px]">
            <p className="text-black/60 text-[14px]">Browser types: </p>
            <div className="flex items-center gap-[8px]">
              <div className="relative w-[28px] h-[28px]">
                <Image
                  src="/icons/Chrome.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src="/icons/Edge.svg" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image
                  src="/icons/Firefox.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </TestSidebarLayout>
    </div>
  );
};

export default AdminTestSidebar;
