import Image from "next/image";
import Link from "next/link";
const HowToUse = () => {
  return (
    <div className="py-[150px] px-[110px]">
      <div className="flex justify-center items-center font-[600] w-[35%] text-center mx-auto mb-[20px] py-[10px] px-[25px] rounded-[40px] text-[18px] text-green/80 bg-green/5">
        SHIP QUALITY PRODUCTS FASTER
      </div>
      <h1 className="text-[28px] font-[550] text-center">
        Get onboarded in minutes, and get your test results <br /> in hours not
        in days or months
      </h1>

      <div className="mt-[80px]">
        <div className="flex items-center gap-[15px] mb-[100px]">
          <div className="w-[48%] pr-[32px]">
            <div className="flex items-center gap-[22px]">
              <div className="relative h-[80px] w-[80px]">
                <Image src="/images/01.svg" layout="fill" objectFit="cover" />
              </div>
              <h1 className="text-[30px]">Create your team account</h1>
            </div>
            <p className="mt-[30px] text-black/70 font-[500] text-[18px]">
              Hit the ground running as soon as you're ready. Create an account
              in minutes, invite your team members and we will take care of
              every other heavy lifting for you.
            </p>
            <div className="flex items-center gap-[5px] mt-[25px] text-green font-[600] underline underline-offset-[2px] decoration-2 decoration-green/50">
              <Link href="/">
                <a href="access">Request Access</a>
              </Link>
              <div className="relative w-[12px] h-[12px]">
                <Image src="/icons/GreenArrow.png" layout="fill" />
              </div>
            </div>
          </div>
          <div className="w-[48%]">
            <div className=" relative w-[615px] h-[420px]">
              <Image src="/images/Create.png" layout="fill" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[110px] mb-[100px]">
          <div className="w-[48%]">
            <div className=" relative w-[615px] h-[420px] ml-[-25px]">
              <Image src="/images/Results.png" layout="fill" />
            </div>
          </div>
          <div className="w-[48%]">
            <div className="flex items-center gap-[15px]">
              <div className="relative h-[80px] w-[80px]">
                <Image src="/images/02.svg" layout="fill" objectFit="cover" />
              </div>
              <h1 className="text-[30px]">Setup your test schedule</h1>
            </div>
            <p className="mt-[30px] text-black/70 font-[500] text-[18px]">
              Specify the acceptance criteria and coverage area for your
              application(s) using our intuitive, modern user interface. Sit
              back, relax and wait for results
            </p>
            <div className="flex items-center gap-[5px] mt-[25px] text-green font-[600] underline underline-offset-[2px] decoration-2 decoration-green/50">
              <Link href="/">
                <a href="access">Request Access</a>
              </Link>
              <div className="relative w-[12px] h-[12px]">
                <Image src="/icons/GreenArrow.png" layout="fill" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <div className="w-[48%] pr-[32px]">
            <div className="flex items-center gap-[22px]">
              <div className="relative h-[80px] w-[80px]">
                <Image src="/images/03.svg" layout="fill" objectFit="cover" />
              </div>
              <h1 className="text-[30px]">Results</h1>
            </div>
            <p className="mt-[30px] text-black/70 font-[500] text-[17px]">
              Get your test results including analytics and recommendations via
              our intuitive dashboard or via API as part of your integrated
              workflow
            </p>
            <div className="flex items-center gap-[5px] mt-[25px] text-green font-[600] underline underline-offset-6 decoration-2 decoration-green/50">
              <Link href="/">
                <a href="access">Request Access</a>
              </Link>
              <div className="relative w-[12px] h-[12px]">
                <Image src="/icons/GreenArrow.png" layout="fill" />
              </div>
            </div>
          </div>
          <div className="w-[48%]">
            <div className=" relative w-[615px] h-[420px]">
              <Image src="/images/Results.png" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
