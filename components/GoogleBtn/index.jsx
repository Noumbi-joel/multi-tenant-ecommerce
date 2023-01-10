import React from "react";

// comp
import { Button } from "@nextui-org/react";
import BodyText from "../BodyText";
import Google from "../../public/google.svg"

// assets
import { COLORS } from "../../assets/colors";


const GoogleBtn = ({ title, onClick }) => {
  return (
    <Button
      onPress={onClick}
      bordered
      style={{ height: 50, borderColor: COLORS.grayscale_300 }}
    >
      <div className="linear-layout-center">
        <Google />
        <BodyText title={title} type="lm" style={{ marginLeft: 10 }} />
      </div>
    </Button>
  );
};

export default GoogleBtn;
