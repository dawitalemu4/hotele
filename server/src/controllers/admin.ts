import { Request, Response } from "express";
import pgp from "pg-promise";
import { Admin } from "../models/admin";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: true
};

const db = pgp()(connection);

export class AdminQueries {
  async checkCredentials(req: Request, res: Response, username: string, password: string) {
    try {
      const credCombo: Admin = { username: username, password: password };
      const checkCredentialsCombo = await db.one("SELECT * FROM admin WHERE username = $1 AND password = $2", [credCombo.username, credCombo.password]);
      if (checkCredentialsCombo) {
        return res.status(200).json(checkCredentialsCombo);
      } else {
        return res.status(404).json({ error: "Invalid Credentials." });
      }
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: "Invalid Credentials." });
    }
  }
}