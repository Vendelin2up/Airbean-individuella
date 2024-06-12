import nedb from "nedb-promise";

const users = new nedb({ filename: "models/users.db", autoload: true });
const cart = new nedb({ filename: "models/cart.db", autoload: true });
const menu = new nedb({ filename: "models/menu.db", autoload: true });
const orders = new nedb({ filename: "models/orders.db", autoload: true });
const promotions = new nedb({
  filename: "models/promotions.db",
  autoload: true,
});

export { users, cart, menu, orders, promotions };
