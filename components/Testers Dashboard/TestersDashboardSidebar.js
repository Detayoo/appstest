import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import TestersList from "../../utils/TestersList";

const TestersDashboardSidebar = () => {
  const ActiveLink = (href) => useRouter().pathname.startsWith(href);
  return (
    <div className="bg-white w-[20.7%] h-screen sticky top-0 left-0 ">
      <div className="bg-green h-[256px] flex flex-col gap-[20px] justify-center items-center">
        <div className="relative w-[96px] h-[96px]">
          <Image src="/icons/Testers Profile Pic.svg" layout="fill" />
        </div>
        <p className="text-white text-[16px] mb-[10px]">Tester Wizard</p>
      </div>
      <div>
        <div className={`flex flex-col mt-[35px] mx-[18px] text-[14px]`}>
          {TestersList.map((route) => {
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
        {/* <div className="flex justify-center items-center mt-[55px] gap-[15px] text-green font-[600]">
          <div className="relative w-[19px] h-[19px]">
            <Image src="/icons/Logout.svg" layout="fill" />
          </div>
          <p>Logout</p>
        </div> */}
      </div>
    </div>
  );
};

export default TestersDashboardSidebar;
