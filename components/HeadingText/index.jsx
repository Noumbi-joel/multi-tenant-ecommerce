import React from "react";

//next UI
import { Text } from "@nextui-org/react";

const HeadingText = ({ type, title, color, login, width, lh, mb }) => {
  let render = {
    normal: <Text>{title}</Text>,
    h1: (
      <Text weight="bold" color={color} size={48}>
        {title}
      </Text>
    ),
    h2: (
      <Text
        weight="bold"
        color={color}
        size={40}
        style={{
          width: width ? width : null,
          lineHeight: lh ? lh : null,
          marginBottom: mb ? mb : 0,
        }}
      >
        {title}
      </Text>
    ),
    h3: (
      <Text
        weight="bold"
        style={login && { marginBottom: 40 }}
        color={color}
        size={32}
      >
        {title}
      </Text>
    ),
    h4: (
      <Text weight="bold" color={color} size={24}>
        {title}
      </Text>
    ),
    h5: (
      <Text weight="bold" color={color} size={20}>
        {title}
      </Text>
    ),
    h6: (
      <Text weight="bold" color={color} size={18}>
        {title}
      </Text>
    ),
  };
  let currentHeadingText = type;
  return render[currentHeadingText];
};

export default HeadingText;
