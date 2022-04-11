const e = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/authenticate");

const Cart = require("../../models/Cart");

router.post("/", auth, async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      const cart = new Cart({
        userId: req.user.id,
        products: [
          {
            productId: productId,
            quantity: 1,
          },
        ],
      });

      await cart.save();
      res.json(cart);
    } else {
      const index = cart.products.findIndex((p) => p.productId == productId);

      if (index > -1) {
        cart.products[index].quantity++;
      } else {
        let product = {
          productId: productId,
          quantity: 1,
        };
        cart.products.push(product);
      }

      await cart.save();
      res.json({ cart });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "products.productId"
    );

    if (!cart) {
      return res.status(400).json({ errors: [{ msg: "No items found" }] });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).send("Server error");
    console.log(error);
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    let cart = await Cart.deleteOne({ userId: req.user.id });

    res.json(cart);
  } catch (error) {
    res.status(500).send("Server error");
    console.log(error);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    cart.products = cart.products.filter(
      (b) => !b.productId.equals(req.params.id)
    );

    res.json(cart);
    await cart.save();
  } catch (error) {
    res.status(500).send("Server error");
    console.log(error);
  }
});

router.put("/:id/:action", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    const product = cart.products.find((p) => p.productId == req.params.id);

    if (req.params.action == "increment") {
      product.quantity++;
    } else {
      product.quantity--;

      if (product.quantity < 1) {
        cart.products = cart.products.filter(
          (b) => !b.productId.equals(req.params.id)
        );
      }
    }

    res.json(cart);
    await cart.save();
  } catch (error) {
    res.status(500).send("Server error");
    console.log(error);
  }
});

module.exports = router;
