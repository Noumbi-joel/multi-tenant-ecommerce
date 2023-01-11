// icons
import Home from "../public/home-icon.svg";
import Product from "../public/product-icon.svg";
import Order from "../public/order-icon.svg";
import Customer from "../public/customer-icon.svg";
import Plugin from "../public/plugin-icon.svg";
import Theme from "../public/theme-icon.svg";
import Setting from "../public/setting-icon.svg";

export const HEADER_NAV = [
  { id: 1, title: "Products", link: "/products" },
  { id: 2, title: "Features", link: "/features" },
  { id: 3, title: "Pricing", link: "/pricing" },
  { id: 4, title: "FAQ", link: "/faq" },
];

export const SELECT_VALUES = {
  lang: ["FR", "ENG"],
  bCategory: [
    { id: 1, value: "Grocery/Food/Beverages" },
    { id: 2, value: "Restaurants & Hotels" },
    { id: 3, value: "Electronics/Computer Accessories" },
    { id: 4, value: "Art/Painting" },
    { id: 5, value: "Home essentials/furniture" },
    { id: 6, value: "Apparel/Fashion/Shoes/Accessories" },
    { id: 7, value: "Sport/Fitness/Outdoors" },
    { id: 8, value: "Toys/Crafts/Hobbies/Gifts/Pet care" },
  ],
};

export const VERTICAL_HEADER_ITEMS = [
  {
    id: 1,
    value: "Dashboard",
    link: "/dashboard",
    icon: <Home aria-label="home" />,
  },
  {
    id: 2,
    value: "Products",
    link: "/dashboard/products",
    icon: <Product aria-label="product" />,
  },
  {
    id: 3,
    value: "Orders",
    link: "/dashboard/orders",
    icon: <Order aria-label="order" />,
  },
  {
    id: 4,
    value: "Customers",
    link: "/dashboard/customers",
    icon: <Customer aria-label="customer" />,
  },
  {
    id: 5,
    value: "Plugins",
    link: "/dashboard/plugins",
    icon: <Plugin aria-label="plugin" />,
  },
  {
    id: 6,
    value: "Themes",
    link: "/dashboard/themes",
    icon: <Theme aria-label="theme" />,
  },
  {
    id: 7,
    value: "Settings",
    link: "/dashboard/settings",
    icon: <Setting aria-label="setting" />,
  },
];

export const PRODUCTS = [
  { id: 1, image: "", title: "Hand knitted sweater", nbSales: 10 },
  { id: 2, image: "", title: "V-neck sweater", nbSales: 10 },
  { id: 3, image: "", title: "Cotton Sweater", nbSales: 10 },
  { id: 4, image: "", title: "Boyfriend sweater", nbSales: 10 },
  { id: 5, image: "", title: "Full zip sweater", nbSales: 10 },
];
