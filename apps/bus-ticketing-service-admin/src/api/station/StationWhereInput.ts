import { BusListRelationFilter } from "../bus/BusListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RouteListRelationFilter } from "../route/RouteListRelationFilter";
import { StationExitPaperListRelationFilter } from "../stationExitPaper/StationExitPaperListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type StationWhereInput = {
  buses?: BusListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  routes?: RouteListRelationFilter;
  stationExitPapers?: StationExitPaperListRelationFilter;
  stationName?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
  users?: UserListRelationFilter;
};
