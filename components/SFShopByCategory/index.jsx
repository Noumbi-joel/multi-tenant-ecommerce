import React from "react";

// comp
import { HeadingText, SFSectionTexts } from "..";
import { Grid } from "@mui/material";

// assets
import { COLORS } from "../../assets/colors";

const SFShopByCategory = () => {
  return (
    <div className="shop-by-category-container">
      <SFSectionTexts
        title="Shop by category"
        msg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
      />
      <Grid container spacing={1} mt={5} sx={{ px: { xs: 2, sm: 10 } }}>
        <Grid item xs={12} sm={4}>
          <div className="sf-category-img-container">
            <img
              src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg"
              alt="women"
              className="sf-category-image"
            />
            <HeadingText
              type="h3"
              title="Women"
              color={COLORS.white}
              className="sf-category-title"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="sf-category-img-container">
            <img
              src="https://images-us.nivea.com/-/media/local/ng/homepage-teasers/advice3/men-skin---main-banner.jpg?rx=1552&ry=0&rw=1452&rh=806"
              alt="men"
              className="sf-category-image"
            />
            <HeadingText
              type="h3"
              title="Men"
              color={COLORS.white}
              className="sf-category-title"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="sf-category-img-container">
            <img
              src="https://www.chcontario.ca/wp-content/uploads/2022/04/shutterstock_735971812-1024x683.jpg"
              alt="kids"
              className="sf-category-image"
            />
            <HeadingText
              type="h3"
              title="Kids"
              color={COLORS.white}
              className="sf-category-title"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SFShopByCategory;
