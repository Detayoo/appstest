import Image from "next/image";

import CommunicationSidebar from "./CommunicationSidebar";

const Communication = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[74.5%]  bg-white h-full pr-[75px] ">
          <div className="flex  gap-[25px]  mt-[20px] ">
            <div className="relative w-[50px] h-[50px]">
              <Image src="/icons/Chat Profile Picture.svg" layout="fill" />
            </div>
            <div>
              <p className="font-[500] ml-[-10px] mb-[3px]">Bernie</p>
              <div className="box3 sb14 flex justify-center">
                <p className="pr-[20px] text-[14px] text-black/80">
                  Hi there. How are you doing? My name is Harold Peters. I’m yet
                  to see the update from your end. <br />
                  <p className="text-right font-[500] text-[12px]">
                    2 days ago
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[25px]  mt-[20px] ">
            <div className="relative w-[50px] h-[50px]">
              <Image src="/icons/Chat Profile Picture.svg" layout="fill" />
            </div>
            <div>
              <p className="font-[500] ml-[-10px] mb-[3px]">Bernie</p>
              <div className="box3 sb14 flex justify-center">
                <p className="pr-[20px] text-[14px] text-black/80">
                  Hi there. How are you doing? My name is Harold Peters. I’m yet
                  to see the update from your end. <br />
                  <p className="text-right font-[500] text-[12px]">
                    2 days ago
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[25px]  mt-[20px] ">
            <div className="relative w-[50px] h-[50px]">
              <Image src="/icons/Chat Profile Picture.svg" layout="fill" />
            </div>
            <div>
              <p className="font-[500] ml-[-10px] mb-[3px]">Bernie</p>
              <div className="box3 sb14 flex justify-center">
                <p className="pr-[20px] text-[14px] text-black/80">
                  Hi there. How are you doing? My name is Harold Peters. I’m yet
                  to see the update from your end. <br />
                  <p className="text-right font-[500] text-[12px]">
                    2 days ago
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[25px]  mt-[20px] ">
            <div className="relative w-[50px] h-[50px]">
              <Image src="/icons/Chat Profile Picture.svg" layout="fill" />
            </div>
            <div>
              <p className="font-[500] ml-[-10px] mb-[3px]">Bernie</p>
              <div className="box3 sb14 flex justify-center">
                <p className="pr-[20px] text-[14px] text-black/80">
                  Hi there. How are you doing? My name is Harold Peters. I’m yet
                  to see the update from your end. <br />
                  <p className="text-right font-[500] text-[12px]">
                    2 days ago
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <CommunicationSidebar />
      </div>
      <div></div>
    </div>
  );
};

export default Communication;
