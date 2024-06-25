import { BusListRelationFilter } from "../bus/BusListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type RouteWhereInput = {
  buses?: BusListRelationFilter;
  destination?: StringNullableFilter;
  duration?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  routeName?: StringNullableFilter;
  source?: StringNullableFilter;
  station?: StationWhereUniqueInput;
  tickets?: TicketListRelationFilter;
};
