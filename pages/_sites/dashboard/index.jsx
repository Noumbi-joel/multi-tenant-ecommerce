import React, { useState } from "react";

// comp
import {
  Box,
  DashboardContainer,
  HelpCenter,
  PageDescription,
} from "../../../components";

const Dashboard = () => {
  const [helperVisible, setHelperVisible] = useState(true);

  const handleVisible = () => {
    setHelperVisible(false);
  };
  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription
            handleVisible={handleVisible}
            helperVisible={helperVisible}
            title="Hey, John! - here's what's happening with your store."
          />
          <div className="linear-layout-flat">
            <Box title="TODAY'S SALES" amount="FCFA100,000" type="today-s" />
            <Box title="TOTAL SALES" amount="FCFA750,000" type="top-s" />
            <Box title="TOTAL ORDERS" amount="20" type="top-o" />
          </div>
          <div className="linear-layout-flat">
            <Box form="topContainer" title="TOP PRODUCTS" />
            <Box form="topContainer" title="TOP CUSTOMERS" />
          </div>
          <HelpCenter community />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
