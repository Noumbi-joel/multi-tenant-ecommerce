import React from "react";

// comp
import { SFListNewCollection, SFSectionTexts } from "..";

const SFNewCollection = ({ collectionTitle, collectionMsg, data }) => {
  return (
    <div className="sf-banner-bottom-texts">
      <SFSectionTexts title={collectionTitle} msg={collectionMsg} />
      <SFListNewCollection data={data} btnTitleList="View all" />
    </div>
  );
};

export default SFNewCollection;
