import { createContext, useContext, useState } from "react";

export const TesterContext = createContext({});

export const TesterProvider = ({ children }) => {
  const [testerStatus, setTesterStatus] = useState("Overview");

  const value = {
    testerStatus,
    setTesterStatus,
  };

  return (
    <TesterContext.Provider value={value}>{children}</TesterContext.Provider>
  );
};

export const useTester = () => useContext(TesterContext);
