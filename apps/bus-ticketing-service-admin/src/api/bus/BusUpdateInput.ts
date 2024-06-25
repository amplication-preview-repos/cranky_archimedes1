import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type BusUpdateInput = {
  busNumber?: string | null;
  capacity?: number | null;
  driverName?: string | null;
  licenseNumber?: string | null;
  route?: RouteWhereUniqueInput | null;
  station?: StationWhereUniqueInput | null;
};
