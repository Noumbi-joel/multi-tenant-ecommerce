import React from "react";

// comp
import { AppHeader, VerticalHeader } from "..";

const DashboardContainer = ({ children }) => {
  return (
    <div className="dashboard-container">
      <VerticalHeader />
      <div className="right-container">
        <AppHeader dashboard />
        {children}
      </div>
    </div>
  );
};

export default DashboardContainer;
