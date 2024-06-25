import { BusCreateNestedManyWithoutRoutesInput } from "./BusCreateNestedManyWithoutRoutesInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";
import { TicketCreateNestedManyWithoutRoutesInput } from "./TicketCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  buses?: BusCreateNestedManyWithoutRoutesInput;
  destination?: string | null;
  duration?: string | null;
  price?: number | null;
  routeName?: string | null;
  source?: string | null;
  station?: StationWhereUniqueInput | null;
  tickets?: TicketCreateNestedManyWithoutRoutesInput;
};
