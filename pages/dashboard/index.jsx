import React, { useState } from "react";
// import { STORES, USERS } from "../../constants";
// import { AuthContext } from "../../context/Auth";
// import firebase from "../../firebase.config";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router"

// comp
import {
  BodyText,
  Box,
  DashboardContainer,
  HelpCenter,
} from "../../components";

// assets
import { COLORS } from "../../assets/colors";

const Dashboard = () => {
  const [helperVisible, setHelperVisible] = useState(true);
  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="Hey, John! - here's what's happening with your store."
            className="greeting"
          />
          {helperVisible && (
            <HelpCenter closeHelper={() => setHelperVisible(false)} />
          )}
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
