import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
  const [step, setStep] = useState("one");
  const [platform, setPlatform] = useState(null);
  const [testType, setTestType] = useState("All");
  const [testStatus, setTestStatus] = useState("Overview");
  const [dashboardModal, setDashboardModal] = useState(false);

  const value = {
    step,
    setStep,
    platform,
    setPlatform,
    testType,
    setTestType,
    testStatus,
    setTestStatus,
    dashboardModal,
    setDashboardModal
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
