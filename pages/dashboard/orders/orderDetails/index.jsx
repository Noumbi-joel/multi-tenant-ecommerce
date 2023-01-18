import React from "react";

// comp
import {
  DashboardContainer,
  OrderDetailUpPaid,
  PageDescription,
  Paid,
  Transaction,
} from "../../../../components";
import { Divider } from "@nextui-org/react";

// assets
import { PAID, TRANSACTIONS } from "../../../../helpers";

const OrderDetails = () => {
  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription type="orderDetails" title="Order #1010" />
          <div style={{ marginTop: 40 }}>
            <Divider />
            <div className="orderDetails">
              <div className="orderDLeft">
                <OrderDetailUpPaid />
                <Paid data={PAID} />
                <Transaction data={TRANSACTIONS} />
                <Transaction results />
              </div>
              <div className="orderDRight">dlandjkazlklk</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default OrderDetails;
