import React from "react";

//next UI
import { Text } from "@nextui-org/react";

const HeadingText = ({ type, title }) => {
  let render = {
    normal: <Text>{title}</Text>,
    h1: (
      <Text weight="bold" size={48}>
        {title}
      </Text>
    ),
    h2: (
      <Text weight="bold" size={40}>
        {title}
      </Text>
    ),
    h3: (
      <Text weight="bold" size={32}>
        {title}
      </Text>
    ),
    h4: (
      <Text weight="bold" size={24}>
        {title}
      </Text>
    ),
    h5: (
      <Text weight="bold" size={20}>
        {title}
      </Text>
    ),
    h6: (
      <Text weight="bold" size={18}>
        {title}
      </Text>
    ),
  };
  let currentHeadingText = type;
  return render[currentHeadingText];
};

export default HeadingText;
