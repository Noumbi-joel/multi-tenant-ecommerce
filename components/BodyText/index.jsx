import React from "react";

//next UI
import { Text } from "@nextui-org/react";

const BodyText = ({ type, title }) => {
  let render = {
    normal: <Text>{title}</Text>,
    // extra large
    xlb: (
      <Text weight="bold" size={18}>
        {title}
      </Text>
    ),
    xlsb: (
      <Text weight="semibold" size={18}>
        {title}
      </Text>
    ),
    xlm: (
      <Text weight="medium" size={18}>
        {title}
      </Text>
    ),
    xlr: (
      <Text weight="normal" size={18}>
        {title}
      </Text>
    ),

    // large
    lb: (
      <Text weight="bold" size={16}>
        {title}
      </Text>
    ),
    lsb: (
      <Text weight="semibold" size={16}>
        {title}
      </Text>
    ),
    lm: (
      <Text weight="medium" size={16}>
        {title}
      </Text>
    ),
    lr: (
      <Text weight="normal" size={16}>
        {title}
      </Text>
    ),

    // medium
    mb: (
      <Text weight="bold" size={14}>
        {title}
      </Text>
    ),
    msb: (
      <Text weight="semibold" size={14}>
        {title}
      </Text>
    ),
    mm: (
      <Text weight="medium" size={14}>
        {title}
      </Text>
    ),
    mr: (
      <Text weight="normal" size={14}>
        {title}
      </Text>
    ),

    // small
    sb: (
      <Text weight="bold" size={12}>
        {title}
      </Text>
    ),
    ssb: (
      <Text weight="semibold" size={12}>
        {title}
      </Text>
    ),
    sm: (
      <Text weight="medium" size={12}>
        {title}
      </Text>
    ),
    sr: (
      <Text weight="normal" size={12}>
        {title}
      </Text>
    ),

    // extra small
    xsb: (
      <Text weight="bold" size={10}>
        {title}
      </Text>
    ),
    xssb: (
      <Text weight="semibold" size={10}>
        {title}
      </Text>
    ),
    xsm: (
      <Text weight="medium" size={10}>
        {title}
      </Text>
    ),
    xsr: (
      <Text weight="normal" size={10}>
        {title}
      </Text>
    ),
  };

  let currentBodyText = type;
  return render[currentBodyText];
};

export default BodyText;
