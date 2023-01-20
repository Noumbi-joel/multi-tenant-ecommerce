import {
  FILTERING,
  FILTERING_CATEGORY,
  FILTERING_CUSTOMERS,
  FILTERING_ORDERS,
} from "../constants";

// verify if email is valid or not
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// input search filter for products && categories
export const searchFilter = (
  e,
  type,
  items,
  filteredItems,
  setSearch,
  dispatch
) => {
  const value = e.target.value;

  if (value) {
    const newData = filteredItems.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      return itemData.indexOf(value.toUpperCase()) > -1;
    });

    type === "products" && dispatch({ type: FILTERING, payload: newData });
    type === "categories" &&
      dispatch({ type: FILTERING_CATEGORY, payload: newData });
    setSearch(value);
  } else {
    type === "products" && dispatch({ type: FILTERING, payload: items });
    type === "categories" &&
      dispatch({ type: FILTERING_CATEGORY, payload: items });
    setSearch(value);
  }
};

// input search filter for products && categories
export const searchFilterName = (
  e,
  type,
  items,
  filteredItems,
  setSearch,
  dispatch
) => {
  const value = e.target.value;

  if (value) {
    const newData = filteredItems.filter((item) => {
      const itemData = item.customerName
        ? item.customerName.toUpperCase()
        : "".toUpperCase();
      return itemData.indexOf(value.toUpperCase()) > -1;
    });
    type === "orders" && dispatch({ type: FILTERING_ORDERS, payload: newData });
    type === "customers" &&
      dispatch({ type: FILTERING_CUSTOMERS, payload: newData });
    setSearch(value);
  } else {
    type === "orders" && dispatch({ type: FILTERING_ORDERS, payload: items });
    type === "customers" &&
      dispatch({ type: FILTERING_CUSTOMERS, payload: items });
    setSearch(value);
  }
};
