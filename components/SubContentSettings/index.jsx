import React from "react";

import { BodyText } from "..";
import { COLORS } from "../../assets/colors";

const SubContentDetails = ({ subTitle, subDesc }) => {
  return (
    <div>
      <BodyText type="lr" color={COLORS.grayscale_900} title={subTitle} />
      <BodyText type="mr" color={COLORS.grayscale_8080} title={subDesc} />
    </div>
  );
};

export default SubContentDetails;
