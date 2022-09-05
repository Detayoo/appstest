import DashboardHeader from "../components/DashboardComponents/DashboardHeader";
import DashboardSidebar from "../components/DashboardComponents/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
