import React, { useState, useEffect, createContext } from "react";
import { TabButton as TabButtonComponent } from "./TabButton";

const TabContext = createContext({
  activeTab: null,
  setActiveTab: () => {},
});

const Tabs = ({ initialTab, children }) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (initialTab != null) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

const Tab = ({ children, tabKey }) => {
  const { activeTab } = useContext(TabContext);
  return activeTab === tabKey ? children : null;
};

const TabButton = ({ children, tabKey, ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <TabButtonComponent
      onClick={() => setActiveTab(tabKey)}
      active={tabKey === activeTab}
      {...props}
    >
      {children}
    </TabButtonComponent>
  );
};

const TabCustomTrigger = TabContext.Consumer;

export { Tabs, Tab, TabButton, TabCustomTrigger };
