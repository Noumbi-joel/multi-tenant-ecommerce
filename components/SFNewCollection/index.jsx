import React from "react";

// comp
import { SFListNewCollection, SFSectionTexts } from "..";

const SFNewCollection = ({ collectionTitle, collectionMsg, data, router }) => {
  return (
    <div className="sf-banner-bottom-texts">
      <SFSectionTexts title={collectionTitle} msg={collectionMsg} />
      <SFListNewCollection
        data={data}
        btnTitleList="View all"
        router={router}
      />
    </div>
  );
};

export default SFNewCollection;
