import React, { useContext } from "react";
import { COLORS } from "../../assets/colors";
import { AuthContext } from "../../context/Auth";
import BodyText from "../BodyText";

const DropdownUserActionList = ({ data }) => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="dropdown">
      {data.map((a, i) => (
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

export default DropdownUserActionList;
