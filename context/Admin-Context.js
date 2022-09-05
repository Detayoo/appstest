import { createContext, useContext, useState } from "react";

export const AdminDashboardContext = createContext({});

export const AdminDashboardProvider = ({ children }) => {
  const [adminTestStatus, setAdminTestStatus] = useState("Overview");

  const value = {
    adminTestStatus,
    setAdminTestStatus,
  };

  return (
    <AdminDashboardContext.Provider value={value}>
      {children}
    </AdminDashboardContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminDashboardContext);
