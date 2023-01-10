import React from "react";

// helpers
import { SELECT_VALUES } from "../../helpers";

const Select = ({ onChange, lang, name }) => {
  return (
    <div>
      <select
        className={lang ? "select-lang" : "select"}
        onChange={onChange}
        aria-label="select-s"
        required
        name={name}
      >
        {!lang &&
          SELECT_VALUES.bCategory.map((v) => (
            <option key={v.id} value={v.value}>
              {v.value}
            </option>
          ))}
        {lang &&
          SELECT_VALUES.lang.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
