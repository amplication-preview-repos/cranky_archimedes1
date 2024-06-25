import { Bus } from "../bus/Bus";
import { Route } from "../route/Route";
import { StationExitPaper } from "../stationExitPaper/StationExitPaper";
import { Ticket } from "../ticket/Ticket";
import { User } from "../user/User";

export type Station = {
  buses?: Array<Bus>;
  createdAt: Date;
  id: string;
  location: string | null;
  routes?: Array<Route>;
  stationExitPapers?: Array<StationExitPaper>;
  stationName: string | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  users?: Array<User>;
};
