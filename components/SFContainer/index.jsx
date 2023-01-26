import React from "react";

// comp
import { Container } from "@nextui-org/react";
import { BodyText } from "..";

const SFContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SFContainer;
