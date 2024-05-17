
const Flight = require("../models/flightModel");
const getAllFlights = async () => {
    try{
        return Flight.find();
    } catch(error){
        logger.error(`Error Fetching Flights`);
        logger.error(`${error.message}`);
        throw new Error(`Fetching of flights failed`);    
    }
}

var regExDate = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD format
var regExTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; // Regex for HH:MM format

const flight = require("../models/flightModel");

const getFlight = async () => {
    try{
        return User.find({
            
        },{
    
    airlineName: 1,
    departureDate: 1,
    departureTime: 1,
    arrivalDate: 1,
    arrivalTime: 1,
    travelTime: 1,
    departureAirport: 1,
    arrivalAirport: 1,
    image: 1, 
    layover: 1,
    price: 1,
        });
    } catch (error) {
      return error.message;
    }
  };


  
  const createFlights = async (body) => {
    try {

        var { airlineName, departureDate, departureTime, arrivalDate, arrivalTime, travelTime, departureAirport, arrivalAirport, image, layover, price } = body;

        // Using regex to validate date and time format
        const regExDate = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD format
        const regExTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; // Regex for HH:MM format


        if (!departureDate.match(regExDate) || !arrivalDate.match(regExDate)) {
            throw new Error("Invalid date format. Use YYYY-MM-DD.");
        }
        if (!departureTime.match(regExTime) || !arrivalTime.match(regExTime)) {
            throw new Error("Invalid time format. Use HH:MM.");
        }

       
        var newFlight = new Flight({
            airlineName, departureDate, departureTime, arrivalDate, arrivalTime, travelTime, departureAirport, arrivalAirport, image, layover, price
        });
        await newFlight.save();
        return newFlight;
    } catch (error) {
  
        return { error: true, message: error.message };
    }
};

const loginFlight = async (req, res) => {
    try {
        var { email, password } = req.body;

        
        const user = await Flight.findOne({ email: email }); 

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        if (user.password !== password) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllFlights,
    getFlight,
    createFlights,
    loginFlight 
};






