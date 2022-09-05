import { DemoButton } from "./Buttons";
import Image from "next/image";
const FixedBar = () => {
  return (
    <div className="bg-green fixed bottom-0 w-full flex items-center h-[65px] ml-[-26px] pl-[20px] mt-[8px]">
      <div className="flex w-[40%] items-center gap-[5px]  px-[24px] py-[10px] chat__container border-white text-white">
        <div className="relative w-[30px] h-[30px]">
          <Image src="/icons/Emoji.svg" layout="fill" />
        </div>
        <textarea
          className="h-[26px] bg-green w-[90%] ml-[15px] text-[14px] placeholder:text-[14px] placeholder:text-white placeholder:font[400] text-white font-[400]"
          placeholder="Type a message"
        ></textarea>

        <div>
          <label htmlFor="file-share">
            <div className="relative w-[25px] h-[24px]">
              <Image src="/icons/File.svg" layout="fill" />
            </div>
          </label>
          <input type="file" id="file-share" />
        </div>
      </div>
      <div className="relative w-[50px] h-[50px]">
        <Image src="/icons/Send Button.svg" layout="fill" />
      </div>
    </div>
  );
};

export default FixedBar;
