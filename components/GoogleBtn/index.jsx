import { Button, Image } from "@nextui-org/react";
import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";

const GoogleBtn = ({ image, title }) => {
  return (
    <Button bordered style={{ height: 56, borderColor: COLORS.grayscale_300}}>
      <div className="linear-layout-center">
        <Image src={image} width={22} height={22} />
        <BodyText title={title} type="lm" ml={10} />
      </div>
    </Button>
  );
};

export default GoogleBtn;