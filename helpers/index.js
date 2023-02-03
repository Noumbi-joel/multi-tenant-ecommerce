// icons
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
    link: "/dashboard",
    isActive: true,
  },
  {
    id: 2,
    value: "Products",
    link: "/dashboard/products",
    isActive: false,
  },
  {
    id: 8,
    value: "Categories",
    link: "/dashboard/categories",
    icon: "",
    isActive: false,
  },
  {
    id: 3,
    value: "Orders",
    link: "/dashboard/orders",
    isActive: false,
  },
  {
    id: 4,
    value: "Customers",
    link: "/dashboard/customers",
    isActive: false,
  },
  {
    id: 5,
    value: "Plugins",
    link: "/dashboard/plugins",
    isActive: false,
  },
  {
    id: 6,
    value: "Themes",
    link: "/dashboard/themes",
    isActive: false,
  },
  {
    id: 7,
    value: "Settings",
    link: "/dashboard/settings",
    isActive: false,
  },
];

export const TOP_PRODUCTS = [
  { id: 1, image: "", title: "Hand knitted sweater", nbSales: 10 },
  { id: 2, image: "", title: "V-neck sweater", nbSales: 10 },
  { id: 3, image: "", title: "Cotton Sweater", nbSales: 10 },
  { id: 4, image: "", title: "Boyfriend sweater", nbSales: 10 },
];

export const TOP_CUSTOMERS = [
  { id: 1, name: "Chimdaalu Daniel", totalSpent: "25,000" },
  { id: 2, name: "Chuba Okadigbo", totalSpent: "25,000" },
  { id: 3, name: "Herbert Macaulay", totalSpent: "25,000" },
  { id: 4, name: "Paul Omu", totalSpent: "25,000" },
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
    price: "32,500",
    stock: "100",
    visible: false,
    published: true,
    draft: false,
    selected: false,
    createdAt: new Date("2020-05-20").toISOString().toString(),
  },
  {
    id: 2,
    image:
      "http://cdn.shopify.com/s/files/1/2660/5106/products/73170500_S1_800x.jpg?v=1570051074",
    title: "Sofa",
    price: "32,500",
    stock: "15",
    visible: false,
    published: false,
    draft: false,
    selected: false,
    createdAt: new Date("2015-05-13").toISOString().toString(),
  },
  {
    id: 3,
    image:
      "https://cdn-images.article.com/products/SKU312A/2890x1500/image88310.jpg?fit=max&w=1200&q=100",
    title: "Tables",
    price: "32,500",
    stock: "2",
    visible: false,
    published: false,
    draft: true,
    selected: false,
    createdAt: new Date("2023-08-13").toISOString().toString(),
  },
  {
    id: 4,
    image:
      "https://images.tcdn.com.br/img/img_prod/936739/sofa_retratil_reclinavel_1_80m_de_largura_modelo_berlim_1333_1_beb8f865110501f1ff37754bd57c78c1.jpg",
    title: "DIY TV Units",
    price: "32,500",
    stock: "23",
    visible: false,
    published: false,
    draft: false,
    selected: false,
    createdAt: new Date("2018-05-13").toISOString().toString(),
  },
];

export const FILTERS = [
  { id: 1, title: "All products" },
  { id: 2, title: "Published" },
  { id: 3, title: "Draft" },
  { id: 4, title: "Hidden" },
];

export const UPDATES = [
  { id: 1, title: "Last updated (p)" },
  { id: 2, title: "Name (p)" },
  { id: 3, title: "In stock" },
];

export const UPDATES_CAT = [
  { id: 1, title: "Last updated (ca)" },
  { id: 2, title: "Name (ca)" },
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
    createdAt: new Date("2012-05-13").toISOString().toString(),
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
    createdAt: new Date("2019-05-13").toISOString().toString(),
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
  {
    id: 2,
    title: "Delete category",
    icon: <RedTrash aria-label="red-trash" />,
  },
];

let date = moment().format("MMM, DD YYYY");

export const ORDERS = [
  {
    id: 14,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "19,300",
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 5,
    date: date,
    customerName: "Tunde Idiagbon",
    fullF: false,
    total: "19,300",
    createdAt: new Date("2012-05-13").toISOString().toString(),
  },
  {
    id: 3,
    date: date,
    customerName: "Samuel Akintola",
    fullF: true,
    total: "19,300",
    createdAt: new Date("2014-05-13").toISOString().toString(),
  },
  {
    id: 4,
    date: date,
    customerName: "Ayokunle Damola",
    fullF: true,
    total: "19,300",
    createdAt: new Date("2025-05-13").toISOString().toString(),
  },
  {
    id: 84,
    date: date,
    customerName: "Adolphus Wabara",
    fullF: true,
    total: "19,300",
    createdAt: new Date("2020-05-13").toISOString().toString(),
  },
  {
    id: 42,
    date: date,
    customerName: "Ike Nwachukwu",
    fullF: false,
    total: "19,300",
    createdAt: new Date("2019-08-13").toISOString().toString(),
  },
  {
    id: 58,
    date: date,
    customerName: "Aladewura Ayotola",
    fullF: true,
    total: "19,300",
    createdAt: new Date("2019-05-25").toISOString().toString(),
  },
  {
    id: 20,
    date: date,
    customerName: "Gbenga Bisi",
    fullF: false,
    total: "19,300",
    createdAt: new Date("2019-02-13").toISOString().toString(),
  },
  {
    id: 9,
    date: date,
    customerName: "Muhammed Shuwa",
    fullF: true,
    total: "19,300",
    createdAt: new Date("2022-05-13").toISOString().toString(),
  },
];

