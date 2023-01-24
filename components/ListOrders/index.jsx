import React from "react";

// assets
import FullFilled from "../../public/fullfilled.svg";
import UnFullFilled from "../../public/unfullfilled.svg";

// comp
import { BodyText } from "..";
import { Checkbox, Spacer } from "@nextui-org/react";
import { COLORS } from "../../assets/colors";

const ListOrders = ({ data, dataHeaders, checkboxTitle }) => {
  return (
    <div>
      <Spacer />
      <Checkbox isSelected={false} onChange={() => {}}>
        <BodyText
          type="mr"
          title={checkboxTitle}
          color={COLORS.grayscale_900}
        />
      </Checkbox>
      <Spacer />
      <table>
        <tr>
          {dataHeaders.map((h) => (
            <th>
              <BodyText
                key={h.id}
                type="mr"
                title={h.title}
                color={COLORS.grayscale_900}
                style={{ margin: "25px 0" }}
              />
            </th>
          ))}
        </tr>
        {data.map((order) => (
          <tr key={order.id} className="order-item" onClick={() => {}}>
            <td>
              <BodyText
                type="mr"
                color={COLORS.grayscale_900}
                title={order.id}
                style={{ margin: "25px 0" }}
              />
            </td>
            <td>
              <BodyText
                type="mr"
                color={COLORS.grayscale_900}
                title={order.date}
                style={{ margin: "25px 0" }}
              />
            </td>
            <td>
              <BodyText
                type="mr"
                color={COLORS.grayscale_900}
                title={order.customerName}
                style={{ margin: "25px 0" }}
              />
            </td>
            <td>{order.fullF ? <FullFilled /> : <UnFullFilled />}</td>
            <td>
              <BodyText
                type="mr"
                color={COLORS.grayscale_900}
                title={"FCFA" + order.total}
                style={{ margin: "25px 0" }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ListOrders;
