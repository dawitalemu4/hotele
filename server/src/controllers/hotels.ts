import { Request, Response } from "express";
import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: true,
};

const db = pgp()(connection);

export class HotelQueries {
  async getAllHotels(req: Request, res: Response) {
    try {
      const allHotels = await db.manyOrNone("SELECT * FROM hotel");
      return res.json(allHotels);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotels." });
    }
  }

  async getHotelByID(req: Request, res: Response, id: string) {
    try {
      const hotel = await db.one(`SELECT * FROM hotel WHERE id = ${id}`);
      return res.json(hotel);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotel." });
    }
  }

  async getHotelByLocation(req: Request, res: Response, location: string) {
    try {
      const hotelsByLocation = await db.manyOrNone(
        `SELECT * FROM hotel WHERE location = ${location}`
      );
      return res.json(hotelsByLocation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotels." });
    }
  }
}
