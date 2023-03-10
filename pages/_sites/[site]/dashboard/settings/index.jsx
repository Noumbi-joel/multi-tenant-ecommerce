import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// comp
import {
  SocialProfiles,
  DashboardContainer,
  PageDescription,
  StoreDetails,
  Legal,
  AccountSettings,
  SettingPayments,
} from "../../../../../components";

// assets
import { SITE_LANG, STATES, COUNTRIES } from "../../../../../helpers";

const Settings = () => {
  const dispatch = useDispatch();

  const navStates = useSelector((state) => state.settings);
  const images = useSelector((state) => state.image);

  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription
            type="settings"
            dispatch={dispatch}
            data={navStates.settings_nav}
            title="Settings"
          >
            {navStates.state.general && (
              <StoreDetails data={{ STATES, COUNTRIES, images, dispatch }} />
            )}
            {navStates.state.account && (
              <AccountSettings data={{ SITE_LANG, images, dispatch }} />
            )}
            {navStates.state.socialProfiles && <SocialProfiles />}
            {navStates.state.payments && <SettingPayments />}
            {navStates.state.legal && <Legal />}
          </PageDescription>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Settings;
