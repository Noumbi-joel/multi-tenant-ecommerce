import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// comp
import {
  DashboardContainer,
  Empty,
  PageDescription,
  SearchFilter,
  ListOrders,
  Table,
} from "../../../components";
import { ORDERS_HEADER } from "../../../helpers";

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
            searchType="orders"
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
          {filteredOrders.length > 0 && (
            <Table
              type="orders"
              checkboxTitle={`Display: ${filteredOrders.length} of ${filteredOrders.length} items`}
              dataHeaders={ORDERS_HEADER}
              data={filteredOrders}
            />
          )}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Orders;