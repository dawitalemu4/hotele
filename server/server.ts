import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { HotelQueries } from "./src/controllers/hotels.js";
import { EventQueries } from "./src/controllers/events.js";
import { AdminQueries } from "./src/controllers/admin.js";
import { HotelRoutes } from "./src/routes/hotels.js";
import { EventRoutes } from "./src/routes/events.js";
import { AdminRoutes } from "./src/routes/admin.js";

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
const AdminControllers = new AdminQueries();

server.get("/", (req, res) => {
  res.json("Hotel API");
});


server.get(HotelRoutes.getAllHotels, (req, res) => {
    HotelControllers.getAllHotels(req, res)
});

server.get(HotelRoutes.getHotelByID, (req, res) => {
    const id = String(req.params.id);
    HotelControllers.getHotelByID(req, res, id)
});

server.get(HotelRoutes.getHotelsByLocation, (req, res) => {
    const location = String(req.params.location);
    HotelControllers.getHotelsByLocation(req, res, location)
});

server.get(EventRoutes.getAllEvents, (req, res) => {
    EventControllers.getAllEvents(req, res)
});

server.get(EventRoutes.getEventByID, (req, res) => {
    const id = String(req.params.id);
    EventControllers.getEventByID(req, res, id)
});

server.get(EventRoutes.getEventsByLocation, (req, res) => {
    const location = String(req.params.location);
    EventControllers.getEventsByLocation(req, res, location)
});

server.get(AdminRoutes.checkCredentials, (req, res) => {
    const username = String(req.params.username);
    const password = String(req.params.password);
    AdminControllers.checkCredentials(req, res, username, password)
});

server.get('*', (req, res) => {
    res.status(404).json('404 Not Found');
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});