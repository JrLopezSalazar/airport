import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'


const flightSchema = z.object({
    origin_id: z.number().int().min(1),
    destination_id: z.number().int().min(1),
    plane_id: z.number().int().min(1),
    departure_time: z.date(),
    check_in: z.date().optional(),
    status: z.enum(["Pending", "In Progress", "done", "Cancelled", "delayed"]).default('Pending'),
  });

  export const validateFlight = (data) => {
    const result = flightSchema.safeParse(data)
  
    const { 
      hasError, 
      errorMessages, 
      data: flightData
    } =  extractValidationData(result)
  
    return {
      hasError,
      errorMessages,
      flightData
    }
  }
  
  export const validatePartialFlight = (data) => {
    const result = flightSchema.partial().safeParse(data)
  
    const {
      hasError,
      errorMessages,
      data: dataFlight,
    } = extractValidationData(result);
  
    return {
      hasError,
      errorMessages,
      dataFlight,
    }
  
  }