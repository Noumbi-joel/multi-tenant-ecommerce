import { Spacer } from "@nextui-org/react";
import React from "react";

// comp
import { PaymentCard, SubContentSettings } from "..";

const SettingPayments = () => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Card payments"
        subDesc="Accept payments with credit and debit cards."
      />
      <PaymentCard />
      <SubContentSettings
        subTitle="Manual payments"
        subDesc="Payments that are made outside your online store."
      />
      <PaymentCard manualPay />
      <Spacer y={2.5} />
    </div>
  );
};

export default SettingPayments;
