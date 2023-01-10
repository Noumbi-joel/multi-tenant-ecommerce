import React, { useState } from "react";

// assets
import { COLORS } from "../../assets/colors";
import Eye from "../../public/eye.svg";
import EyeOff from "../../public/eye-off.svg";

// comp
import BodyText from "../BodyText";

const InputField = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  ariaLabel,
  label,
}) => {
  const [eye, setEye] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <BodyText
        type="mr"
        color={COLORS.grayscale_900}
        title={label}
        style={{ marginBottom: 5 }}
      />
      {name === "password" ? (
        <>
          <input
            type={eye ? "text" : type}
            name={name}
            required
            placeholder={placeholder}
            className="form-control"
            onChange={onChange}
            value={value}
            aria-label={ariaLabel}
          />
          {eye ? (
            <EyeOff
              className="eye"
              aria-label="eye"
              onClick={() => setEye(false)}
            />
          ) : (
            <Eye
              className="eye"
              aria-label="eye"
              onClick={() => setEye(true)}
            />
          )}
        </>
      ) : (
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className="form-control"
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
        />
      )}
    </div>
  );
};

export default InputField;
