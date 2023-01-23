// icons
import Home from "../public/home-icon.svg";
import Product from "../public/product-icon.svg";
import Order from "../public/order-icon.svg";
import Customer from "../public/customer-icon.svg";
import Plugin from "../public/plugin-icon.svg";
import Theme from "../public/theme-icon.svg";
import Setting from "../public/setting-icon.svg";
import Account from "../public/account.svg";
import SettingA from "../public/setting.svg";
import Logout from "../public/logout.svg";
import RedTrash from "../public/red-trash.svg";
import SmallEye from "../public/sm-eye.svg";
import Pencil from "../public/pencil.svg";

import moment from "moment/moment";

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
    link: "/_sites/dashboard",
    icon: <Home aria-label="home" />,
    isActive: true,
  },
  {
    id: 2,
    value: "Products",
    link: "/_sites/dashboard/products",
    icon: <Product aria-label="product" />,
    isActive: false,
  },
  {
    id: 8,
    value: "Categories",
    link: "/_sites/dashboard/categories",
    icon: "",
    isActive: false,
  },
  {
    id: 3,
    value: "Orders",
    link: "/_sites/dashboard/orders",
    icon: <Order aria-label="order" />,
    isActive: false,
  },
  {
    id: 4,
    value: "Customers",
    link: "/_sites/dashboard/customers",
    icon: <Customer aria-label="customer" />,
    isActive: false,
  },
  {
    id: 5,
    value: "Plugins",
    link: "/_sites/dashboard/plugins",
    icon: <Plugin aria-label="plugin" />,
    isActive: false,
  },
  {
    id: 6,
    value: "Themes",
    link: "/_sites/dashboard/themes",
    icon: <Theme aria-label="theme" />,
    isActive: false,
  },
  {
    id: 7,
    value: "Settings",
    link: "/_sites/dashboard/settings",
    icon: <Setting aria-label="setting" />,
    isActive: false,
  },
];

export const TOP_PRODUCTS = [
  { id: 1, image: "", title: "Hand knitted sweater", nbSales: 10 },
  { id: 2, image: "", title: "V-neck sweater", nbSales: 10 },
  { id: 3, image: "", title: "Cotton Sweater", nbSales: 10 },
  { id: 4, image: "", title: "Boyfriend sweater", nbSales: 10 },
  { id: 5, image: "", title: "Full zip sweater", nbSales: 10 },
];

export const TOP_CUSTOMERS = [
  { id: 1, name: "Chimdaalu Daniel", totalSpent: "25,000" },
  { id: 2, name: "Chuba Okadigbo", totalSpent: "25,000" },
  { id: 3, name: "Herbert Macaulay", totalSpent: "25,000" },
  { id: 4, name: "Paul Omu", totalSpent: "25,000" },
  { id: 5, name: "Chimaroke Nnamani", totalSpent: "25,000" },
];

export const ACTIONS = [
  { id: 1, title: "Account", icon: <Account aria-label="account" /> },
  { id: 2, title: "Help center", icon: <SettingA aria-label="setting" /> },
  { id: 3, title: "Logout", icon: <Logout aria-label="logout" /> },
];

export const PRODUCTS = [
  {
    id: 1,
    image:
      "https://i1.adis.ws/i/fv/PRODZFRSP000000000050217_rene_3-seater-fabric-sofa__lifestyle?$medium$&w=579&fmt=webp",
    title: "Shelves",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: true,
    draft: false,
    selected: false,
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Sofa",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: false,
    selected: false,
  },
  {
    id: 3,
    image:
      "https://cdn-images.article.com/products/SKU312A/2890x1500/image88310.jpg?fit=max&w=1200&q=100",
    title: "Tables",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: true,
    selected: false,
  },
  {
    id: 4,
    image:
      "https://images.tcdn.com.br/img/img_prod/936739/sofa_retratil_reclinavel_1_80m_de_largura_modelo_berlim_1333_1_beb8f865110501f1ff37754bd57c78c1.jpg",
    title: "DIY TV Units",
    price: "FCFA32,500",
    stock: "23 in stock",
    visible: false,
    published: false,
    draft: false,
    selected: false,
  },
];

export const FILTERS = [
  { id: 1, title: "All products" },
  { id: 2, title: "Published" },
  { id: 3, title: "Draft" },
  { id: 4, title: "Hidden" },
];

export const UPDATES = [
  { id: 1, title: "Last updated" },
  { id: 2, title: "Name" },
  { id: 3, title: "In stock" },
];

export const CATEGORIES = [
  {
    id: 1,
    image:
      "https://i1.adis.ws/i/fv/PRODZFRSP000000000050217_rene_3-seater-fabric-sofa__lifestyle?$medium$&w=579&fmt=webp",
    title: "Men",
    slug: "men",
    items: "0",
    visible: false,
    published: true,
    draft: false,
    selected: false,
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Women",
    slug: "women",
    items: "0",
    visible: false,
    published: false,
    draft: true,
    selected: false,
  },
];

export const FILTERS_CAT = [
  { id: 1, title: "All categories" },
  { id: 2, title: "Published" },
  { id: 3, title: "Draft" },
];

