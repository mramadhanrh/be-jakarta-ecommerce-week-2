import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import productRoutes from "./routes/products-routes.js";
import profileRoutes from "./routes/profile-routes.js";

import "./models/index.js";

import { startSequelize } from "./utils/startSequelize.js";

const app = express();
const port = 3000;

startSequelize();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRoutes);
app.use("/profile", profileRoutes);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.log(err);
  // Sistem Logging

  res.status(500).json({
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
