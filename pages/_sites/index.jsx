import React from "react";

// comp
import {
  SFBanner,
  SFContainer,
  SFHeader,
  SFNewCollection,
  SFShopByCategory,
  SFFooter,
  SFDrawer,
} from "../../components";
import { Spacer } from "@nextui-org/react";

// assets
import { NEW_COLLECTIONS } from "../../helpers";

import { useSelector, useDispatch } from "react-redux";

const StoreFront = () => {
  const { drawerVisible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <div className="sf-container">
      <SFDrawer dispatch={dispatch} drawerVisible={drawerVisible} />
      <SFContainer>
        <SFHeader dispatch={dispatch} />
        <Spacer />
        <SFBanner />
        <SFNewCollection
          collectionTitle="New and stylish collection"
          collectionMsg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
          data={NEW_COLLECTIONS}
        />
      </SFContainer>
      <SFShopByCategory />
      <SFFooter />
    </div>
  );
};

export default StoreFront;
