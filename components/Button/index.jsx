import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";

const Button = ({
  onClick,
  title,
  titleType,
  titleColor,
  className,
  style,
  children
}) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
      <BodyText type={titleType} title={title} color={titleColor} />
    </div>
  );
};

export default Button;
