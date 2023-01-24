import { Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// comp
import {
  CustomerList,
  DashboardContainer,
  Empty,
  PageDescription,
  SearchFilter,
  Table,
} from "../../../../components";
import { searchFilterName } from "../../../../functions";

const Customers = () => {
  const { filteredCustomers, customers } = useSelector(
    (state) => state.customers
  );
  const router = useRouter();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <DashboardContainer>
      <div className="dashboard-dynamic">
        <div className="dashboard-content">
          <PageDescription
            type="orders"
            filteredOrders={filteredCustomers}
            title="Customers"
          />
          <SearchFilter
            value={search}
            onChange={(e) =>
              searchFilterName(
                e,
                "customers",
                customers,
                filteredCustomers,
                setSearch,
                dispatch
              )
            }
            type="customers"
            searchType="customers"
            dispatch={dispatch}
          />
          {filteredCustomers.length <= 0 && (
            <Empty
              emptyConcern="customers"
              msg="Create a product to get orders from customers in your store"
              btnTitle="Add products"
              link="/_sites/dashboard/products"
            />
          )}
          {filteredCustomers.length > 0 && (
            <>
              <Spacer />
              <CustomerList
                router={router}
                data={filteredCustomers}
                tableHeaderTitle={`Display: ${filteredCustomers.length} of ${filteredCustomers.length} items`}
                tableHeaderOne="Total spent"
                tableHeaderTwo="Orders"
              />
              <Spacer y={2.5} />
            </>
          )}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Customers;
