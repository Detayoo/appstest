import StepOne from "../Modals/StepOne";
import StepTwo from "../Modals/StepTwo";
import StepThree from "../Modals/StepThree";
import StepFour from "../Modals/StepFour";
import { useDashboard } from "../../context/Dashboard-Context";
import Modal from "../Modal";

const DashboardModal = () => {
  const { step } = useDashboard();

  const renderPlatformModal = () => {
    return (
      <>
        {step === "one" && <StepOne />}
        {step === "two" && <StepTwo />}
        {step === "three" && <StepThree />}
        {step === "four" && <StepFour />}
      </>
    );
  };
  return (
    <div>
      <Modal>{renderPlatformModal()}</Modal>
    </div>
  );
};

export default DashboardModal;
