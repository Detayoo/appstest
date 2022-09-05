import Link from "next/link";
import Image from "next/image";

import TestersDashboardLayout from "../../layouts/TestersDashboardLayout";

const Tester = () => {
  return (
    <TestersDashboardLayout>
      {/* <div className="pt-[30px] pl-[28px] min-h-screen">
        <p className="h-[70px] font-[500] text-[23px]">Available Tests</p>

        <div className="flex flex-wrap gap-x-[20px] gap-y-[42px]">
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px]  border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>

          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
          <div className="bg-white w-[22.7%]">
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
              <a className="text-[14px] bg-green text-white block py-[13px] text-center rounded-b-[5px] border-[1px] border-green hover:bg-white hover:text-green hover:border-[1px] hover:border-green">
                View details
              </a>
            </Link>
          </div>
        </div>
      </div> */}
    </TestersDashboardLayout>
  );
};

export default Tester;
