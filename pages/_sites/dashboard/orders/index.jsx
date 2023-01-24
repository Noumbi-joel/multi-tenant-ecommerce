import { Spacer } from "@nextui-org/react";
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
} from "../../../../components";
import { searchFilterName } from "../../../../functions";
import { ORDERS_HEADER } from "../../../../helpers";

const Orders = () => {
  const { filteredOrders, orders } = useSelector((state) => state.orders);
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
            onChange={(e) =>
              searchFilterName(
                e,
                "orders",
                orders,
                filteredOrders,
                setSearch,
                dispatch
              )
            }
            type="orders"
            searchType="orders"
            dispatch={dispatch}
          />
          {filteredOrders.length <= 0 && (
            <Empty
              emptyConcern="orders"
              msg="Create a product to start receiving orders in your store"
              btnTitle="Add products"
              link="/_sites/dashboard/products/create"
            />
          )}
          {filteredOrders.length > 0 && (
            <div>
              <Spacer />
              <ListOrders
                data={filteredOrders}
                dataHeaders={ORDERS_HEADER}
                checkboxTitle={`Display: ${filteredOrders.length} of ${filteredOrders.length} items`}
              />
              <Spacer y={2.5} />
            </div>
          )}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Orders;
