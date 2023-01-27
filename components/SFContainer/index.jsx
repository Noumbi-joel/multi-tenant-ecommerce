import React from "react";

// assets
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SFHeader } from "..";

const SFContainer = ({ children, fluid }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className={fluid ? "SFContainer-fluid" : "SFContainer"}>
      {!fluid && <SFHeader router={router} dispatch={dispatch} />}
      {children}
    </div>
  );
};

export default SFContainer;
