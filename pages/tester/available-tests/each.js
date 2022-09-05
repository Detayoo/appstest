import TesterHeader from "../../../components/Testers Dashboard/Header/TesterHeader";
import { useTester } from "../../../context/Tester-Context";
import TesterOverview from "../../../components/Testers Dashboard/Overview/TesterOverview";
import TesterBugList from "../../../components/Testers Dashboard/Bug List/Bug List";
import TesterCommunication from "../../../components/Testers Dashboard/Communication/TesterCommunication";
import TestersDashboardLayout from "../../../layouts/TestersDashboardLayout";

const Each = () => {
  const { testerStatus, setTesterStatus } = useTester();
  const renderStatus = () => {
    return (
      <>
        {testerStatus === "Overview" && <TesterOverview />}
        {testerStatus === "Bug List" && <TesterBugList />}
        {testerStatus === "Communication" && <TesterCommunication />}
      </>
    );
  };
  return (
    <>
      <TestersDashboardLayout>
        <div className="pr-[95px] pl-[28px] bg-lightestgray flex flex-col">
          <TesterHeader />
          {renderStatus()}
        </div>
      </TestersDashboardLayout>
    </>
  );
};

export default Each;
