import React, { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const OpenSidebarContext = createContext<boolean | any>(undefined);

const OpenSidebarContextProvider = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (window.screen.width < 1200) {
      setIsActive(false);
    }
  }, []);

  const handleActive = () => setIsActive(!isActive);

  return (
    <OpenSidebarContext.Provider value={{ isActive, handleActive }}>
      {children}
    </OpenSidebarContext.Provider>
  );
};

export default OpenSidebarContextProvider;
