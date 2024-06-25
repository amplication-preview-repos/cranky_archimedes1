import { Passenger as TPassenger } from "../api/passenger/Passenger";

export const PASSENGER_TITLE_FIELD = "id";

export const PassengerTitle = (record: TPassenger): string => {
  return record.id?.toString() || String(record.id);
};
