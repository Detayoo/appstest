import AdminDashboardSidebar from "../components/Admin Dashboard/AdminDashboardSidebar";
import DashboardHeader from "../components/DashboardComponents/DashboardHeader";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <AdminDashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};
export default AdminDashboardLayout;
