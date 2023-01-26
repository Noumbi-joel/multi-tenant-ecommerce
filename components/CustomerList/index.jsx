import React from "react";

// assets
import { COLORS } from "../../assets/colors";

// comp
import { BodyText } from "..";

const CustomerList = ({
  data,
  router,
  tableHeaderTitle,
  tableHeaderOne,
  tableHeaderTwo,
}) => {
  const handleClick = () => {
    return router.push(`/_sites/dashboard/customers/customerDetails`);
  };
  return (
    <div>
      <table>
        <tr>
          <th>
            <BodyText
              type="mr"
              title={tableHeaderTitle}
              color={COLORS.grayscale_900}
              style={{ margin: "15px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title={tableHeaderOne}
              color={COLORS.grayscale_900}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title={tableHeaderTwo}
              color={COLORS.grayscale_900}
            />
          </th>
        </tr>
        {data.map((customer) => (
          <tr key={customer.id} onClick={handleClick} className="clickable">
            <td>
              <BodyText
                type="mr"
                title={customer.customerName}
                color={COLORS.grayscale_900}
                style={{ margin: "15px 0" }}
              />
            </td>
            <td>
              <BodyText
                type="mr"
                title={"FCFA " + customer.totalSpent}
                color={COLORS.grayscale_900}
              />
            </td>
            <td>
              <BodyText
                type="mr"
                title={customer.orders}
                color={COLORS.grayscale_900}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CustomerList;
