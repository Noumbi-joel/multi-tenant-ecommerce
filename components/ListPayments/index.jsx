import React from "react";

// comp
import { BodyText } from ".."
// assets
import { COLORS } from "../../assets/colors";

const ListPayments = ({ data }) => {
  return (
    <div>
      <table className="list-payments">
        <tr>
          <th>
            <BodyText
              type="mr"
              title="ID"
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title="Payment methods"
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title="Amount"
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title="Date"
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
          <th>
            <BodyText
              type="mr"
              title="Status"
              color={COLORS.grayscale_900}
              style={{ margin: "25px 0" }}
            />
          </th>
        </tr>
        {data.map((d) => (
          <tr key={d.id}>
            <td>
              <BodyText
                type="mr"
                title={d.id}
                color={COLORS.grayscale_900}
                style={{ margin: "25px 0" }}
              />
            </td>
            <td>
              <div>
                <BodyText
                  type="mr"
                  title={d.phone}
                  color={COLORS.grayscale_900}
                />
                <BodyText
                  type="sr"
                  title={d.paymentMethod}
                  color={COLORS.grayscale_600}
                />
              </div>
            </td>
            <td>
              <BodyText
                type="mr"
                title={d.amount}
                color={COLORS.grayscale_900}
                style={{ margin: "25px 0" }}
              />
            </td>
            <td>
              <BodyText type="mr" title={d.date} color={COLORS.grayscale_900} />
            </td>
            <td>
              {d.status === "Success" && (
                <div className="pay-success">
                  <BodyText
                    type="mr"
                    title="Success"
                    color={COLORS.grayscale_900}
                  />
                </div>
              )}
              {d.status === "Failed" && (
                <div className="pay-failed">
                  <BodyText
                    type="mr"
                    title="Failed"
                    color={COLORS.grayscale_900}
                  />
                </div>
              )}
              {d.status === "Pending" && (
                <div className="pay-failed">
                  <BodyText
                    type="mr"
                    title="Pending"
                    color={COLORS.grayscale_900}
                  />
                </div>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ListPayments;
