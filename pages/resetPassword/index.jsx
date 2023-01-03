import React from "react";

//comp
import AppHeader from "../../components/AppHeader";

//assets
import { HEADER_NAV } from "../../helpers";

const resetPassword = () => {
  return (
    <div>
      <AppHeader image="./mokolo.svg" links={HEADER_NAV} />
      <div className="reset-page-container">
        
      </div>
    </div>
  );
};

export default resetPassword;
