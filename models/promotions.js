import Datastore from "nedb-promise";

const promotions = new Datastore({
  filename: "models/promotions.db",
  autoload: true,
});

export default promotions;
