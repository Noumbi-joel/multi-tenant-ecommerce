import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";

const Paid = ({ data }) => {
  return (
    <div>
      {data.map((p, i) => (
        <div className="linear-layout-flat" style={{ marginTop: 16 }}>
          {i === 2 ? (
            <>
              <BodyText
                type="mr"
                title={p.header.headerValue}
                color={COLORS.grayscale_900}
              />
              <BodyText
                type="mr"
                title={p.header.value}
                color={COLORS.grayscale_900}
              />
            </>
          ) : (
            <>
              <BodyText
                type="sr"
                title={p.header.headerValue}
                color={COLORS.grayscale_900}
              />
              <BodyText
                type="sr"
                title={p.header.value}
                color={COLORS.grayscale_900}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Paid;
