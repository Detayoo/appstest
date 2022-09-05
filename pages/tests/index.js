import Image from "next/image";

import TestHeader from "../../components/Tests/TestHeader";
import { useDashboard } from "../../context/Dashboard-Context";
import DashboardLayout from "../../layouts/DashboardLayout";

const Test = () => {
  const { testType } = useDashboard();

  return (
    <DashboardLayout>
      <div className="pt-[37px] pr-[95px] pl-[28px] bg-lightestgray min-h-screen">
        <TestHeader />
        <div className="z-0">
          <div className="flex w-full justify-end items-center mt-[20px] gap-[20px] px-[12px] ">
            <div className="flex justify-self-end border-[1px] border-black/30 p-[10px] rounded-[5px]">
              <div className="relative w-[18px] h-[18px]">
                <Image src="/icons/Gray Calendar.svg" layout="fill" />
              </div>
              <select
                className="text-black/50 text-[14px] bg-inherit"
                name=""
                id=""
              >
                <option value="">5th Jan 2022 - 10th Jan 2022</option>
              </select>
            </div>

            <div className="flex  items-center  border-[1px] border-black/30 p-[10px] rounded-[5px]">
              <div className="relative w-[18px] h-[18px]">
                <Image src="/icons/Filter.svg" layout="fill" />
              </div>
              <select
                className="text-black/50 text-[14px] bg-inherit"
                name=""
                id=""
              >
                <option value="">Filter</option>
              </select>
            </div>
          </div>

          <div className="bg-lightTest h-auto">
            <div className="flex items-center text-[13px] text-black/50 mt-[20px] pt-[25px] pl-[33px] bg-lightTest">
              <div className="flex gap-[4px] items-center mr-[62px]">
                <p>Name of test</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center mr-[42px]">
                <p>Application type</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center mr-[38px]">
                <p>Environment</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center mr-[71px]">
                <p>Start time</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center mr-[60px]">
                <p>Notification</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center mr-[65px]">
                <p>Status</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center">
                <p>Action</p>
                <div className="relative w-[8px] h-[4px]">
                  <Image src="/icons/TestListArrow.svg" layout="fill" />
                </div>
              </div>
            </div>

            <div className="relative w-full h-[1px] mt-[26px]">
              <Image src="/images/Line 20.svg" layout="fill" />
            </div>

            {/* Map over this */}

            {/* <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
              <div className="flex flex-col gap-[4px] items-center w-[15%]">
                <p className="font-[500] text-black">My first test</p>
                <p>A demo test that..</p>
              </div>
              <div className="flex gap-[4px] justify-center items-center w-[15%]">
                <div className="relative w-[17px] h-[20px]">
                  <Image src="/icons/Bold IOS.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center px-[60px] w-[15%]">
                <p>Production</p>
              </div>
              <div className="flex gap-[4px] items-center ml-[35px] w-[15%]">
                <p>4 minutes ago</p>
              </div>
              <div className="flex gap-[4px] items-center w-[15%]">
                <p>Enabled</p>
              </div>
              <div className="flex gap-[4px] items-center ">
                <div className="relative w-[12px] h-[12px]">
                  <Image src="/icons/Pending.svg" layout="fill" />
                </div>
                <p className="text-pending">In Progress</p>
              </div>
              <div className="flex justify-center gap-[4px] items-center">
                <div className="relative w-[35px] h-[35px] ml-[70px]">
                  <Image src="/icons/Eye.svg" layout="fill" />
                </div>
              </div>
            </div> */}

            {/* <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
              <div className="flex flex-col gap-[4px] items-center w-[15%]">
                <p className="font-[500] text-black">My first test</p>
                <p>A demo test that..</p>
              </div>
              <div className="flex gap-[4px] justify-center items-center w-[15%]">
                <div className="relative w-[17px] h-[20px]">
                  <Image src="/icons/Bold IOS.svg" layout="fill" />
                </div>
              </div>
              <div className="flex gap-[4px] items-center px-[55px] w-[15%]">
                <p>Staging</p>
              </div>
              <div className="flex gap-[4px] items-center ml-[35px] w-[15%]">
                <p>2 days ago</p>
              </div>
              <div className="flex gap-[4px] items-center w-[15%]">
                <p>Enabled</p>
              </div>
              <div className="flex gap-[4px] items-center ">
                <div className="relative w-[12px] h-[12px]">
                  <Image src="/icons/Pending.svg" layout="fill" />
                </div>
                <p className="text-pending">Pedning</p>
              </div>
              <div className="flex justify-center gap-[4px] items-center">
                <div className="relative w-[35px] h-[35px] ml-[70px]">
                  <Image src="/icons/Eye.svg" layout="fill" />
                </div>
              </div>
            </div> */}

            {testType === "All" && (
              <>
                <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
                  <div className="flex flex-col gap-[4px] items-center w-[15%]">
                    <p className="font-[500] text-black">My first test</p>
                    <p>A demo test that..</p>
                  </div>
                  <div className="flex gap-[4px] justify-center items-center w-[15%]">
                    <div className="relative w-[17px] h-[20px]">
                      <Image src="/icons/Bold IOS.svg" layout="fill" />
                    </div>
                  </div>
                  <div className="flex gap-[4px] items-center px-[55px] w-[15%]">
                    <p>Staging</p>
                  </div>
                  <div className="flex gap-[4px] items-center ml-[35px] w-[15%]">
                    <p>2 days ago</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[15%]">
                    <p>Enabled</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[13%]">
                    <div className="relative w-[12px] h-[12px]">
                      <Image src="/icons/Pending.svg" layout="fill" />
                    </div>
                    <p className="text-pending">
                      <span className="pl-[5px]">In Progress</span>
                    </p>
                  </div>
                  <div className="flex justify-center gap-[4px] items-center w-[5%]">
                    <div className="relative w-[35px] h-[35px] ">
                      <Image src="/icons/Eye.svg" layout="fill" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
                  <div className="flex flex-col gap-[4px] items-center w-[15%]">
                    <p className="font-[500] text-black">My first test</p>
                    <p>A demo test that..</p>
                  </div>
                  <div className="flex gap-[4px] justify-center items-center w-[15%]">
                    <div className="relative w-[17px] h-[20px]">
                      <Image src="/icons/Bold IOS.svg" layout="fill" />
                    </div>
                  </div>
                  <div className="flex gap-[4px] items-center px-[55px] w-[15%]">
                    <p>Production</p>
                  </div>
                  <div className="flex gap-[4px] items-center ml-[35px] w-[15%]">
                    <p>2 days ago</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[15%]">
                    <p>Enabled</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[13%]">
                    <div className="relative w-[12px] h-[12px]">
                      <Image src="/icons/Pending.svg" layout="fill" />
                    </div>
                    <p className="text-pending">
                      <span className="pl-[5px]">Completed</span>
                    </p>
                  </div>
                  <div className="flex justify-center gap-[4px] items-center w-[5%]">
                    <div className="relative w-[35px] h-[35px] ">
                      <Image src="/icons/Eye.svg" layout="fill" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {testType !== "All" && (
              <>
                <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
                  <div className="flex flex-col gap-[4px] items-center w-[15%]">
                    <p className="font-[500] text-black">My first test</p>
                    <p>A demo test that..</p>
                  </div>
                  <div className="flex gap-[4px] justify-center items-center w-[15%]">
                    <div className="relative w-[17px] h-[20px]">
                      <Image
                        src={`/icons/Bold ${testType}.svg`}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[4px] items-center px-[55px] w-[15%]">
                    <p>Staging</p>
                  </div>
                  <div className="flex gap-[4px] items-center ml-[35px] w-[15%]">
                    <p>2 days ago</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[15%]">
                    <p>Enabled</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[13%]">
                    <div className="relative w-[12px] h-[12px]">
                      <Image src="/icons/Pending.svg" layout="fill" />
                    </div>
                    <p className="text-pending">
                      <span className="pl-[5px]">In Progress</span>
                    </p>
                  </div>
                  <div className="flex justify-center gap-[4px] items-center w-[5%]">
                    <div className="relative w-[35px] h-[35px] ">
                      <Image src="/icons/Eye.svg" layout="fill" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
                  <div className="flex flex-col gap-[4px] items-center w-[15%]">
                    <p className="font-[500] text-black">My first test</p>
                    <p>A demo test that..</p>
                  </div>
                  <div className="flex gap-[4px] justify-center items-center w-[15%]">
                    <div className="relative w-[17px] h-[20px]">
                      <Image
                        src={`/icons/Bold ${testType}.svg`}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[4px] items-center px-[55px] w-[15%]">
                    <p>Production</p>
                  </div>
                  <div className="flex gap-[4px] items-center ml-[35px] w-[15%]">
                    <p>2 days ago</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[15%]">
                    <p>Enabled</p>
                  </div>
                  <div className="flex gap-[4px] items-center w-[13%]">
                    <div className="relative w-[12px] h-[12px]">
                      <Image src="/icons/Pending.svg" layout="fill" />
                    </div>
                    <p className="text-pending">
                      <span className="pl-[5px]">Completed</span>
                    </p>
                  </div>
                  <div className="flex justify-center gap-[4px] items-center w-[5%]">
                    <div className="relative w-[35px] h-[35px] ">
                      <Image src="/icons/Eye.svg" layout="fill" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Test;

{
  /* <div className="flex items-center text-[13px] text-black/50 mt-[8px] h-[70px] pl-[10px] bg-white rounded-[5px]">
<div className="flex flex-col gap-[4px] items-center mr-[62px]">
  <p className="font-[500] text-black">My first test</p>
  <p>A demo test that..</p>
</div>
<div className="flex gap-[4px] justify-center items-center px-[40px]">
  <div className="relative w-[17px] h-[20px]">
    <Image src="/icons/Bold IOS.svg" layout="fill" />
  </div>
</div>
<div className="flex gap-[4px] items-center px-[60px]">
  <p>Production</p>
</div>
<div className="flex gap-[4px] items-center mr-[71px]">
  <p>4 minutes ago</p>
</div>
<div className="flex gap-[4px] items-center mr-[70px]">
  <p>Enabled</p>
</div>
<div className="flex gap-[4px] items-center ">
  <div className="relative w-[12px] h-[12px]">
    <Image src="/icons/Pending.svg" layout="fill" />
  </div>
  <p className="text-pending">Pending</p>
</div>
<div className="flex justify-center gap-[4px] items-center">
  <div className="relative w-[35px] h-[35px] ml-[70px]">
    <Image src="/icons/Eye.svg" layout="fill" />
  </div>
</div>
</div> */
}
