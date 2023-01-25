import React from "react";
import BodyText from "../BodyText";

const Button = ({
  onClick,
  title,
  titleType,
  titleColor,
  className,
  style,
  children,
  btnTextClassName
}) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
      <BodyText type={titleType} title={title} color={titleColor} className={btnTextClassName} />
    </div>
  );
};

export default Button;
