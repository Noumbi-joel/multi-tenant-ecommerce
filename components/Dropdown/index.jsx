import React, { useContext } from "react";
import { ACTIONS } from "../../helpers";
import { BodyText } from "..";
import { COLORS } from "../../assets/colors";
import { AuthContext } from "../../context/Auth";

const Dropdown = ({ filters, last, data }) => {
  const { logout } = useContext(AuthContext);

  if (filters) {
    return (
      <div className="dropdown-filter">
        {filters &&
          data.map((a, i) => (
            <BodyText
              style={{ padding: 5 }}
              type="mr"
              title={a.title}
              color={COLORS.grayscale_900}
              className="product-action"
            />
          ))}
      </div>
    );
  }

  if (last) {
    return (
      <div className="dropdown-filter">
        {data.map((a, i) => (
          <BodyText
            style={{ padding: 5 }}
            type="mr"
            title={a.title}
            color={COLORS.grayscale_900}
            className="product-action"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="dropdown">
      {ACTIONS.map((a, i) => (
        <div
          key={a.id}
          className="dropdown-item"
          onClick={i === 2 ? () => logout() : () => {}}
        >
          <div style={{ marginRight: 6 }}>{a.icon}</div>
          <BodyText type="mr" title={a.title} color={COLORS.grayscale_900} />
        </div>
      ))}
      <BodyText
        type="sr"
        title="v1.0.0 Terms of service"
        color={COLORS.grayscale_500}
      />
    </div>
  );
};

export default Dropdown;
