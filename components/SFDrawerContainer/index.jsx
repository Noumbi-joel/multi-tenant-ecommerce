import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// comp
import { SFDrawer } from "..";

const SFDrawerContainer = ({ children, router }) => {
  const { drawerVisible, filterDrawerVisible, cartDrawerVisible } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();
  return (
    <div className="sf-container">
      <SFDrawer dispatch={dispatch} drawerVisible={drawerVisible} router={router} />
      <SFDrawer
        type="filters"
        dispatch={dispatch}
        drawerVisible={filterDrawerVisible}
        router={router}
      />
      <SFDrawer
        type="cart"
        dispatch={dispatch}
        drawerVisible={cartDrawerVisible}
        router={router}
      />
      {children}
    </div>
  );
};

export default SFDrawerContainer;
