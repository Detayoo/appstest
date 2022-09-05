import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

import { OtherButton, DemoButton } from "../../reusables/Buttons";
import { useDashboard } from "../../context/Dashboard-Context";

const StepThree = () => {
  const { platform, setStep, setDashboardModal } = useDashboard();
  const formik = useFormik({
    initialValues: {
      uploadFile: "",
      minimumReq: "",
      production: "",
      URL: "",
      browserType: "",
      baseUrl: "",
    },
    validationSchema: Yup.object({
      // production: Yup.string()
      //   // .min(8, "Must be at least 8 characters")
      //   .required("You have to fill this in"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleProduction = (e) => (formik.values.production = e.target.value);

  console.log(formik.values);

  //if the platform is Android or IOS
  const MobileFlow = () => {
    return (
      <div className=" bg-white ml-[20px] h-auto w-[45.3%] rounded-[5px] pl-[28px] pr-[30px] pt-[20px] pb-[30px]">
        <div className="flex justify-between items-center">
          <p className="font-[400] text-[18px] tracking-tight">
            Create a new test
          </p>
          <div
            onClick={() => setDashboardModal(false)}
            className="relative w-[13px] h-[13px] cursor-pointer"
          >
            <Image src="/icons/Close.svg" layout="fill" />
          </div>
        </div>
        <div className="relative w-[100%] h-[8px] mt-[11px]">
          <Image src="/images/Modal Line.svg" layout="fill" />
        </div>
        <div className="flex justify-end mt-[18px]">
          <div className="flex h-[10px] w-[30%] rounded-[15px]">
            <div className="bg-lightGreen w-[75%] rounded-l-[15px]"></div>
            <div className="bg-gray w-[25%] rounded-r-[15px]"></div>
          </div>
        </div>
        <p className="text-black/50 text-right mr-[38px] text-[12px] mt-[8px]">
          3 of 4 complete
        </p>
        <p className="text-center font-[500] text-[17px] mt-[8px]">
          {platform} application details
        </p>
        <p className="text-black/60 text-[13px] text-center mt-[5px]">
          You can now proceed to add the application details by <br /> uploading
          an APK file
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="px-[60px] mt-[22px]">
            <div>
              <p className="text-[14px] font-[500]">Upload File</p>
              <label className="text-[14px]" htmlFor="uploadFile">
                <div className="w-full flex items-center  bg-lightAsh mt-[5px] rounded-[5px]">
                  <div className="w-[69%] pl-[10px] text-black/60">
                    Upload your app file (e.g. APK file)
                  </div>
                  <div className="bg-green py-[12px] w-[31%]  text-white rounded-[5px] flex justify-center gap-[8px]">
                    <div className="relative w-[18.5px] h-[17px]">
                      <Image src="/icons/Step Three Upload.svg" layout="fill" />
                    </div>
                    <p>Upload</p>
                  </div>
                </div>
              </label>
            </div>
            <input
              type="file"
              className="bg-lightAsh w-[100%]rounded-[5px] py-[12px] placeholder:font-[400] placeholder:text-[14px]  pl-[10px] text-[13px] font-[400] border-white border-[1px]"
              id="uploadFile"
              // placeholder="Test name"
              name="uploadFile"
              {...formik.getFieldProps("uploadFile")}
            />
          </div>
          <div className="px-[60px] mt-[24px]">
            <div className="flex items-center gap-[8px]">
              <div className="relative w-[18px] h-[20px]">
                <Image
                  src={
                    platform === "Android"
                      ? "/icons/Step Three Android.svg"
                      : "/icons/Step Three IOS.svg"
                  }
                  layout="fill"
                />
              </div>
              <label className="text-[13px] font-[500]" htmlFor="">
                {platform} Minimum Device version
              </label>
            </div>
            <select
              className="bg-lightAsh mt-[8px]  w-[100%] rounded-[5px] py-[12px] placeholder:font-[400] placeholder:text-[14px]  pl-[10px] text-[13px] font-[400] border-white border-[1px]"
              name="minimumReq"
              {...formik.getFieldProps("minimumReq")}
            >
              <option value="">Select</option>
              <option value="7.0" className="">
                7.0
              </option>
              <option value="8.0" className="">
                8.0
              </option>
            </select>
          </div>

          <div className="px-[60px] mt-[22px]">
            <label className="text-[14px] font-[500]">
              Is System in Production?
            </label>
            <br />
            <div className="flex gap-[15px] mt-[14px] text-[14px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  className="w-[23px] h-[23px] accent-green"
                  name="production"
                  value="yes"
                  onChange={(e) => handleProduction(e)}
                />
                Yes
              </div>

              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  className="ml-[20px] w-[23px] h-[23px] accent-green"
                  name="production"
                  // checked={formik.values.production === "no"}
                  value="no"
                  onChange={(e) => handleProduction(e)}
                  // {...formik.getFieldProps("production")}
                />
                No
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mx-[45px] mt-[35px]">
            {platform && (
              <OtherButton
                text="Back"
                className="py-[10px] px-[28px]"
                onClick={() => setStep("two")}
                type="button"
              />
            )}
            <DemoButton
              text="Next"
              className={`py-[10px] px-[28px] bg-green/10 text-white/80 ${
                platform && "bg-green text-white/100"
              }`}
              disabled={!platform}
              onClick={() => setStep("four")}
            />
          </div>
        </form>
      </div>
    );
  };

  //if the platform is Web
  const WebFlow = () => {
    return (
      <div className=" bg-white ml-[20px] h-auto w-[45.3%] rounded-[5px] pl-[28px] pr-[30px] pt-[20px] pb-[30px]">
        <div className="flex justify-between items-center">
          <p className="font-[400] text-[18px] tracking-tight">
            Create a new test
          </p>
          <div
            onClick={() => setDashboardModal(false)}
            className="relative w-[13px] h-[13px] cursor-pointer"
          >
            <Image src="/icons/Close.svg" layout="fill" />
          </div>
        </div>
        <div className="relative w-[100%] h-[8px] mt-[11px]">
          <Image src="/images/Modal Line.svg" layout="fill" />
        </div>
        <div className="flex justify-end mt-[18px]">
          <div className="flex h-[10px] w-[30%] rounded-[15px]">
            <div className="bg-lightGreen w-[75%] rounded-l-[15px]"></div>
            <div className="bg-gray w-[25%] rounded-r-[15px]"></div>
          </div>
        </div>
        <p className="text-black/50 text-right mr-[38px] text-[12px] mt-[8px]">
          3 of 4 complete
        </p>
        <p className="text-center font-[500] text-[17px] mt-[8px]">
          {platform} application details
        </p>
        <p className="text-black/60 text-[14px] text-center mt-[5px]">
          To add a new app to the testing list, simply add its details below.
        </p>
        <form action="">
          <div className="px-[60px] mt-[22px]">
            <div>
              <label htmlFor="">URL</label>
              <input
                type="text"
                name="URL"
                {...formik.getFieldProps("URL")}
                placeholder="https://example.appstest.io/web/"
                className="bg-lightAsh w-full rounded-[5px] text-[13px] mt-[6px] py-[12px] pl-[10px] placeholder:font-[400] placeholder:text-black/30 placeholder:text-[14px]"
              />
            </div>
          </div>
          <div className="px-[60px] mt-[24px]">
            <label className="text-[13px] font-[500]" htmlFor="">
              Browser type
            </label>
            <select
              className="bg-lightAsh mt-[8px] text-black/50  w-[100%] rounded-[5px] py-[12px] placeholder:font-[400] placeholder:text-[14px]  pl-[10px] text-[13px] font-[400] border-white border-[1px]"
              name="browserType"
              {...formik.getFieldProps("browserType")}
            >
              <option value="" className="">
                Select browser type
              </option>
              <option value="chrome" className="">
                Chrome
              </option>
            </select>
          </div>

          <div className="px-[60px] mt-[22px]">
            <label className="text-[14px] font-[500]">
              Is System in Production?
            </label>
            <br />
            <div className="flex gap-[15px] mt-[14px] text-[14px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="production"
                  value="yes"
                  onChange={(e) => handleProduction(e)}
                  className="w-[23px] h-[23px] accent-green"
                />
                Yes
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="production"
                  value="no"
                  onChange={(e) => handleProduction(e)}
                  className="ml-[20px] w-[23px] h-[23px] accent-green"
                />
                No
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mx-[45px] mt-[35px]">
            {platform && (
              <OtherButton
                text="Back"
                className="py-[10px] px-[28px]"
                onClick={() => setStep("two")}
                type="button"
              />
            )}
            <DemoButton
              text="Next"
              className={`py-[10px] px-[28px] bg-green/10 text-white/80 ${
                platform && "bg-green text-white/100"
              }`}
              disabled={!platform}
              onClick={() => setStep("four")}
            />
          </div>
        </form>
      </div>
    );
  };

  //   if the platform is API
  const ApiFlow = () => {
    return (
      <div className=" bg-white ml-[20px] h-auto w-[45.3%] rounded-[5px] pl-[28px] pr-[30px] pt-[20px] pb-[30px]">
        <div className="flex justify-between items-center">
          <p className="font-[400] text-[18px] tracking-tight">
            Create a new test
          </p>
          <div
            onClick={() => setDashboardModal(false)}
            className="relative w-[13px] h-[13px] cursor-pointer"
          >
            <Image src="/icons/Close.svg" layout="fill" />
          </div>
        </div>
        <div className="relative w-[100%] h-[8px] mt-[11px]">
          <Image src="/images/Modal Line.svg" layout="fill" />
        </div>
        <div className="flex justify-end mt-[18px]">
          <div className="flex h-[10px] w-[30%] rounded-[15px]">
            <div className="bg-lightGreen w-[75%] rounded-l-[15px]"></div>
            <div className="bg-gray w-[25%] rounded-r-[15px]"></div>
          </div>
        </div>
        <p className="text-black/50 text-right mr-[38px] text-[12px] mt-[8px]">
          3 of 4 complete
        </p>
        <p className="text-center font-[500] text-[17px] mt-[8px]">
          {platform} application details
        </p>
        <p className="text-black/60 text-[14px] text-center mt-[5px]">
          To add a new app to the testing list, simply add its details below.
        </p>
        <form action="">
          <div className="px-[60px] mt-[22px] text-[14px]">
            <div>
              <label htmlFor="">Resource Base URL</label>
              <input
                type="text"
                name="baseURL"
                {...formik.getFieldProps("baseURL")}
                placeholder="https://example.appstest.io/web/"
                className="bg-lightAsh w-full rounded-[5px] mt-[6px] py-[12px] pl-[10px] placeholder:font-[400] placeholder:text-black/30 placeholder:text-[14px]"
              />
            </div>
          </div>

          <div className="px-[60px] mt-[22px]">
            <label className="text-[14px] font-[500]">
              Is System in Production?
            </label>
            <br />
            <div className="flex gap-[15px] mt-[14px] text-[14px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="production"
                  value="yes"
                  onChange={(e) => handleProduction(e)}
                  className="w-[23px] h-[23px] accent-green"
                />
                Yes
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="production"
                  value="no"
                  onChange={(e) => handleProduction(e)}
                  className="ml-[20px] w-[23px] h-[23px] accent-green"
                />
                No
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mx-[45px] mt-[50px]">
            <OtherButton
              text="Back"
              className="py-[10px] px-[28px]"
              onClick={() => setStep("two")}
              type="button"
            />

            <DemoButton
              text="Next"
              className={`py-[10px] px-[28px] bg-green/10 text-white/80 ${
                platform && "bg-green text-white/100"
              }`}
              onClick={() => setStep("four")}
            />
          </div>
        </form>
      </div>
    );
  };

  const renderStepThree = () => {
    return (
      <>
        {(platform === "Android" || platform === "IOS") && <MobileFlow />}
        {platform === "Web" && <WebFlow />}
        {platform === "API" && <ApiFlow />}
      </>
    );
  };

  return renderStepThree();
};

export default StepThree;
