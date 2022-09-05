import Image from "next/image";
const LoginSidebar = () => {
  return (
    <div className="w-[41.5%] text-white h-auto bg-green py-[148px] pl-[95px] pr-[60px] ">
      <h1 className="text-[26px] leading-[35px]">
        On-demand testing inside the tools you already use
      </h1>
      <p className="mt-[28px] text-[15px]">
        Maximise team productivity by easily integrating your <br /> tech stack
        with our platform.
      </p>

      <div className="mt-[55px] flex flex-wrap gap-[50px] mx-[10px]">
        <div className="relative w-[91px] h-[40px]">
          <Image src="/images/Slack.svg" layout="fill" objectFit="cover" />
        </div>

        <div className="relative w-[78px] h-[40px]">
          <Image src="/images/Jira.svg" layout="fill" objectFit="cover" />
        </div>

        <div className="relative w-[102px] h-[40px]">
          <Image src="/images/GitHub.svg" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="mt-[50px] flex justify-around mx-[50px] ">
        <div className="relative w-[96px] h-[40px]">
          <Image src="/images/GitLab.svg" layout="fill" objectFit="cover" />
        </div>

        <div className="relative w-[123px] h-[40px]">
          <Image src="/images/BitBucket.svg" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default LoginSidebar;
