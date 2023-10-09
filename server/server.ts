import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { HotelQueries } from "./src/controllers/hotels.js";
import { EventQueries } from "./src/controllers/events.js";
import { HotelRoutes } from "./src/routes/hotels.js";
import { EventRoutes } from "./src/routes/events.js";


dotenv.config();
const port = process.env.PORT;

const corsOptions = {
  origin: (origin: any, callback: any) => {
    const allowedOrigins = "https://hotel-template-da.vercel.app";
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    } 
  },
}; 

const server = express();
server.use(cors(corsOptions));

const HotelControllers = new HotelQueries();
const EventControllers = new EventQueries();

server.get("/", (req, res) => {
  res.json("Hotel API");
});


server.get(HotelRoutes.getAllHotels, (req, res) => {
    HotelControllers.getAllHotels(req, res)
});

server.get(HotelRoutes.getHotelByID, (req, res) => {
    const id = String(req.params.id);
    HotelControllers.getHotelByLocation(req, res, id)
});

server.get(HotelRoutes.getHotelByLocation, (req, res) => {
    const location = String(req.params.location);
    HotelControllers.getHotelByLocation(req, res, location)
});

server.get(EventRoutes.getAllEvents, (req, res) => {
    EventControllers.getAllEvents(req, res)
});

server.get(EventRoutes.getEventByID, (req, res) => {
    const id = String(req.params.id);
    EventControllers.getEventByLocation(req, res, id)
});

server.get(EventRoutes.getEventByLocation, (req, res) => {
    const location = String(req.params.location);
    HotelControllers.getHotelByLocation(req, res, location)
});




server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});