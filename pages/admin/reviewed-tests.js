import AdminTestHeader from "../../components/Admin Dashboard/Header/AdminTestHeader";
import { useAdmin } from "../../context/Admin-Context";
import AdminBugList from "../../components/Admin Dashboard/Bug List/AdminBugList";
import AdminOverview from "../../components/Admin Dashboard/Overview/AdminOverview";
import AdminDashboardLayout from "../../layouts/AdminDashboardLayout";
import AdminCommunication from "../../components/Admin Dashboard/Communication/AdminCommunication";

const ReviewedTests = () => {
  const { adminTestStatus } = useAdmin();
  const renderStatus = () => {
    return (
      <>
        {adminTestStatus === "Overview" && <AdminOverview />}
        {adminTestStatus === "Bug List" && <AdminBugList />}
        {adminTestStatus === "Communication" && <AdminCommunication />}
      </>
    );
  };
  return (
    <>
      <AdminDashboardLayout>
        <div className="pr-[95px] pl-[28px] bg-lightestgray flex flex-col">
          <AdminTestHeader />
          {renderStatus()}
        </div>
      </AdminDashboardLayout>
    </>
  );
};

export default ReviewedTests;
