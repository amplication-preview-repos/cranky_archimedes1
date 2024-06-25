import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  journeyDate?: SortOrder;
  phoneNumber?: SortOrder;
  price?: SortOrder;
  routeId?: SortOrder;
  seatNumber?: SortOrder;
  stationId?: SortOrder;
  ticketNumber?: SortOrder;
  updatedAt?: SortOrder;
  vehicle?: SortOrder;
};
