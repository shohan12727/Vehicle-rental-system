
import { Request, Response } from "express";
import { initDB, pool } from "./database/db";
const express = require("express");
const app = express();
const port = 5000;

// parse
app.use(express.json());

initDB();

app.post("/users", async (req: Request, res: Response) => {
  const { name, email, password, phone, role } = req.body;

  const result = await pool.query(
        `
        INSERT INTO users(name, email, password, phone, role) VALUES($1, $2, $3, $4, $5) RETURNING *
        `,
    [name, email, password, phone, role]
  );

  res.status(200).json({
    success: true,
    message: "users created",
    data: result.rows[0],
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
