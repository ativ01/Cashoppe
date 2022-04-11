const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/authenticate");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../../models/User");

router.post(
  "/signup",
  [
    check("name", "Name is required.").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({ name, email, password });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "48h" },
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token, {
            expires: new Date(Date.now() + 48 * 3600 * 1000),
            secure: false,
            httpOnly: true,
          });
          res.cookie("isLogged", true, {
            expires: new Date(Date.now() + 48 * 3600 * 1000),
            secure: false,
            httpOnly: false,
          });
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "48h" },
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token, {
            expires: new Date(Date.now() + 48 * 3600 * 1000),
            secure: false,
            httpOnly: true,
          });
          res.cookie("isLogged", true, {
            expires: new Date(Date.now() + 48 * 3600 * 1000),
            secure: false,
            httpOnly: false,
          });
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/logout", auth, (req, res) => {
  res.clearCookie("token");
  res.clearCookie("isLogged");
  res.end();
});

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
