import { Router } from "express";
import {
  createFlight,
  getAllFlights,
  getFlightById,
  updateFlight,
  deleteFlight,
} from "./flight.controller";



export const router = Router();

router.post("/flights", createFlight);
router.get("/flights", getAllFlights);
router.get("/flights/:id", getFlightById);
router.put("/flights/:id", updateFlight);
router.delete("/flights/:id", deleteFlight);
