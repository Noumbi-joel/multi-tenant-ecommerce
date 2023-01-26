import React from "react";

// assets
import { COLORS } from "../../assets/colors";
// comp
import {BodyText, HeadingText} from "..";

const SFSectionTexts = ({title, msg}) => {
  return (
    <div>
      <HeadingText
        type="h3"
        title={title}
        color="#121212"
        md
        style={{ textAlign: "center" }}
      />
      <BodyText
        type="lr"
        title={msg}
        color={COLORS.grayscale_600}
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default SFSectionTexts;
