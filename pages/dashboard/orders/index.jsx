import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// comp
import {
  DashboardContainer,
  Empty,
  PageDescription,
  SearchFilter,
} from "../../../components";

const Orders = () => {
  const { filteredOrders } = useSelector((state) => state.orders);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription
            type="orders"
            filteredOrders={filteredOrders}
            title="Orders"
          />
          <SearchFilter
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="orders"
            dispatch={dispatch}
          />
          {filteredOrders.length <= 0 && (
            <Empty
              emptyConcern="orders"
              msg="Create a product to start receiving orders in your store"
              btnTitle="Add products"
              link="/dashboard/products"
            />
          )}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Orders;
