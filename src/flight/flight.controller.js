import { catchAsync } from "../errors/catchAsync.js";
import { FlightService } from "./flyght.service.js";


const flightServices = new FlightService()

export const createFlight = catchAsync(async (req, res) => {
  
    const flightData = flightSchema.parse(req.body);
    const newFlight = await flightServices.create(flightData);
    res.status(201).json(newFlight);
    {
    return res.status(400).json({ message: "error" });
  }
});

export const getAllFlights = catchAsync(async (req, res) => {
  const flights = await flightServices.findAll();
  return res.status(200).json(flights);
});

export const getFlightById = catchAsync(async (req, res) => {
  const flightId = req.params.flight_id;
  const flight = await flightServices.findByPk(flightId);
  if (flight) {
    res.status(200).json(flight);
  } else {
    res.status(404).json({ message: "Vuelo no encontrado" });
  }
});

export const updateFlight = catchAsync(async (req, res) => {
  const flightId = req.params.flight_id;
  
    const flightData = flightSchema.parse(req.body);
    const [updatedCount, updatedFlight] = await flightServices.update(flightData, {
      where: { flight_id: flightId },
    });
    if (updatedCount === 1) {
      res.status(200).json(updatedFlight);
    } else {
      res.status(404).json({ message: "Vuelo no encontrado" });
    }
   {
    res.status(400).json({ message: "Datos no válidos" });
  }
});

export const deleteFlight = catchAsync(async (req, res) => {
  const flightId = req.params.flight_id;
  const deletedCount = await flightServices.destroy({ where: { flight_id: flightId } });
  if (deletedCount === 1) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Vuelo no encontrado" });
  }
});
