import dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";


export  const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STRING}`,
});

export  const initDB = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(150) UNIQUE NOT NULL,
          password TEXT NOT NULL,
          phone VARCHAR(18) NOT NULL,
          role VARCHAR(15)  NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
  )
        `);
};
