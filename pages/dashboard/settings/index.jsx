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
  SettingPassword,
} from "../../../components";

// assets
import { SETTINGS_NAV, SITE_LANG, TIMEZONE, CURRENCY } from "../../../helpers";

const Settings = () => {
  const dispatch = useDispatch();

  const navStates = useSelector((state) => state.settings);

  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription
            type="settings"
            dispatch={dispatch}
            navStates={navStates}
            data={SETTINGS_NAV}
            title="Settings"
          >
            {navStates.general && (
              <StoreDetails data={{ SITE_LANG, TIMEZONE, CURRENCY }} />
            )}
            {navStates.account && <AccountSettings />}
            {navStates.socialProfiles && <SocialProfiles />}
            {navStates.payments && <SettingPayments />}
            {navStates.legal && <Legal />}
            {navStates.password && <SettingPassword />}
          </PageDescription>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Settings;
