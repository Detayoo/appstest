import Image from "next/image";

import DashboardLayout from "../../layouts/DashboardLayout";
import TeamsSidebar from "../../components/TeamsPage/TeamsSidebar";
import { PrimaryButton } from "../../reusables/Buttons";
const Teams = () => {
  return (
    <DashboardLayout>
      <div className="pr-[95px] pl-[28px] bg-lightestgray min-h-[100vh]">
        <div className="pt-[37px] bg-lightestgray sticky top-[57px] right-0 z-50">
          <div className="flex justify-between">
            <p className="text-[23px] font-[500] tracking-tight leading-normal text-black/90">
              Teams
            </p>

            <PrimaryButton
              text="Add team"
              className="py-[12px] px-[32px] font-[400]"
            />
          </div>
          <div className="relative w-full h-[2px] mt-[34px]">
            <Image src="/images/Line 20.svg" layout="fill" />
          </div>
        </div>
        <div className="mt-[20px] bg-lightestgray flex justify-between text-[14px] text-black/80">
          <div className="w-[58.5%]">
            <div className="flex gap-x-[5px] items-center justify-around min-h-[60px] bg-white text-green border-x-[1px] border-t-[1px] border-black/20 rounded-t-[5px]">
              <div className="px-[15px] w-[10%]">S/N</div>
              <div className="w-[20%] px-[15px]">
                <select name="" id="" className="">
                  <option value="">Team Name</option>
                </select>
              </div>

              <div className="w-[5%] px-[15px]">
                <select name="" id="" className="">
                  <option value="">Role</option>
                </select>
              </div>

              <div className="px-[15px]">
                <select name="" id="" className="">
                  <option value="">Status</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-around min-h-[100px] bg-lightAsh">
              <div className="px-[15px] w-[10%]">1</div>

              <div className="w-[20%] px-[15px] border-black/70">
                <p>Idris Mumeen</p>
              </div>

              <div className="w-[5%] px-[15px]">
                <p>Frontend Engineer</p>
              </div>

              <div className="px-[25px]">
                <p>Admin</p>
              </div>
            </div>

            <div className="flex items-center justify-around min-h-[100px] bg-white">
              <div className="px-[15px] w-[10%]">2</div>

              <div className="w-[20%] px-[15px]">
                <p>Ridwan Ogundeko</p>
              </div>

              <div className="w-[5%] px-[15px]">
                <p>Frontend Engineer</p>
              </div>

              <div className="px-[25px]">
                <p>Admin</p>
              </div>
            </div>

            <div className="flex items-center justify-around min-h-[100px] bg-lightAsh">
              <div className="px-[15px] w-[10%]">3</div>

              <div className="w-[20%] px-[15px]">
                <p>Emmanuel Obagunwa</p>
              </div>

              <div className="w-[5%] px-[15px]">
                <p>Frontend Engineer</p>
              </div>

              <div className="px-[25px]">
                <p>Admin</p>
              </div>
            </div>

            <div className="flex items-center justify-around min-h-[100px] bg-white">
              <div className="px-[15px] w-[10%]">4</div>

              <div className="w-[20%] px-[15px]">
                <p>Ridwan Ogundeko</p>
              </div>

              <div className="w-[5%] px-[15px]">
                <p>Frontend Engineer</p>
              </div>

              <div className="px-[25px]">
                <p>Admin</p>
              </div>
            </div>
            {/* 
            <div className="flex items-center justify-around min-h-[100px] ">
              <div className="px-[15px]">2</div>

              <div className="w-[10%] px-[15px]">
                <p>Ogundeko Ridwan</p>
              </div>

              <div className="w-[10%] px-[15px]">
                <p>Frontend Engineer</p>
              </div>

              <div className="w-[10%] px-[15px]">
                <p>Member</p>
              </div>
            </div>

            <div className="flex items-center justify-around min-h-[100px] bg-lightAsh">
              <div className="px-[15px]">3</div>

              <div className="w-[10%] px-[15px]">
                <p>Obagunwa Emmanuel</p>
              </div>

              <div className="w-[10%] px-[15px]">
                <p>Chief Technical Officer</p>
              </div>

              <div className="w-[10%] px-[15px]">
                <p>Admin</p>
              </div>
            </div>

            <div className="flex items-center justify-around min-h-[100px] bg-lightAsh">
              <div className="px-[15px]">4</div>

              <div className="w-[10%] px-[15px]">
                <p>Femi Matthew</p>
              </div>

              <div className="w-[10%] px-[15px]">
                <p>CEO</p>
              </div>

              <div className="w-[10%] px-[15px]">
                <p>Member</p>
              </div>
            </div> */}
          </div>
          <TeamsSidebar />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Teams;
