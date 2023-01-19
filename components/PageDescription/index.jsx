import moment from "moment";
import React from "react";

// comp
import { BodyText, HeadingText, HelpCenter } from "..";
import { COLORS } from "../../assets/colors";

const PageDescription = ({
  helperVisible,
  handleVisible,
  title,
  type,
  filteredOrders,
  orderId,
  customer,
  data,
  children
}) => {
  if (type === "settings") {
    return (
      <div>
        <HeadingText
          type="h3"
          title={title}
          color={COLORS.grayscale_900}
          style={{ marginBottom: 20 }}
        />
        <div className="linear-layout-flat">
          {data.map((nav) => (
            <BodyText
              key={nav.id}
              type="lr"
              color={COLORS.grayscale_900}
              title={nav.title}
              className="setting-nav clickable"
            />
          ))}
        </div>
        {children}
      </div>
    );
  }

  if (type === "orders") {
    return (
      <div className="linear-layout">
        <HeadingText
          type="h3"
          title={title}
          color={COLORS.grayscale_900}
          style={{ marginRight: 20 }}
        />
        <HeadingText
          type="h3"
          title={filteredOrders.length}
          color={COLORS.grayscale_500}
        />
      </div>
    );
  }

  if (type === "orderDetails") {
    return (
      <div>
        <div className="linear-layout">
          <HeadingText
            type="h3"
            title={title}
            color={COLORS.grayscale_900}
            style={{ marginRight: 20 }}
          />
          <HeadingText type="h3" title={orderId} color={COLORS.grayscale_900} />
        </div>
        <BodyText
          type="mr"
          title={
            customer ? moment().fromNow() : moment().format("MMM DD, YYYY")
          }
          color={"#212121"}
        />
      </div>
    );
  }

  return (
    <>
      <BodyText
        type="mr"
        color={COLORS.grayscale_900}
        title={title}
        className="greeting"
      />
      {helperVisible && <HelpCenter closeHelper={handleVisible} />}
    </>
  );
};

export default PageDescription;
