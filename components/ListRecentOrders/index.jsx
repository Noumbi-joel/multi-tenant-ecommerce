import React from "react";

// comp
import {BodyText} from "..";
import { Divider, Spacer } from "@nextui-org/react";

// assets
import FullFilled from "../../public/fullfilled.svg";
import { COLORS } from "../../assets/colors";

const ListRecentOrders = () => {
  return (
    <div>
      <Divider />
      <Spacer y={0.5} />
      <div className="linear-layout-flat">
        <BodyText type="mr" title="#0117" color={COLORS.grayscale_900} />
        <BodyText type="mr" title="Jan 23, 2023" color={COLORS.grayscale_900} />
        <FullFilled />
        <BodyText type="mr" title="FCFA21,800" color={COLORS.grayscale_900} />
      </div>
      <Spacer y={0.5} />
      <Divider />
    </div>
  );
};

export default ListRecentOrders;
