import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type TicketCreateInput = {
  fullName?: string | null;
  journeyDate?: Date | null;
  phoneNumber?: string | null;
  price?: number | null;
  route?: RouteWhereUniqueInput | null;
  seatNumber?: string | null;
  station?: StationWhereUniqueInput | null;
  ticketNumber?: string | null;
  vehicle?: string | null;
};
