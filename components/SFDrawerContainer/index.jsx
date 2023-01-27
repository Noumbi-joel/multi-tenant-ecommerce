import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// comp
import { SFDrawer } from "..";

const SFDrawerContainer = ({ children }) => {
  const { drawerVisible, filterDrawerVisible, cartDrawerVisible } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();
  return (
    <div className="sf-container">
      <SFDrawer dispatch={dispatch} drawerVisible={drawerVisible} />
      <SFDrawer
        type="filters"
        dispatch={dispatch}
        drawerVisible={filterDrawerVisible}
      />
      <SFDrawer
        type="cart"
        dispatch={dispatch}
        drawerVisible={cartDrawerVisible}
      />
      {children}
    </div>
  );
};

export default SFDrawerContainer;
