import { Grid } from "@mui/material";
import { Spacer } from "@nextui-org/react";
import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";
import Button from "../Button";

const SFListNewCollection = ({ data }) => {
  return (
    <div>
      <Grid container spacing={1} mt={5}>
        {data.map((item) => (
          <Grid item xs={6} sm={3} key={item.id} mt={2}>
            <img
              src={item.image}
              alt={item.title}
              className="sf-list-collection-image"
            />
            <BodyText type="mr" title={item.title} color="#121212" />
            <BodyText type="lm" title={"FCFA " + item.price} color="#121212" />
          </Grid>
        ))}
      </Grid>
      <Spacer />
      <div className="sf-view-all-btn-container">
        <Button
          titleType="lr"
          titleColor={COLORS.grayscale_900}
          className="sf-view-all-btn"
          title="View all"
        />
      </div>
    </div>
  );
};

export default SFListNewCollection;

/**sx={{ bgcolor: "red" }} */
