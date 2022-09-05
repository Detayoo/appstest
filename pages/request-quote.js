import Image from "next/image";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import RequestSidebar from "../components/RequestsSidebar";
import { PrimaryButton } from "../reusables/Buttons";

const RequestQuote = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      workEmail: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("You have to fill this in"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { firstName, lastName, workEmail, phoneNumber } = formik.values;

  console.log(formik.values);
  const next = (e) => {
    e.preventDefault();
    Router.push("/confirm-email");
  };

  // const defaultForm = {
  //   firstName: "",
  //   lastName: "",
  //   workEmail: "",
  //   phoneNumber: "",
  // };

  // const [quoteForm, setQuoteForm] = useState(defaultForm);
  // const { firstName, lastName, workEmail, phoneNumber } = quoteForm;
  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setQuoteForm({ ...quoteForm, [name]: value });
  // };

  return (
    <div className="flex w-full">
      <RequestSidebar />
      <div className="w-[56.2%] h-[100vh] pl-[102px] pr-[140px] pt-[70px]">
        <div className="relative w-[22px] h-[20px]">
          <Image src="/icons/BackButton.svg" layout="fill" />
        </div>
        <div className="flex gap-[18px] items-center mt-[37px]">
          <h1 className="text-[24px]">Request Quote</h1>
          <div className="relative w-[26px] h-[33px]">
            <Image src="/icons/Padlock.svg" layout="fill" objectFit="cover" />
          </div>
        </div>

        <form className="mt-[38px] onSubmit={formik.handleSubmit}">
          <div className="flex gap-[30px]">
            <div className="w-[50%]">
              <label className="text-[14px]" htmlFor="">
                First Name
              </label>
              <br />
              <div
                className={`bg-inputGray flex items-center px-[20px] mt-[10px] rounded-[5px] border-b-[1px] ${
                  firstName ? "border-green" : "border-white"
                } `}
              >
                <div className="relative w-[25px] h-[25px]">
                  <Image
                    src={
                      firstName
                        ? "/icons/Active Profile.svg"
                        : "/icons/Profile.svg"
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-[1px] h-[33px] mx-[15px]">
                  <Image src="/icons/ThinLine.svg" layout="fill" />
                </div>
                <input
                  className="text-[14px] bg-inputGray py-[12px] placeholder:text-black/50 placeholder:font-[500] w-[100%]"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
              </div>
            </div>

            <div className="w-[50%]">
              <label className="text-[14px]" htmlFor="">
                Last Name
              </label>
              <br />
              <div
                className={`text-[14px] bg-inputGray flex items-center px-[20px] mt-[10px] rounded-[5px] border-b-[1px] ${
                  lastName ? "border-green" : "border-white"
                }`}
              >
                <div className="relative w-[25px] h-[25px]">
                  <Image
                    src={
                      lastName
                        ? "/icons/Active Profile.svg"
                        : "/icons/Profile.svg"
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-[1px] h-[33px] mx-[15px]">
                  <Image src="/icons/ThinLine.svg" layout="fill" />
                </div>
                <input
                  className="text-[14px] bg-inputGray py-[12px] placeholder:text-black/50 placeholder:font-[500] w-[100%]"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  {...formik.getFieldProps("lastName")}
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-[23px]">
            <label className="text-[14px]" htmlFor="">
              Work Email
            </label>
            <br />
            <div
              className={`bg-inputGray  flex items-center px-[20px] mt-[10px] rounded-[5px] border-b-[1px] ${
                workEmail ? "border-green" : "border-white"
              }`}
            >
              <div className="relative w-[22px] h-[18px] m-[2px]">
                <Image
                  src="/icons/Message.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[1px] h-[33px] mx-[15px]">
                <Image
                  src="/icons/ThinLine.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <input
                className="text-[14px] bg-inputGray py-[12px] placeholder:text-black/50 placeholder:font-[500] w-[100%]"
                type="text"
                placeholder="Enter your work email address"
                name="workEmail"
                {...formik.getFieldProps("workEmail")}
              />
            </div>
          </div>

          <div className="mt-[23px] w-[100%] ">
            <label htmlFor="" className="text-[14px]">
              Phone Number
            </label>{" "}
            <br />
            <div className="flex gap-[9px] mt-[10px]">
              <p
                className={`py-[10px] px-[20px] bg-inputGray rounded-[5px] text-black/50 font-[500] border-b-[1px] border-white ${
                  phoneNumber && "text-black/100 border-green"
                }`}
              >
                +234
              </p>
              <input
                className={`text-[14px] bg-inputGray w-[90%] pl-[20px] placeholder:text-black/50 placeholder:font-[500] rounded-[5px] border-b-[1px] ${
                  phoneNumber ? "border-green" : "border-white"
                }`}
                type="text"
                placeholder="90000000000"
                name="phoneNumber"
                {...formik.getFieldProps("phoneNumber")}
              />
            </div>
          </div>
          <PrimaryButton
            className="mt-[48px] py-[12px] px-[63px]"
            text="Request Quote"
            onClick={next}
          />
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
