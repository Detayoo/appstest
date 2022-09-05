import Image from "next/image";
const DashboardHeader = () => {
  return (
    <header className="bg-green w-full h-[57px] sticky top-0 right-0 z-30 text-white pr-[95px] flex items-center justify-end gap-[25px]">
      <div className="relative w-[20px] h-[20px]">
        <Image src="/icons/Chat.svg" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-[17px] h-[20px]">
        <Image src="/icons/Notification.svg" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-[20px] h-[20px]">
        <Image src="/icons/Setting.svg" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-[20px] h-[20px]">
        <Image src="/icons/Upload.svg" layout="fill" objectFit="cover" />
      </div>

      <div className="flex items-center gap-[8px]">
        <p className="text-[14px] font-[300]">Ademorin Ajepe</p>
        <div className="relative w-[13px] h-[8px]">
          <Image src="/icons/Arrow Down.svg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
