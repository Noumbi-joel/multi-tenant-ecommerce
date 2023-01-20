import React from "react";

// assets
import Alien from "../../public/alien.svg";
import PurplePlus from "../../public/purple-plus.svg";
import { COLORS } from "../../assets/colors";

// comp
import BodyText from "../BodyText";
import Link from "next/link";

const Empty = ({ emptyConcern, msg, btnTitle, link }) => {
  return (
    <div className="no-category">
      <Alien aria-label="alien" />
      <div>
        <BodyText
          type="lr"
          title={`Whoops.. you've got no ${emptyConcern}`}
          color={"#000"}
          style={{ textAlign: "center" }}
        />
        <BodyText
          type="mr"
          title={msg}
          color={"#000"}
          style={{ textAlign: "center" }}
        />
      </div>
      <div className="linear-layout" style={{ marginTop: 25 }}>
        <PurplePlus aria-label="plus" className="plus" />
        <Link href={`${link}`}>
          <BodyText
            type="lr"
            title={btnTitle}
            color={COLORS.primary_base}
            style={{ textAlign: "center" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Empty;
