import React, { useState } from "react";

// assets
import { COLORS } from "../../assets/colors";
import Eye from "../../public/eye.svg";
import EyeOff from "../../public/eye-off.svg";
import Search from "../../public/search.svg";

// comp
import BodyText from "../BodyText";
import { Text } from "@nextui-org/react";

const InputField = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  ariaLabel,
  label,
  className,
}) => {
  const [eye, setEye] = useState(false);

  if (name === "bUrl") {
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

        <>
          <input
            type={type}
            name={name}
            required
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            value={value}
            aria-label={ariaLabel}
          />
          <BodyText
            className="eye"
            type="sr"
            title=".myeduka.com"
            color={COLORS.grayscale_900}
          />
        </>
      </div>
    );
  }

  if (name === "password") {
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

        <input
          type={eye ? "text" : type}
          name={name}
          required
          placeholder={placeholder}
          className={className}
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
          <Eye className="eye" aria-label="eye" onClick={() => setEye(true)} />
        )}
      </div>
    );
  }

  if (name === "products") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
        />
        <Search className="search-p" aria-label="search-p" />
      </div>
    );
  }

  return (
    <>
      <BodyText
        type="mr"
        color={COLORS.grayscale_900}
        title={label}
        style={{ marginBottom: 5 }}
      />
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        aria-label={ariaLabel}
      />
    </>
  );
};

export default InputField;
