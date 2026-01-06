import { Request, Response } from "express";
import { initDB, pool } from "./database/db";
const express = require("express");
const app = express();
const port = 5000;

// parse
app.use(express.json());

initDB();

app.use("/users", );

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
