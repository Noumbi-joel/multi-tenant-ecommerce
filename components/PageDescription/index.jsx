import moment from "moment";
import React from "react";

// comp
import { BodyText, HeadingText, HelpCenter } from "..";
import { COLORS } from "../../assets/colors";
import { NAVIGATE, SET_ACTIVE } from "../../constants";

const PageDescription = ({
  helperVisible,
  handleVisible,
  title,
  type,
  filteredOrders,
  orderId,
  customer,
  data,
  children,
  dispatch,
}) => {
  if (type === "settings") {
    const handleClick = (title) => {
      dispatch({ type: NAVIGATE, payload: title });
      dispatch({ type: SET_ACTIVE, payload: title });
    };
    return (
      <div>
        <HeadingText
          type="h3"
          title={title}
          color={COLORS.grayscale_900}
          style={{ marginBottom: 20 }}
        />
        <div className="linear-layout">
          {data.map((nav) => (
            <span key={nav.id} onClick={() => handleClick(nav.title)}>
              <BodyText
                type="lr"
                color={
                  nav.isActive ? COLORS.grayscale_900 : COLORS.grayscale_8080
                }
                title={nav.title}
                className={
                  nav.isActive
                    ? "setting-nav-active clickable"
                    : "setting-nav clickable"
                }
              />
            </span>
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
