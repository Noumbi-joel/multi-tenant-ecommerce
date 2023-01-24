import React, { useState } from "react";

// comp
import { BodyText, Button, Empty, Modal } from "..";
import { Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import { useSelector } from "react-redux";
import ListPayments from "../ListPayments";

const SettingPayments = () => {
  const [saved, setSaved] = useState(false);
  const payments = useSelector((state) => state.settings.payments);
  return (
    <div>
      <Modal
        closeModal={() => setSaved(false)}
        visible={saved}
        modalTitle="Withdraw money to"
        labelOne="Choose payment method"
        labelTwo="Choose mobile money operator"
        labelThree="Enter mobile money number"
        withdraw
      />
      <Spacer y={1.5} />
      <div className="linear-layout">
        <div>
          <BodyText type="lr" color={COLORS.grayscale_900} title="FCFA30,000" />
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="Total balance"
            style={{ marginRight: 40 }}
          />
        </div>
        <Button
          onClick={() => setSaved(true)}
          title="Withdraw"
          titleColor={COLORS.white}
          titleType="lr"
          className="withdraw-btn"
        />
      </div>
      {payments.length <= 0 && (
        <Empty
          emptyConcern="Whoops.. you've got no withdrawal"
          msg="Withdraw money to view your history"
        />
      )}
      <Spacer />

      {payments.length > 0 && <ListPayments data={payments} />}

      <Spacer y={2.5} />
    </div>
  );
};

export default SettingPayments;
