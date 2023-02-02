import React from "react";

// assets
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { SFHeader } from "..";

const SFContainer = ({ children, fluid, storeName, shop }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  if (shop) {
    return <div className="SFContainer-shop">{children}</div>;
  }

  if (fluid) {
    return (
      <div className="SFContainer-fluid">
        <SFHeader
          storeName={storeName}
          router={router}
          dispatch={dispatch}
          cartNb={cartItems.length}
          checkout
        />

        {children}
      </div>
    );
  }

  return (
    <div className="SFContainer">
      <SFHeader
        storeName={storeName}
        router={router}
        dispatch={dispatch}
        cartNb={cartItems.length}
      />

      {children}
    </div>
  );
};

export default SFContainer;
