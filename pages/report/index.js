import Image from "next/image";
import DashboardLayout from "../../layouts/DashboardLayout";
import { PrimaryButton } from "../../reusables/Buttons";
const Report = () => {
  return (
    <DashboardLayout>
      <div className="pr-[62px] pb-[60px] pl-[28px] bg-lightestgray min-h-screen">
        <div className="pt-[37px] bg-lightestgray sticky top-[57px] right-0 z-50">
          <div className="flex justify-between">
            <p className="text-[23px] font-[500] tracking-tight leading-normal text-black/90">
              My first tests
            </p>

            <PrimaryButton
              text="Create test"
              className="py-[12px] px-[32px] font-[400]"
            />
          </div>
          <p className="text-[24px] font-[500] mt-[5px]">Report</p>
        </div>

        <div className="mt-[35px]">
          <div className="flex justify-between h-[260px]">
            <div className="bg-white w-[56.5%] rounded-[5px]">
              <div className="relative w-[68px] h-[48px]">
                <Image src="/icons/Sticky Web Image.svg" layout="fill" />
              </div>
              <div className="flex flex-wrap gap-[78px] px-[70px] mb-[20px]">
                <div>
                  <p className="text-black/60">Start time</p>
                  <p className="text-[15px] mt-[3px]">2nd April 2022 6:15PM</p>
                </div>
                <div>
                  <p className="text-black/60">Agent</p>
                  <div className="flex items-center gap-[12px] mt-[3px]">
                    <div className="relative w-[20px] h-[20px]">
                      <Image
                        src="/icons/Windows.svg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-[15px]">Windows 10 Agent</p>
                  </div>
                </div>
              </div>
              <div className="pl-[70px] pr-[180px] flex justify-between mb-[20px]">
                <div>
                  <p className="text-black/60">Total duration</p>
                  <p className="text-[15px] mt-[3px]">00:01:12:322</p>
                </div>

                <div>
                  <p className="text-black/60">Total tests</p>
                  <p className="text-[15px] mt-[3px]">3</p>
                </div>
              </div>
              <div className="px-[70px] flex justify-between">
                <div>
                  <p className="text-black/60">Executed by Tester</p>
                  <p className="text-[15px]">Idris Mumeen</p>
                </div>
              </div>
            </div>

            <div className="bg-white w-[40.5%] rounded-[5px] pt-[26px] ">
              <p className="text-black/60 text-[15px] pl-[24px]">
                Tests Statistics
              </p>

              <div className="flex mt-[20px] text-[12px]">
                <div className="relative w-[155px] h-[155px]">
                  <Image src="/images/Chart.svg" layout="fill" />
                </div>
                <div className="flex-1 flex gap-x-[20px] flex-wrap  mt-[20px]">
                  <div className="flex items-center gap-x-[10px]">
                    <div className="relative w-[18px] h-[18px]">
                      <Image
                        src="/icons/Critical Statistic.svg"
                        layout="fill"
                      />
                    </div>
                    <p>Critical (0%)</p>
                  </div>

                  <div className="flex items-center gap-x-[10px]">
                    <div className="relative w-[18px] h-[18px]">
                      <Image src="/icons/High Statistic.svg" layout="fill" />
                    </div>
                    <p>High (0%)</p>
                  </div>

                  <div className="flex items-center gap-x-[10px]">
                    <div className="relative w-[18px] h-[18px]">
                      <Image src="/icons/Medium Statistic.svg" layout="fill" />
                    </div>
                    <p>Medium (0%)</p>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="relative w-[18px] h-[18px]">
                      <Image src="/icons/Low Statistic.svg" layout="fill" />
                    </div>
                    <p>Low (0%)</p>
                  </div>

                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="relative w-[18px] h-[18px]">
                      <Image src="/icons/Passed Statistic.svg" layout="fill" />
                    </div>
                    <p>Passed (90%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex">
          <p className="mr-[88px] ">Success Ratio</p>

          <div className="flex gap-x-[70px]">
            <div className="flex flex-col justify-center">
              <p>90%</p>
              <div className="relative w-[36px] h-[36px] mt-[15px]">
                <Image
                  src="/icons/Chrome.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p>90%</p>
              <div className="relative w-[36px] h-[36px] mt-[15px]">
                <Image src="/icons/Edge.svg" layout="fill" objectFit="cover" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p>90%</p>
              <div className="relative w-[36px] h-[36px] mt-[15px]">
                <Image
                  src="/icons/Firefox.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[15px] bg-lightTest rounded-[5px]">
          <div className="text-[13px] flex pl-[35px] pt-[20px]">
            <div className="flex items-center gap-[5px] w-[31.7%]">
              <p className="text-black/60">Test name</p>
              <div className="relative w-[8px] h-[4px]">
                <Image src="/icons/TestListArrow.svg" layout="fill" />
              </div>
            </div>

            <div className="flex items-center gap-[5px] w-[33%]">
              <p className="text-black/60">Application type</p>
              <div className="relative w-[8px] h-[4px]">
                <Image src="/icons/TestListArrow.svg" layout="fill" />
              </div>
            </div>

            <div className="flex items-center gap-[5px] w-[20.8%]">
              <p className="text-black/60">Total Duration</p>
              <div className="relative w-[8px] h-[4px]">
                <Image src="/icons/TestListArrow.svg" layout="fill" />
              </div>
            </div>

            <div className="flex items-center gap-[5px]">
              <p className="text-black/60">Status</p>
            </div>
          </div>
          <div className="relative w-full h-[2px] mt-[15px]">
            <Image src="/images/Report Line.svg" layout="fill" />
          </div>

          {/* First Item */}
          <div className="bg-white border-l-[5px] rounded-r-[5px] border-pinkBg h-[68px] pl-[20px] flex items-center text-[13px] mt-[15px]">
            <div className="flex flex-col justify-center w-[31.7%]">
              <p>Login Positive</p>
              <p className="text-reportGreen">Go to test</p>
            </div>

            <div className="w-[33%] ">
              <div className="relative w-[25px] h-[25px] ml-[50px]">
                <Image src="/icons/Web.svg" layout="fill" />
              </div>
            </div>

            <div className="text-black/50 w-[20.8%]">00:00:02:322</div>
            <div className="text-black/50">Failed</div>
          </div>

          <div className="bg-white border-l-[5px] rounded-r-[5px] border-reportGreen h-[68px] pl-[20px] flex items-center text-[13px] mt-[15px]">
            <div className="flex flex-col justify-center w-[31.7%]">
              <p>Login Positive</p>
              <p className="text-reportGreen">Go to test</p>
            </div>

            <div className="w-[33%] ">
              <div className="relative w-[25px] h-[25px] ml-[50px]">
                <Image src="/icons/Web.svg" layout="fill" />
              </div>
            </div>

            <div className="text-black/50 w-[20.8%]">00:00:02:322</div>
            <div className="text-black/50">Passed</div>
          </div>

          <div className="bg-white border-l-[5px] rounded-r-[5px] border-pinkBg h-[68px] pl-[20px] flex items-center text-[13px] mt-[15px]">
            <div className="flex flex-col justify-center w-[31.7%]">
              <p>Login Positive</p>
              <p className="text-reportGreen">Go to test</p>
            </div>

            <div className="w-[33%] ">
              <div className="relative w-[25px] h-[25px] ml-[50px]">
                <Image src="/icons/Web.svg" layout="fill" />
              </div>
            </div>

            <div className="text-black/50 w-[20.8%]">00:00:02:322</div>
            <div className="text-black/50">Failed</div>
          </div>

          <div className="bg-white border-l-[5px] rounded-r-[5px] border-reportGreen h-[68px] pl-[20px] flex items-center text-[13px] mt-[15px]">
            <div className="flex flex-col justify-center w-[31.7%]">
              <p>Add User</p>
              <p className="text-reportGreen">Go to test</p>
            </div>

            <div className="w-[33%] ">
              <div className="relative w-[25px] h-[25px] ml-[50px]">
                <Image src="/icons/Web.svg" layout="fill" />
              </div>
            </div>

            <div className="text-black/50 w-[20.8%]">00:00:02:322</div>
            <div className="text-black/50">Passed</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Report;
