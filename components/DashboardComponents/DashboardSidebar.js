import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import List from "../../utils/RouteList";
import { PrimaryButton } from "../../reusables/Buttons";

const DashboardSidebar = () => {
  const router = useRouter();
  const ActiveLink = (href) => useRouter().pathname.startsWith(href);
  const showCreateTestBtn = useRouter().pathname.startsWith("/dashboard");

  return (
    <div className="bg-white w-[20.7%] h-screen sticky top-0 left-0 ">
      <div className="bg-green h-[178px] flex justify-center items-center">
        <div className="relative w-[139.45px] h-[32.81px]">
          <Image src="/images/Betamoney.svg" layout="fill" />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center w-full  mt-[40px] ">
          {!showCreateTestBtn && (
            <div
              onClick={() => router.push("/tests/create-test")}
              className="flex bg-green items-center gap-[5px] px-[47px] rounded-[5px] mt-[4px] mb-[-23px] cursor-pointer"
            >
              <PrimaryButton
                text="Create test"
                className=" py-[11px] font-[400]"
              />
              <div className="relative w-[10px] h-[5px]">
                <Image src="/icons/CreateTest.svg" layout="fill" />
              </div>
            </div>
          )}
        </div>
        <div className={`flex flex-col mt-[48px] mx-[22px]`}>
          {List.map((route) => {
            return (
              <Link href={route.url} key={route.name}>
                <div
                  className={`flex items-center justify-center gap-[10px] py-[12px] mb-[16px] rounded-[5px] cursor-pointer ${
                    ActiveLink(route.url) && "bg-green/10"
                  }`}
                >
                  <div className="relative w-[18px] h-[18px] ml-[20px]">
                    <Image
                      src={
                        ActiveLink(route.url) ? route.activeImage : route.image
                      }
                      layout="fill"
                    />
                  </div>
                  <p
                    className={`w-[40%] ml-[10px] text-black/50 ${
                      ActiveLink(route.url) && "font-[500] text-green/90"
                    }`}
                  >
                    {route.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="flex justify-center items-center mt-[55px] gap-[15px] text-green font-[600]">
          <div className="relative w-[19px] h-[19px]">
            <Image src="/icons/Logout.svg" layout="fill" />
          </div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
