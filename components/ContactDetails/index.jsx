import React from "react";

// assets
import { COLORS } from "../../assets/colors";
import SmUser from "../../public/sm-user.svg";
import SmEmail from "../../public/sm-email.svg";
import SmPhone from "../../public/sm-phone.svg";

//comp
import { BodyText } from "..";
import { Spacer } from "@nextui-org/react";

const ContactDetails = ({ data }) => {
  return (
    <div>
      <BodyText
        type="lr"
        title="Contact details"
        color={COLORS.grayscale_900}
      />

      <Spacer />
      <div className="linear-layout">
        <SmUser />
        <BodyText
          type="mr"
          title={data.userName}
          color={COLORS.grayscale_900}
        />
      </div>
      <Spacer y={0.3} />
      <div className="linear-layout">
        <SmPhone />
        <BodyText type="mr" title={data.phone} color={COLORS.grayscale_900} />
      </div>
      <Spacer y={0.3} />
      <div className="linear-layout">
        <SmEmail />
        <BodyText type="mr" title={data.email} color={COLORS.grayscale_900} />
      </div>
      <Spacer />
    </div>
  );
};

export default ContactDetails;
