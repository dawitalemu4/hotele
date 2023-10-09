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
  ssl: true
};

const db = pgp()(connection);

export class EventQueries {
  async getAllEvents(req: Request, res: Response) {
    try {
      const allEvents = await db.manyOrNone("SELECT * FROM event");
      return res.json(allEvents);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching events." });
    }
  }

  async getEventByID(req: Request, res: Response, id: string) {
    try {
      const event = await db.one(`SELECT * FROM event WHERE id = ${id}`);
      return res.json(event);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching event." });
    }
  }

  async getEventByLocation(req: Request, res: Response, location: string) {
    try {
      const eventsByLocation = await db.manyOrNone(
        `SELECT * FROM event WHERE location = ${location}`
      );
      return res.json(eventsByLocation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching events." });
    }
  }
}
