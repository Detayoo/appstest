import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-lightestgray pt-[55px] pb-[30px]">
      <div className="flex justify-center gap-[50px] ">
        <div className="flex gap-[20px] items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/icons/Phone.svg" layout="fill" objectFit="cover" />
          </div>
          <p className="font-[400] text-[18px]">+2349161206727</p>
        </div>

        <div className="flex gap-[20px] items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/icons/Mail.svg" layout="fill" objectFit="cover" />
          </div>
          <p className="font-[400] text-[18px]">usesupport@appstest.com</p>
        </div>

        <div className="flex gap-[20px] items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image src="/icons/Location.svg" layout="fill" objectFit="cover" />
          </div>
          <p className="font-[400] text-[18px]">
            The Peniel Building, Aguda, Ogba, Lagos.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[20px] mt-[50px]">
        <div className="relative w-[20px] h-[20px]">
          <Image src="/icons/Twitter.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-[9px] h-[18px]">
          <Image src="/icons/Facebook.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-[16px] h-[16px]">
          <Image src="/icons/LinkedIn.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-[17px] h-[17px]">
          <Image src="/icons/Instagram.svg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
