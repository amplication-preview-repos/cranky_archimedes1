import { Route } from "../route/Route";
import { Station } from "../station/Station";

export type Ticket = {
  createdAt: Date;
  fullName: string | null;
  id: string;
  journeyDate: Date | null;
  phoneNumber: string | null;
  price: number | null;
  route?: Route | null;
  seatNumber: string | null;
  station?: Station | null;
  ticketNumber: string | null;
  updatedAt: Date;
  vehicle: string | null;
};
