import React from "react";

// comp
import { BodyText, HeadingText, TopCustomerList, TopProductList } from "..";

// assets
import TopSaleGraph from "../../public/top-sale-graph.svg";
import TodaySaleGraph from "../../public/today-sale-graph.svg";
import TopOrderGraph from "../../public/top-order-graph.svg";
import RightArrowSm from "../../public/right-arrow-sm.svg";
import { COLORS } from "../../assets/colors";
import { TOP_CUSTOMERS, TOP_PRODUCTS } from "../../helpers";

const Box = ({ title, amount, type, form, router }) => {
  if (form === "topContainer") {
    return (
      <div className="topContainer-box">
        <div className="linear-layout-flat">
          <BodyText type="sr" title={title} color={COLORS.grayscale_600} />
          <div className="linear-layout">
            <BodyText
              type="mr"
              title="View all"
              color={COLORS.blue}
              style={{ marginRight: 10 }}
              onClick={
                title === "TOP CUSTOMERS"
                  ? () => router.push("/dashboard/customers")
                  : () => router.push("/dashboard/products")
              }
            />
            <RightArrowSm aria-label="right arrow" />
          </div>
        </div>
        {title === "TOP CUSTOMERS" && <TopCustomerList data={TOP_CUSTOMERS} />}
        {title === "TOP PRODUCTS" && <TopProductList data={TOP_PRODUCTS} />}
      </div>
    );
  }

  return (
    <div className="box-container">
      <div>
        <BodyText type="sr" title={title} color={COLORS.grayscale_600} />
        <HeadingText type="h4" color={COLORS.grayscale_900} title={amount} />
      </div>
      {type === "top-s" && <TopSaleGraph aria-label="top-s" />}
      {type === "top-o" && <TodaySaleGraph aria-label="top-o" />}
      {type === "today-s" && <TopOrderGraph aria-label="today-s" />}
    </div>
  );
};

export default Box;
