import { pool } from "../../database/db";

const createdUserIntoDB = async (payLoad: Record<string, unknown>) => {
  const { name, email, password, phone, role } = payLoad;
  const result = await pool.query(
    `
        INSERT INTO users(name, email, password, phone, role) VALUES($1, $2, $3, $4, $5) RETURNING *
        `,
    [name, email, password, phone, role]
  );

  return result;
};

export const userServices = {
  createdUserIntoDB,
};
