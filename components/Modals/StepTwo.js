import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

import { OtherButton, DemoButton } from "../../reusables/Buttons";
import { useDashboard } from "../../context/Dashboard-Context";
const StepTwo = () => {
  const { platform, setStep, setDashboardModal } = useDashboard();
  const formik = useFormik({
    initialValues: {
      testName: "",
      testBrief: "",
    },
    validationSchema: Yup.object({
      testName: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("You have to fill this in"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values)

  return (
    <div className=" bg-white ml-[20px]  h-auto w-[45.3%] rounded-[5px] pl-[28px] pr-[30px] pt-[20px] pb-[30px]">
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
      <div className="flex justify-end mt-[15px]">
        <div className="flex h-[10px] w-[30%] rounded-[15px]">
          <div className="bg-lightGreen w-[50%] rounded-l-[15px]"></div>
          <div className="bg-gray w-[50%] rounded-r-[15px]"></div>
        </div>
      </div>
      <p className="text-black/50 text-right mr-[38px] text-[12px] mt-[8px]">
        2 of 4 complete
      </p>
      <p className="text-center font-[500] text-[17px] mt-[8px]">
        {platform} application details
      </p>
      <p className="text-black/60 text-[13px] text-center mt-[5px]">
        Provide your test a meaningful name and details, to help your <br />{" "}
        colleagues understand the test purpose.
      </p>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="px-[60px] mt-[20px]">
          <label className="text-[14px]" htmlFor="">
            Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Test name"
            name="testName"
            {...formik.getFieldProps("testName")}
            className="bg-lightAsh w-[100%]  mt-[6px] rounded-[5px] py-[12px] placeholder:font-[400] placeholder:text-[14px]  pl-[10px] text-[13px] font-[400] border-white border-[1px]"
          />
        </div>

        <div className="px-[60px] mt-[20px]">
          <p className="text-[14px]">
            Upload tests brief containing coverage areas
          </p>
          <div className="text-[14px] mt-[6px] h-[120px] w-[100%] bg-lightAsh text-center pt-[30px] border-dashed border-green/50 border-[2px] rounded-[5px]">
            <label htmlFor="upload">
              <p className="text-green underline decoration-green text-[14px] font-[500] cursor-pointer">
                Click to upload
              </p>
              <p className="text-black/30 mt-[15px] text-[12px]">
                Supported file formats are .xls(x), .doc(x), .pdf
              </p>
            </label>
          </div>

          <input
            type="file"
            className="bg-lightAsh w-[100%]  mt-[6px] rounded-[5px] py-[12px] placeholder:font-[400] placeholder:text-[14px]  pl-[10px]"
            id="upload"
            name="testBrief"
            {...formik.getFieldProps("testBrief")}
          />
        </div>

        <div className="flex justify-between items-center mx-[45px] mt-[30px]">
          <OtherButton
            text="Back"
            className="py-[10px] px-[28px]"
            onClick={() => setStep("one")}
            type="button"
          />
          <DemoButton
            text="Next"
            onClick={() => setStep("three")}
            className={`py-[10px] px-[28px] bg-green/10 text-white/80 ${
              platform && "bg-green text-white/100"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;

// mt-[70px]
