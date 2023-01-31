import React from "react";

// comp
import {
  ContactDetails,
  DashboardContainer,
  OrderDetailUpPaid,
  PageDescription,
  Paid,
  ShippingAddress,
  ShippingCarrier,
  Transaction,
} from "../../../../../../components";
import { Divider } from "@nextui-org/react";

// assets
import {
  PAID,
  TRANSACTIONS,
  CONTACT_DETAILS,
  SHIPPING_ADDRESS,
  SHIPPING_CARRIER,
} from "../../../../../../helpers";

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
              <div className="orderDRight">
                <ContactDetails data={CONTACT_DETAILS} />
                <ShippingAddress data={SHIPPING_ADDRESS} />
                <ShippingCarrier data={SHIPPING_CARRIER} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default OrderDetails;
