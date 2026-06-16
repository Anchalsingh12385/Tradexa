import React, { createContext, useState } from "react";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");

  const openBuyWindow = (uid) => {
    setIsOpen(true);
    setSelectedStock(uid);
  };

  const closeBuyWindow = () => {
    setIsOpen(false);
    setSelectedStock("");
  };

  return (
    <GeneralContext.Provider
      value={{
        isOpen,
        selectedStock,
        openBuyWindow,
        closeBuyWindow,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
