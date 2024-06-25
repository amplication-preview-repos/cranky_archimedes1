import { BusUpdateManyWithoutStationsInput } from "./BusUpdateManyWithoutStationsInput";
import { RouteUpdateManyWithoutStationsInput } from "./RouteUpdateManyWithoutStationsInput";
import { StationExitPaperUpdateManyWithoutStationsInput } from "./StationExitPaperUpdateManyWithoutStationsInput";
import { TicketUpdateManyWithoutStationsInput } from "./TicketUpdateManyWithoutStationsInput";
import { UserUpdateManyWithoutStationsInput } from "./UserUpdateManyWithoutStationsInput";

export type StationUpdateInput = {
  buses?: BusUpdateManyWithoutStationsInput;
  location?: string | null;
  routes?: RouteUpdateManyWithoutStationsInput;
  stationExitPapers?: StationExitPaperUpdateManyWithoutStationsInput;
  stationName?: string | null;
  tickets?: TicketUpdateManyWithoutStationsInput;
  users?: UserUpdateManyWithoutStationsInput;
};
