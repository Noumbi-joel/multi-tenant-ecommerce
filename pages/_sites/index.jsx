import React from "react";

// comp
import {
  SFBanner,
  SFContainer,
  SFNewCollection,
  SFShopByCategory,
  SFFooter,
  SFDrawerContainer,
} from "../../components";
import { Spacer } from "@nextui-org/react";

// assets
import { SF_PRODUCTS } from "../../helpers";
import { useRouter } from "next/router";

const StoreFront = () => {
  const router = useRouter();
  return (
    <SFDrawerContainer>
      <SFContainer>
        <Spacer />
        <SFBanner />
        <SFNewCollection
          collectionTitle="New and stylish collection"
          collectionMsg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
          data={SF_PRODUCTS.slice(0, 8)}
          router={router}
        />
      </SFContainer>
      <SFShopByCategory />
      <SFFooter />
    </SFDrawerContainer>
  );
};

export default StoreFront;
