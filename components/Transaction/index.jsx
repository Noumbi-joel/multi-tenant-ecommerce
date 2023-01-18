import React from "react";

// assets
import { COLORS } from "../../assets/colors";
// comp
import { BodyText } from "..";
import { Divider } from "@nextui-org/react";

const Transaction = ({ data, results }) => {
  if (results) {
    return (
      <div>
        <div className="orderLContent linear-layout-flat">
          <BodyText
            title="Orange mobile money"
            type="mr"
            color={COLORS.grayscale_900}
          />
          <div className="order-success">
            <BodyText title="Success" type="mr" color={COLORS.grayscale_900} />
          </div>

          <BodyText title="FCFA55,000" type="mr" color={COLORS.grayscale_900} />
          <BodyText title="Jan 12, 2023, 08:02" type="mr" color={COLORS.grayscale_900} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 30 }}>
      <BodyText
        type="lr"
        title="Transactions"
        color={COLORS.grayscale_900}
        style={{ marginBottom: 8 }}
      />
      <Divider />
      <div className="orderLContent linear-layout-flat">
        {data.map((t) => (
          <BodyText
            key={t.id}
            title={t.title}
            type="mr"
            color={COLORS.grayscale_900}
          />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Transaction;
