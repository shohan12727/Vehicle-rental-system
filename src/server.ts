import { Request, Response } from "express";
import { initDB, pool } from "./database/db";
import { userRoute } from "./modules/users/user.route";
const express = require("express");
const app = express();
const port = 5000;

// parse
app.use(express.json());

initDB();

app.use("/api/v1/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
