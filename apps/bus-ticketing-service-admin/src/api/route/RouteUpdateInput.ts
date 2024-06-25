import { BusUpdateManyWithoutRoutesInput } from "./BusUpdateManyWithoutRoutesInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";
import { TicketUpdateManyWithoutRoutesInput } from "./TicketUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  buses?: BusUpdateManyWithoutRoutesInput;
  destination?: string | null;
  duration?: string | null;
  price?: number | null;
  routeName?: string | null;
  source?: string | null;
  station?: StationWhereUniqueInput | null;
  tickets?: TicketUpdateManyWithoutRoutesInput;
};
