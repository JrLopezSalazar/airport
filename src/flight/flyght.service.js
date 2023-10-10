import Flight from "./flight.models.js";

export class FlightService {

  async getAllFlights(){
    return await Flight.findAll({ where: { status: true }})
  }

  async getFlightById(id){
    return await Flight.findOne({
      where : {
        id,
        status: true
      },
    })
  }

  async createFlight(data) {
    return await City.create( data )
  }

  async updateFlight(city, data){
    return await city.update(data)
  }

  async deleteFlight(city){
    return await city.update({ status: false })
  }

}