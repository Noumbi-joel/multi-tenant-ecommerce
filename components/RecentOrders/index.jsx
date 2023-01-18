import React from "react";

// comp
import { Spacer } from "@nextui-org/react";
import { BodyText, ListRecentOrders } from "..";

// assets
import { COLORS } from "../../assets/colors";

const RecentOrders = () => {
  return (
    <div>
      <BodyText type="lr" title="Recent orders" color={COLORS.grayscale_900} />
      <Spacer />
      <ListRecentOrders />
    </div>
  );
};

export default RecentOrders;
