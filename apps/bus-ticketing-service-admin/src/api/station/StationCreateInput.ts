import { BusCreateNestedManyWithoutStationsInput } from "./BusCreateNestedManyWithoutStationsInput";
import { RouteCreateNestedManyWithoutStationsInput } from "./RouteCreateNestedManyWithoutStationsInput";
import { StationExitPaperCreateNestedManyWithoutStationsInput } from "./StationExitPaperCreateNestedManyWithoutStationsInput";
import { TicketCreateNestedManyWithoutStationsInput } from "./TicketCreateNestedManyWithoutStationsInput";
import { UserCreateNestedManyWithoutStationsInput } from "./UserCreateNestedManyWithoutStationsInput";

export type StationCreateInput = {
  buses?: BusCreateNestedManyWithoutStationsInput;
  location?: string | null;
  routes?: RouteCreateNestedManyWithoutStationsInput;
  stationExitPapers?: StationExitPaperCreateNestedManyWithoutStationsInput;
  stationName?: string | null;
  tickets?: TicketCreateNestedManyWithoutStationsInput;
  users?: UserCreateNestedManyWithoutStationsInput;
};
