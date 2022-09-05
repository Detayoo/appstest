import { PrimaryButton } from "../../reusables/Buttons";
import Image from "next/image";
const TeamsHeader = () => {
  return (
    <div className="bg-lightestgray sticky top-[94px] right-0 z-50">
      <div className="flex justify-between">
        <p className="text-[23px] font-[500] tracking-tight leading-normal text-black/90">
          Teams
        </p>
        <div className="flex bg-green items-center gap-[8px] pl-[15px] cursor-pointer rounded-[5px]">
          <div className="relative w-[18px] h-[18px]">
            <Image src="/icons/Plus Sign.svg" layout="fill" />
          </div>
          <PrimaryButton
            text="Add team"
            className="py-[12px] pr-[18px] font-[400]"
          />
        </div>
      </div>
      <div className="relative w-full h-[1px] mt-[35px]">
        <Image src="/images/Line 20.svg" layout="fill" />
      </div>
    </div>
  );
};

export default TeamsHeader;
