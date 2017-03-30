import {} from '@types/googlemaps';
import LatLngLiteral = google.maps.LatLngLiteral;

export class Trip {
  id: number;
  startTime: Date;
  startLocation: Waypoint;
  endTime: Date;
  endLocation: Waypoint;
  distance: number;
  duration: number;
  transport: string;
  car: Car;
}
export class Car {
  id: number;
  model: string;
  license: string;
  consumption: number;
  fuel: string;
}
export class Bill {
  id: number;
  price: number;
  amount: number;
  fuel: string;
  timestamp: Date;
  location: Waypoint;
}
export class Waypoint {
  id: number;
  coordinates: string;
  description: string;

  constructor(fields?: { id?: number, coordinates?: string, description?: string }) {
    if (fields != null) {
      this.id = fields.id;
      this.coordinates = fields.coordinates;
      this.description = fields.description;
    }
  }
}
