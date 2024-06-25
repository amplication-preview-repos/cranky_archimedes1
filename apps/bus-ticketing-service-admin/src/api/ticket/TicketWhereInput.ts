import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type TicketWhereInput = {
  fullName?: StringNullableFilter;
  id?: StringFilter;
  journeyDate?: DateTimeNullableFilter;
  phoneNumber?: StringNullableFilter;
  price?: FloatNullableFilter;
  route?: RouteWhereUniqueInput;
  seatNumber?: StringNullableFilter;
  station?: StationWhereUniqueInput;
  ticketNumber?: StringNullableFilter;
  vehicle?: StringNullableFilter;
};
