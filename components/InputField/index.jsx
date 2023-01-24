import React, { useState } from "react";

// assets
import { COLORS } from "../../assets/colors";
import Eye from "../../public/eye.svg";
import EyeOff from "../../public/eye-off.svg";
import Search from "../../public/search.svg";
import CrossBlack from "../../public/cross-black.svg";

// comp
import BodyText from "../BodyText";
import { FormControl, Select, MenuItem } from "@mui/material";

const InputField = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  ariaLabel,
  label,
  className,
  data,
  dashboard,
  disabled,
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
        className={dashboard ? "settingPwdContainer" : ""}
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
        {ariaLabel === "category" && (
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title={label}
            style={{ marginBottom: 5 }}
          />
        )}
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

  if (name === "tags") {
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
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
        />
        <CrossBlack className="cross-black" aria-label="cross-black" />
      </div>
    );
  }

  if (name === "price" || name === "salePrice") {
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
          type="lr"
          title="FCFA"
          color={COLORS.grayscale_500}
          className="fcfa"
        />
      </div>
    );
  }

  if (name === "desc") {
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
        <textarea
          cols={10}
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
        />
      </div>
    );
  }

  if (name === "select") {
    return (
      <div>
        <BodyText
          type="mr"
          title={label}
          color={COLORS.grayscale_900}
          style={{ marginBottom: 5 }}
        />
        <FormControl className={className}>
          <Select value={value} onChange={onChange} className="" name={name}>
            {data.map((select) => (
              <MenuItem key={select.id} value={select.title}>
                {select.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

  if (name === "native-select") {
    return (
      <div>
        <BodyText
          type="mr"
          title={label}
          color={COLORS.grayscale_900}
          style={{ marginBottom: 5 }}
        />
        <select className={className}>
          {data.map((select) => (
            <option key={select.id} value={select.title}>
              {select.title}
            </option>
          ))}
        </select>
      </div>
    );
  }

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
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        aria-label={ariaLabel}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
