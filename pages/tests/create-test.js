import CreateTestHeader from "../../components/Tests/CreateTestHeader";
import { useDashboard } from "../../context/Dashboard-Context";
import DashboardLayout from "../../layouts/DashboardLayout";
import Overview from "../../components/Tests/Overview/Overview";
import BugList from "../../components/Tests/Bug List/Bug List";
import Communication from "../../components/Tests/Communication/Communication";

const CreateTest = () => {
  const { testStatus } = useDashboard();

  const renderStatus = () => {
    return (
      <>
        {testStatus === "Overview" && <Overview />}
        {testStatus === "Bug List" && <BugList />}
        {testStatus === "Communication" && <Communication />}
      </>
    );
  };
  return (
    <>
      <DashboardLayout>
        <div className="pt-[37px] pr-[95px] pl-[28px] bg-lightestgray flex flex-col">
          <CreateTestHeader />
          {renderStatus()}
        </div>
      </DashboardLayout>
    </>
  );
};

export default CreateTest;
