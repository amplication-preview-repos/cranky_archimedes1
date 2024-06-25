import { Bus } from "../bus/Bus";
import { Station } from "../station/Station";
import { Ticket } from "../ticket/Ticket";

export type Route = {
  buses?: Array<Bus>;
  createdAt: Date;
  destination: string | null;
  duration: string | null;
  id: string;
  price: number | null;
  routeName: string | null;
  source: string | null;
  station?: Station | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
