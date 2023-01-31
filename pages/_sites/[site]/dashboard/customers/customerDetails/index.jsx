import React from "react";

// comp
import {
  ContactDetails,
  DashboardContainer,
  PageDescription,
  RecentOrders,
  ShippingAddress,
  SumCustomer
} from "../../../../../../components";
import { Divider } from "@nextui-org/react";

// assets
import { CONTACT_DETAILS, SHIPPING_ADDRESS } from "../../../../../../helpers";

const CustomerDetails = () => {
  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription
            type="orderDetails"
            title="Chimbuchi Buchi"
            customer
          />
          <div style={{ marginTop: 40 }}>
            <Divider />
            <div className="orderDetails">
              <div className="orderDLeft">
                <SumCustomer />
                <RecentOrders/>
              </div>
              <div className="orderDRight">
                <ContactDetails data={CONTACT_DETAILS} />
                <ShippingAddress data={SHIPPING_ADDRESS} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default CustomerDetails;
