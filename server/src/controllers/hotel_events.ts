import { Request, Response } from "express";
import pgp from "pg-promise";
import { HotelEvent } from "../models/hotel_events";
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

export class HotelEventQueries {
  async getAllHotelEvents(req: Request, res: Response) {
    try {
      const allHotelEvents = await db.manyOrNone("SELECT * FROM hotel_event");
      return res.json(allHotelEvents);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotel events." });
    }
  }

  async getHotelEventByID(req: Request, res: Response, id: string) {
    try {
      const hotelEvent = await db.one("SELECT * FROM hotel_event WHERE id = $1", [id]);
      return res.json(hotelEvent);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotel event." });
    }
  }

  async getHotelEventsByLocation(req: Request, res: Response, location: string) {
    try {
      const hotelEventsByLocation = await db.manyOrNone("SELECT * FROM hotel_event WHERE location = $1", [location]);
      return res.json(hotelEventsByLocation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotel events." });
    }
  }

  createHotelEvent(req: Request, res: Response, data: any) {
    const hotelEvent: HotelEvent = data;
    db.none("INSERT INTO hotel_event (location, description, hotel_id, event_id) VALUES ($1, $2, $3, $4)", [hotelEvent.description, hotelEvent.location, hotelEvent.hotel_id, hotelEvent.event_id])
    .then(() => {
      console.log("Hotel event added");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateHotelEvent(req: Request, res: Response, data: any, id: string) {
    const hotelEvent: HotelEvent = data;
    db.none("UPDATE hotel_event SET location = $1, description = $2, hotel_id = $3, event_id = $4 WHERE id = $5", [hotelEvent.description, hotelEvent.location, hotelEvent.hotel_id, hotelEvent.event_id, id])
    .then(() => {
      console.log("Hotel event updated");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  deleteHotelEvent(req: Request, res: Response, id: string) {
    db.none("DELETE FROM hotel_event WHERE id = $1", [id])
    .then(() => {
      console.log("Hotel event deleted");
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
