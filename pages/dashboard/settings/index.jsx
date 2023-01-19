import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// comp
import {
  BodyText,
  DashboardContainer,
  PageDescription,
  StoreDetails,
} from "../../../components";
import { Spacer } from "@nextui-org/react";

// assets
import { SETTINGS_NAV, SITE_LANG, TIMEZONE, CURRENCY } from "../../../helpers";

const Settings = () => {
  const dispatch = useDispatch();

  const { general } = useSelector((state) => state.settings);

  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription type="settings" data={SETTINGS_NAV} title="Settings">
            {general && (
              <StoreDetails data={{ SITE_LANG, TIMEZONE, CURRENCY }} />
            )}
          </PageDescription>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Settings;
