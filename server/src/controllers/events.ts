import { Request, Response } from "express";
import pgp from "pg-promise";
import { Event } from "../models/events";
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
      const event = await db.one("SELECT * FROM event WHERE id = $1", [id]);
      return res.json(event);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching event." });
    }
  }

  async getEventsByLocation(req: Request, res: Response, location: string) {
    try {
      const eventsByLocation = await db.manyOrNone("SELECT * FROM event WHERE location = $1", [location]);
      return res.json(eventsByLocation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching events." });
    }
  }

  async createEvent(req: Request, res: Response, data: any) {
    try {
      const event: Event = data;
      const createdEvent = await db.one("INSERT INTO event (title, description, location, address, rating, price, img) VALUES ($1, $2, $3, $4, $5, $6, $7)", [event.title, event.location, event.address, event.img]);
      return res.json(createdEvent);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while creating the new event." });
    }
  }

  async updateEvent(req: Request, res: Response, data: any) {
    try {
      const id = data.id;
      const event: Event = data;
      const updatedEvent = await db.one("UPDATE event SET title = $1, description = $2, location = $3, address = $4, rating = $5, price = $6, img = $7 WHERE id = $8", [event.title, event.location, event.address, event.img, id]);
      return res.json(updatedEvent);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while updating the event." });
    }
  }

  async deleteEvent(req: Request, res: Response, id: string) {
    try {
      const deletedEvent = await db.one("DELETE FROM event WHERE id = $1", [id]);
      return res.json(deletedEvent);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while deleting the event." });
    }
  }
}
