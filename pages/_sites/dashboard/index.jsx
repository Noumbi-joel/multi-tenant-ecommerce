import React, { useState } from "react";

// comp
import {
  Box,
  DashboardContainer,
  HelpCenter,
  PageDescription,
} from "../../../components";
import { Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [helperVisible, setHelperVisible] = useState(true);
  const router = useRouter();
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
          <div className="box-container-row">
            <Box title="TODAY'S SALES" amount="FCFA100,000" type="today-s" />
            <Box title="TOTAL SALES" amount="FCFA750,000" type="top-s" />
            <Box title="TOTAL ORDERS" amount="20" type="top-o" />
          </div>
          <div className="topContainer-row">
            <Box form="topContainer" title="TOP PRODUCTS" router={router} />
            <Box form="topContainer" title="TOP CUSTOMERS" router={router} />
          </div>
          <HelpCenter community />
        </div>
        <Spacer y={2.5} />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