export const ORDERS_FILTERS = [
  { id: 1, title: "All  orders" },
  { id: 2, title: "Fullfilled" },
  { id: 3, title: "Unfullfilled" },
];

export const ORDERS_SORT = [
  { id: 1, title: "Last created (o)" },
  { id: 2, title: "Order number (o)" },
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
  { id: 1, title: "Last created (c)" },
  { id: 2, title: "Ascending total spent (c)" },
  { id: 3, title: "Descending total spent" },
];

export const CUSTOMERS = [
  {
    id: 1,
    customerName: "Saleh Mamman",
    totalSpent: "19300",
    orders: "12",
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 2,
    customerName: "Musa Babayo",
    totalSpent: "10300",
    orders: "15",
    createdAt: new Date("2019-08-13").toISOString().toString(),
  },
  {
    id: 3,
    customerName: "Reno Omokri",
    totalSpent: "15800",
    orders: "1",
    createdAt: new Date("2019-01-13").toISOString().toString(),
  },
  {
    id: 4,
    customerName: "Babajide Sanwo-olu",
    totalSpent: "9000",
    orders: "5",
    createdAt: new Date("2012-05-13").toISOString().toString(),
  },
  {
    id: 5,
    customerName: "Sullivan Chime",
    totalSpent: "50000",
    orders: "56",
    createdAt: new Date("2018-08-13").toISOString().toString(),
  },
  {
    id: 6,
    customerName: "K.O. Mbadiwe",
    totalSpent: "15300",
    orders: "4",
    createdAt: new Date("2020-08-13").toISOString().toString(),
  },
  {
    id: 7,
    customerName: "Chimbuchi Buchi",
    totalSpent: "4300",
    orders: "2",
    createdAt: new Date("2019-12-13").toISOString().toString(),
  },
  {
    id: 8,
    customerName: "Babatunde Raji Fashola",
    totalSpent: "1300",
    orders: "5",
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 9,
    customerName: "Muhammed Shuwa",
    totalSpent: "59300",
    orders: "0",
    createdAt: new Date("2019-05-18").toISOString().toString(),
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

export const STATES = [
  { id: 1, title: "Adamaoua" },
  { id: 8, title: "Centre" },
  { id: 2, title: "Est" },
  { id: 3, title: "Extrême-Nord" },
  { id: 4, title: "Littoral" },
  { id: 5, title: "Nord" },
  { id: 6, title: "Nord-Ouest" },
  { id: 7, title: "Ouest" },
];

export const COUNTRIES = [
  { id: 1, title: "Nigeria" },
  { id: 2, title: "Cameroon" },
  { id: 3, title: "Ivory coast" },
];

export const PAYMENTS_METHODS = [
  { id: 1, title: "Orange money" },
  { id: 2, title: "Mobile Money" },
];

export const PAYMENTS_OPERATORS = [
  { id: 1, title: "Orange" },
  { id: 2, title: "MTN" },
];

export const PAYMENTS = [
  {
    id: 1,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Success",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 2,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Success",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 3,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Failed",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 4,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Failed",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 5,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Success",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 6,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Pending",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 7,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Success",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 8,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Success",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
  {
    id: 9,
    paymentMethod: "Orange money",
    amount: "19300",
    status: "Success",
    phone: "+237670555555",
    date: date,
    createdAt: new Date("2019-05-13").toISOString().toString(),
  },
];

// STORE FRONT

export const SF_PRODUCTS = [
  {
    id: 1,
    image:
      "https://assets.vogue.com/photos/6356dcf58e93a0413a14f9f1/4:3/w_1600%2Cc_limit/00018-chanel-spring-2023-ready-t.jpeg",
    images: [],
    title: "Small Convertible Flex Bag",
    price: "320,000",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/prog.world/wp-content/uploads/2021/05/4a7e68c6e9efd6ef1d8ec0fcb3797111.jpg?fit=1920%2C1279&ssl=1",
    images: [],

    title: "Flex Bag",
    price: "5,000",
  },
  {
    id: 3,
    image: "https://i.ebayimg.com/images/g/fnEAAOSw3QldTh1C/s-l1600.jpg",
    images: [],

    title: "Billy Jeans DVD",
    price: "1,000",
  },
  {
    id: 4,
    image:
      "https://thumbs.dreamstime.com/b/wardrobe-cute-baby-clothes-home-stuff-133409491.jpg",
    images: [],

    title: "Wardrobe Baby",
    price: "100,000",
  },
  {
    id: 5,
    image:
      "https://andscape.com/wp-content/uploads/2021/07/74876E_LS_4-e1626124022792.jpg?w=700",
    images: [],

    title: "Nba Ball",
    price: "15,000",
  },
  {
    id: 6,
    image:
      "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C51MGxAYx-9L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png",
    images: [],

    title: "Vogue T-shirt",
    price: "4,000",
  },
  {
    id: 7,
    image:
      "https://thumbs.dreamstime.com/b/woman-louis-vuitton-bag-chanel-scarf-fendi-fashion-show-milan-week-italy-september-street-style-194224047.jpg",
    images: [],

    title: "LV Bag",
    price: "80,000",
  },
  {
    id: 8,
    image:
      "http://cdn.shopify.com/s/files/1/1288/9423/products/IMG_20210527_164012_1024x1024.jpg?v=1622207585",
    images: [],

    title: "Givenchi watch",
    price: "54,000",
  },
  {
    id: 9,
    image:
      "https://www.apple.com/v/apple-watch-se/i/images/overview/hero/hero__fmx18j9bq0ya_large.jpg",
    images: [],

    title: "Apple Watch",
    price: "39,000",
  },
  {
    id: 10,
    image:
      "https://cdn.luxe.digital/media/2019/09/12091012/most-expensive-rolex-pearlmaster-luxe-digital.jpg",
    images: [],

    title: "Rolex Watch Diamonds",
    price: "500,000",
  },
  {
    id: 11,
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/2019/12/11001946/Richard_Mille_Tourbillon-RM-56-02-Sapphire-front_LG-e1576004009721.jpg?tr=w-1200,h-900",
    images: [],

    title: "Rich mill Watch Tourbillon",
    price: "1000,000",
  },
  {
    id: 12,
    image:
      "http://cdn.shopify.com/s/files/1/0599/5941/0859/products/air-jordan-1-mid-light-smoke-grey-BL542.1_1200x1200.png?v=1643209037",
    images: [],

    title: "Nike & Jordan 1996",
    price: "100,000",
  },
];

export const SF_AVAILABILITIES = [
  { id: 1, title: "Availability" },
  { id: 2, title: "Availability" },
  { id: 3, title: "Availability" },
  { id: 4, title: "Availability" },
];

export const SF_CATEGORIES = ["Music", "Game", "Console", "Cooking"];

export const SF_PRICE = [
  ">=10 000",
  ">=25 000",
  ">=50 000",
  ">=75 000",
  ">=100 000",
];

export const SF_COLOR = ["Green", "Red", "Yellow", "Dark"];

export const SF_SORT = [
  "Most recent",
  "Most purchased",
  "Most liked",
  "Most searched",
];

export const SF_COLORS = [
  { id: 1, title: "Green" },
  { id: 2, title: "Red" },
  { id: 3, title: "Yellow" },
  { id: 4, title: "Dark" },
];

export const SF_SIZES = [
  { id: 1, title: "XXS" },
  { id: 2, title: "XS" },
  { id: 3, title: "S" },
  { id: 4, title: "M" },
  { id: 5, title: "L" },
  { id: 6, title: "XL" },
  { id: 7, title: "XXl" },
];

export const SF_HISTORY = [
  { id: 1, title: "Cart" },
  { id: 2, title: "Information" },
  { id: 3, title: "Shipping" },
  { id: 4, title: "Payment" },
];

export const SF_PROD_IMG_DETAILS = [
  "https://media.istockphoto.com/id/1294339577/fr/photo/jeune-belle-femme.jpg?s=612x612&w=0&k=20&c=MFJMOH8nzBDZcfi5Q9P6nc1hZNo5_cy0uT-s5xUzzyA=",
  "https://media.istockphoto.com/id/1294339577/fr/photo/jeune-belle-femme.jpg?s=612x612&w=0&k=20&c=MFJMOH8nzBDZcfi5Q9P6nc1hZNo5_cy0uT-s5xUzzyA=",
  "https://media.istockphoto.com/id/1294339577/fr/photo/jeune-belle-femme.jpg?s=612x612&w=0&k=20&c=MFJMOH8nzBDZcfi5Q9P6nc1hZNo5_cy0uT-s5xUzzyA=",
  "https://media.istockphoto.com/id/1294339577/fr/photo/jeune-belle-femme.jpg?s=612x612&w=0&k=20&c=MFJMOH8nzBDZcfi5Q9P6nc1hZNo5_cy0uT-s5xUzzyA=",
];
