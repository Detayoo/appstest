import Image from "next/image";
import Link from "next/link";
const TeamsSidebar = () => {
  return (
    <div className="w-[25%] minh-h-screen flex flex-col sticky top-0 right-0 mt-[-20px] gap-[30px]">
      <div className="bg-white">
        <div className="flex flex-col min-h-[110px] bg-green/10 rounded-t-[5px]">
          <div className="relative w-[40px] h-[40px] self-end">
            <Image src="/icons/TeamsPage Web.svg" layout="fill" />
          </div>
          <p className="font-[500] text-[20px] mt-[2px]  text-green text-center">
            PROVIDUS BANK
          </p>
        </div>
        <div className="pl-[15px] pt-[5px] pb-[18px]">
          <div className="mt-[15px] text-black/50">
            <div className="flex items-center gap-[10px]">
              <p>Browser types:</p>
              <div className="relative w-[17px] h-[17px]">
                <Image src="/icons/Chrome.svg" layout="fill" />
              </div>
              <div className="relative w-[17px] h-[17px]">
                <Image src="/icons/Edge.svg" layout="fill" />
              </div>
              <div className="relative w-[17px] h-[17px]">
                <Image src="/icons/Firefox.svg" layout="fill" />
              </div>
            </div>
          </div>

          <div className="mt-[10px] text-black/50">
            <div className="flex items-center gap-[10px]">
              <p>
                Total bugs: {}
                <span className="text-black/100 font-[500]">15</span>
              </p>
            </div>
          </div>

          <div className="mt-[10px] text-black/50">
            <div className="flex items-center gap-[10px]">
              <p>
                My submitted bugs: {}
                <span className="text-black/100 font-[500]">2</span>
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <a className="text-[14px] bg-green border-[1px] border-green text-white block py-[13px] text-center rounded-b-[5px] hover:text-green hover:bg-white">
            View details
          </a>
        </Link>
      </div>

      <div className="bg-white">
        <div className="flex flex-col min-h-[110px] bg-green/10 rounded-t-[5px]">
          <div className="relative w-[40px] h-[40px] self-end">
            <Image src="/icons/TeamsPage IOS.svg" layout="fill" />
          </div>
          <p className="font-[500] text-[20px] mt-[2px]  text-green text-center">
            BETAMONEY
          </p>
        </div>
        <div className="pl-[15px] pt-[5px] pb-[18px]">
          <div className="mt-[15px] text-black/50">
            <p>
              Minimum version: {}
              <span className="text-black/100 font-[500]">10</span>
            </p>
          </div>

          <div className="mt-[10px] text-black/50">
            <div className="flex items-center gap-[10px]">
              <p>
                Total bugs: {}
                <span className="text-black/100 font-[500]">15</span>
              </p>
            </div>
          </div>

          <div className="mt-[10px] text-black/50">
            <div className="flex items-center gap-[10px]">
              <p>
                My submitted bugs: {}
                <span className="text-black/100 font-[500]">2</span>
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <a className="text-[14px] bg-green text-white block py-[13px]  border-[1px] border-green text-center rounded-b-[5px] hover:text-green hover:bg-white">
            View details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamsSidebar;
