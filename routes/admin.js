// routes/admin.js
import express from "express";
import nedb from "nedb-promise";
import requireAdmin from "../middlewares/requireAdmin.js";
// import promotions from "../models/promotions.js";
// import menu from "../models/coffeeMenu.js";
import { menu, promotions } from "../models/databases.js";

const router = express.Router();
const menuDb = new nedb({ filename: "models/menu.db", autoload: true });

router.use(express.json());

// Lägg till en ny produkt i menyn
router.post("/menu", requireAdmin, async (req, res) => {
  const { id, title, desc, price } = req.body;
  if (!id || !title || !desc || !price) {
    return res
      .status(400)
      .send("All product properties (id, title, desc, price) are required.");
  }

  const product = {
    id,
    title,
    desc,
    price,
    createdAt: new Date().toISOString(),
  };

  try {
    await menu.insert(product);
    res.status(201).send("Product added successfully.");
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

// Modifiera en produkt i menyn
router.put("/menu/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { title, desc, price } = req.body;

  if (!title && !desc && !price) {
    return res
      .status(400)
      .send(
        "At least one property (title, desc, price) is required to update."
      );
  }

  const updates = {
    modifiedAt: new Date().toISOString(),
  };
  if (title) updates.title = title;
  if (desc) updates.desc = desc;
  if (price) updates.price = price;

  try {
    const numUpdated = await menu.update({ id }, { $set: updates });
    if (numUpdated === 0) {
      return res.status(404).send("Product not found.");
    }
    res.send("Product updated successfully.");
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

// Ta bort en produkt i menyn
router.delete("/menu/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const numRemoved = await menu.remove({ id }, {});
    if (numRemoved === 0) {
      return res.status(404).send("Product not found.");
    }
    res.send("Product removed successfully.");
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

// Lägg till en ny kampanj
router.post("/promotions", requireAdmin, async (req, res) => {
  const { products, price } = req.body;

  if (!Array.isArray(products) || !products.length) {
    return res
      .status(400)
      .send("Products array is required and cannot be empty.");
  }

  if (typeof price !== "number") {
    return res.status(400).send("A valid promotion price is required.");
  }

  try {
    const validProducts = [];
    for (const productId of products) {
      const product = await menuDb.findOne({ id: productId });
      if (!product) {
        return res.status(404).send(`Product with id ${productId} not found.`);
      }
      validProducts.push(product);
    }

    const promotion = {
      products: validProducts,
      price,
      createdAt: new Date().toISOString(),
    };

    await promotions.insert(promotion);
    res.status(201).send("Promotion added successfully.");
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

export default router;