export const ITEM_ACTIONS = [
  { id: 1, title: "Edit product", icon: <Pencil aria-label="pencil" /> },
  { id: 2, title: "Hide product", icon: <SmallEye aria-label="sm-eye" /> },
  { id: 3, title: "Delete product", icon: <RedTrash aria-label="red-trash" /> },
];

export const ITEM_CAT_ACTIONS = [
  { id: 1, title: "Edit category", icon: <Pencil aria-label="pencil" /> },
  { id: 2, title: "Delete category", icon: <RedTrash aria-label="red-trash" /> },
];

let date = moment().format("MMM, DD YYYY");

export const ORDERS = [
  {
    id: 1,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 2,
    date: date,
    customerName: "Tunde Idiagbon",
    fullF: false,
    total: "FCFA19,300",
  },
  {
    id: 3,
    date: date,
    customerName: "Samuel Akintola",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 4,
    date: date,
    customerName: "Ayokunle Damola",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 5,
    date: date,
    customerName: "Adolphus Wabara",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 6,
    date: date,
    customerName: "Ike Nwachukwu",
    fullF: false,
    total: "FCFA19,300",
  },
  {
    id: 7,
    date: date,
    customerName: "Aladewura Ayotola",
    fullF: true,
    total: "FCFA19,300",
  },
  {
    id: 8,
    date: date,
    customerName: "Gbenga Bisi",
    fullF: false,
    total: "FCFA19,300",
  },
  {
    id: 9,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "FCFA19,300",
  },
];

export const ORDERS_FILTERS = [
  { id: 1, title: "All  orders" },
  { id: 2, title: "Fullfilled" },
  { id: 3, title: "Unfullfilled" },
];

export const ORDERS_SORT = [
  { id: 1, title: "Last created" },
  { id: 2, title: "Order number" },
];

export const ORDERS_HEADER = [
  { id: 1, title: "ID" },
  { id: 2, title: "Date" },
  { id: 3, title: "Customers" },
  { id: 4, title: "Fullfillment" },
  { id: 5, title: "Total" },
];

export const TRANSACTIONS = [
  { id: 1, title: "Payment method" },
  { id: 2, title: "Status" },
  { id: 3, title: "Amount" },
  { id: 4, title: "Date" },
];

export const PAID = [
  { id: 1, header: { headerValue: "Subtotal", value: "FCFA54,000" } },
  { id: 2, header: { headerValue: "Shipping cost", value: "FCFA54,000" } },
  { id: 3, header: { headerValue: "Total", value: "FCFA54,000" } },
];

export const CONTACT_DETAILS = {
  userName: "Johanna Mbappe",
  phone: "+237 650 18 21 34",
  email: "johanna.m@gmail.com",
};

export const SHIPPING_ADDRESS = {
  location: "Immeuble kontchou Akwa, Douala Cameroon",
};

export const SHIPPING_CARRIER = {
  courseType: "Course express",
  fullfillment: "Fulfilled - Jan 13, 2023",
};

export const CUSTOMERS_SORT = [
  { id: 1, title: "Last created" },
  { id: 2, title: "Ascending total spent" },
  { id: 3, title: "Descending total spent" },
];

export const CUSTOMERS = [
  {
    id: 1,
    customerName: "Saleh Mamman",
    totalSpent: "FCFA19,300",
    orders: "12",
  },
  {
    id: 2,
    customerName: "Musa Babayo",
    totalSpent: "FCFA19,300",
    orders: "15",
  },
  {
    id: 3,
    customerName: "Reno Omokri",
    totalSpent: "FCFA19,300",
    orders: "1",
  },
  {
    id: 4,
    customerName: "Babajide Sanwo-olu",
    totalSpent: "FCFA19,300",
    orders: "5",
  },
  {
    id: 5,
    customerName: "Sullivan Chime",
    totalSpent: "FCFA19,300",
    orders: "56",
  },
  {
    id: 6,
    customerName: "K.O. Mbadiwe",
    totalSpent: "FCFA19,300",
    orders: "4",
  },
  {
    id: 7,
    customerName: "Chimbuchi Buchi",
    totalSpent: "FCFA19,300",
    orders: "2",
  },
  {
    id: 8,
    customerName: "Babatunde Raji Fashola",
    totalSpent: "FCFA19,300",
    orders: "5",
  },
  {
    id: 9,
    customerName: "Muhammed Shuwa",
    totalSpent: "FCFA19,300",
    orders: "0",
  },
];

export const SETTINGS_NAV = [
  { id: 1, title: "General", isActive: true },
  { id: 2, title: "Account", isActive: false },
  { id: 3, title: "Payments", isActive: false },
  { id: 8, title: "Social profiles", isActive: false },
  { id: 9, title: "Legal", isActive: false },
];

export const SITE_LANG = [
  { id: 1, title: "en-US" },
  { id: 2, title: "fr-FRA" },
];

export const TIMEZONE = [
  { id: 1, title: "UTC" },
  { id: 2, title: "PNT" },
  { id: 3, title: "PST" },
  { id: 4, title: "MST" },
];

export const CURRENCY = [
  { id: 1, title: "USD" },
  { id: 2, title: "FCFA" },
];
