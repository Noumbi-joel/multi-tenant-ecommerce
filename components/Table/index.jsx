import React, { useState } from "react";

// comp
import { Checkbox, Divider } from "@nextui-org/react";
import BodyText from "../BodyText";
import { ProductList, ProductListItem } from "..";

// assets
import { COLORS } from "../../assets/colors";
import { CATEGORY_ITEMS, PRODUCTS } from "../../helpers";

const Table = ({
  tableHeaderTitle,
  tableHeaderOne,
  tableHeaderTwo,
  productList,
}) => {
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <div>
      <div className="linear-layout-flat" style={{ marginTop: 50 }}>
        <Checkbox>
          <BodyText
            type="mr"
            title={tableHeaderTitle}
            color={COLORS.grayscale_900}
          />
        </Checkbox>
        <BodyText
          type="mr"
          title={tableHeaderOne}
          color={COLORS.grayscale_900}
        />
        <BodyText
          type="mr"
          title={tableHeaderTwo}
          color={COLORS.grayscale_900}
        />
        <div />
      </div>
      <Divider className="divider-item" />

      {productList && <ProductList data={products} />}

      {/* {CATEGORY_ITEMS.map((c, i) => (
        <ProductListItem
          key={c.id}
          type="search-p"
          image={c.image}
          price={c.slug}
          stock={c.items}
          title={c.title}
          draft={i === 1 && true}
          onClick={onClick}
        />
      ))} */}
    </div>
  );
};

export default Table;
