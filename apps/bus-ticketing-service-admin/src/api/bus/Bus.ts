import { Route } from "../route/Route";
import { Station } from "../station/Station";

export type Bus = {
  busNumber: string | null;
  capacity: number | null;
  createdAt: Date;
  driverName: string | null;
  id: string;
  licenseNumber: string | null;
  route?: Route | null;
  station?: Station | null;
  updatedAt: Date;
};
