const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const storeLogs = require("./middleware/storeLogs");
var useragent = require("express-useragent");

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

//Connect to database
connectDB();

//Middleware
app.use(useragent.express());
app.use(express.json({ extended: false }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(storeLogs);

//Routes
app.get("/", (req, res) => res.send("API Running"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/books", require("./routes/api/books"));
app.use("/api/cart", require("./routes/api/cart"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
