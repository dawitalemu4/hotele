const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();
const server = express();
require('dotenv').config();
const port = 4001;

const connection = {  
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: { rejectUnauthorized : false }
};
const db = pgp(connection);

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = 'https://hotel-template-da.vercel.app';
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use(cors(corsOptions));

server.get('/', function(req, res) {
  res.json("Hotel's server");
});

server.get('/hotels', function(req, res) {
  db.manyOrNone('SELECT * FROM hotel')
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
});

server.get('/hotel/:id', function(req, res) {
  const id = parseInt(req.params.id);
  if (id > 0 && id < 6) {
  db.one(`SELECT * FROM hotel WHERE id = ${id}`)
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
  } else {
    console.error('Hotel not found');
  }
});

server.get('/events', function(req, res) {
  db.manyOrNone('SELECT * FROM event')
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
});

server.get('/event/:location', function(req, res) {
  const location = req.params.location;
  if (location) {
  db.manyOrNone('SELECT * FROM event WHERE location = $1', [location])
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
  } else {
    console.error('Event not found');
  }
});

module.exports = server;

const startServer = () => {
  server.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });
};

if (require.main === module) {
  startServer();
}