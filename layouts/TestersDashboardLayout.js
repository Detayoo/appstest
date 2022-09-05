import TestersDashboardSidebar from "../components/Testers Dashboard/TestersDashboardSidebar";
import DashboardHeader from "../components/DashboardComponents/DashboardHeader";

const TestersDashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <TestersDashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};
export default TestersDashboardLayout;
