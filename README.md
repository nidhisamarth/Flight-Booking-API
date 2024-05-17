# webd-project
Flight Booking API
This is a Node.js API for managing flights and bookings. It provides endpoints for creating flights, retrieving flight information, creating bookings, and retrieving booking information for a given email address.

Installation
Clone the repository
Install dependencies with npm install
Usage
Flights
POST /flights - Create a new flight
Request body should contain flight data (e.g. { "arrival": "JFK", "departure": "LAX", "date": "2023-05-15" })
GET /flights - Retrieve flights matching query parameters
Query parameters: arrival, departure, date
GET /flights/:id - Retrieve flight by ID
Bookings
POST /bookings - Create a new booking
Query parameters: flightNumber, email
GET /bookings - Retrieve bookings for an email address
Query parameter: email
Users
GET /users - Retrieve all users
POST /users - Create a new user
Request body should contain user data (e.g. { "name": "John Doe", "email": "john@example.com", "password": "mypassword" })
POST /login - Authenticate a user
Request body should contain email and password
Code Structure
controllers/ - Express route handlers
services/ - Business logic for flights, bookings, and users
models/ - Database models (if applicable)
Dependencies
Express.js
Node.js

Flight Booking API - Data Models
This repository contains the Mongoose data models used in a Flight Booking API built with Node.js and MongoDB.

Models
Booking
The Booking model represents a flight booking made by a user. It has the following schema:

javascript



{
  userEmail: { type: String },
  flightNumber: { type: String }
}
userEmail (String): The email address of the user who made the booking.
flightNumber (String): The flight number for the booked flight.
Flight
The Flight model represents information about a flight. It has the following schema:

javascript



{
  airline: { type: String },
  arrival: { type: String },
  departure: { type: String }, 
  duration: { type: String },
  departureDate: { type: Date },
  arrivalDate: { type: Date },
  price: { type: Number },
  layover: { type: Number },
  type: { type: String },
  providerName: { type: String },
  flightNumber: { type: Number }
}
airline (String): The name of the airline operating the flight.
arrival (String): The arrival airport code.
departure (String): The departure airport code.
duration (String): The duration of the flight.
departureDate (Date): The date and time of departure.
arrivalDate (Date): The date and time of arrival.
price (Number): The price of the flight.
layover (Number): The number of layovers, if any.
type (String): The type of flight (e.g., "One-way", "Round-trip").
providerName (String): The name of the provider or travel agency.
flightNumber (Number): The flight number.
User
The User model represents user information for the Flight Booking API. It has the following schema:

javascript



{
  firstName: { type: String, minLength: 3, maxLength: 25, required: true },
  lastName: { type: String, minLength: 3, maxLength: 25, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String }
}
firstName (String): The user's first name.
lastName (String): The user's last name.
email (String): The user's email address, which must be unique.
password (String): The user's password.
type (String): The user's type or role (e.g., "admin", "customer").
Usage
These models can be imported and used in various parts of the Flight Booking API, such as controllers, services, or routes. They define the structure of the data stored in the MongoDB database.

Example usage:

javascript



const Booking = require('./models/booking');
const Flight = require('./models/flight');
const User = require('./models/user');

Dependencies
Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.

Flight Booking API - Services
This repository contains the service layer for a Flight Booking API built with Node.js, Express, and MongoDB. The services handle the business logic for managing flights, bookings, and user authentication.

Services
Booking Service
The bookingService module provides the following functions:

createBooking(email, flightNumber): Creates a new booking for the given user email and flight number.
getBooking(email): Retrieves all bookings for the given user email, including flight details and user information.
Flight Service
The flightService module provides the following functions:

createFlight(flightData): Creates a new flight with the provided flight data.
getFlight(queryData): Retrieves flights that match the provided query data (arrival, departure, and date).
getFlightById(id): Retrieves a flight by its ID.
User Service
The userService module provides the following functions:

getUsers(): Retrieves all users from the database.
createUsers(userData): Creates a new user with the provided user data (firstName, lastName, email, password, and type).
loginUsers(req, res): Authenticates a user's email and password.
createBooking(req, res): Creates a new booking for the provided user email and flight number.
Models
The services interact with the following data models:

User: Represents user information (firstName, lastName, email, password, type).
Flight: Represents flight information (airline, arrival, departure, duration, departureDate, arrivalDate, price, layover, type, providerName, flightNumber).
Booking: Represents a flight booking (userEmail, flightNumber).
Utils
The encoder utility module is used for encoding and comparing passwords using the bcrypt library.

Dependencies
Node.js
Express
MongoDB
Mongoose
bcrypt