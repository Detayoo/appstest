import Image from "next/image";

const RequestSidebar = () => {
  return (
    <div className="w-[41.5%] h-[100vh] py-[98px] pl-[72px] bg-green text-white font-[300] ">
      <h1 className="text-[26px]">Discover how we can help you.</h1>
      <p className="text-[15px] mt-[15px] ">
        We’ve tested over 100+ applications and can help you:
      </p>
      <div className="flex gap-[20px] mt-[28px] text-[15px]">
        <div className="relative w-[21px] h-[21px]">
          <Image src="/icons/Mark.svg" layout="fill" objectFit="cover" />
        </div>
        <p className="">
          Increase development and QA efficiency for <br /> team impact.
        </p>
      </div>
      <div className="flex gap-[20px] mt-[25px] text-[15px]">
        <div className="relative w-[21px] h-[21px]">
          <Image src="/icons/Mark.svg" layout="fill" objectFit="cover" />
        </div>
        <p className="">
          Effectively manage tests and decrease the time required <br /> on
          designing and coding manual to automated tests.
        </p>
      </div>
      <div className="flex gap-[20px] mt-[25px] text-[15px]">
        <div className="relative w-[21px] h-[21px]">
          <Image src="/icons/Mark.svg" layout="fill" objectFit="cover" />
        </div>
        <p className="">
          Conduct rapid regression testing to increase release <br />{" "}
          confidence.
        </p>
      </div>
      <div className="flex gap-[20px] mt-[25px] mb-[40px] text-[15px]">
        <div className="relative w-[21px] h-[21px]">
          <Image src="/icons/Mark.svg" layout="fill" objectFit="cover" />
        </div>
        <p className="">
          Design a QA strategy for long-term success and <br /> greater product
          ROI.
        </p>
      </div>
      <div className=" relative w-[405px] h-[5px]">
        <Image src="/images/Line.svg" layout="fill" />
      </div>
      <p className="mt-[28px] text-[13px]">
        Trusted by amazing development teams in the world{" "}
      </p>
      <div className="flex mt-[25px] justify-between items-center pr-[95px]">
        <div className="relative h-[18px] w-[54px]">
          <Image
            src="/images/Request-Aella.svg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative h-[22px] w-[77px]">
          <Image
            src="/images/Request-Bleyt.svg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative h-[27px] w-[91px]">
          <Image
            src="/images/Request-Inlaks.png"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative h-[21px] w-[111px]">
          <Image
            src="/images/Request-Providus.svg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestSidebar;
