import { SortOrder } from "../../util/SortOrder";

export type BusOrderByInput = {
  busNumber?: SortOrder;
  capacity?: SortOrder;
  createdAt?: SortOrder;
  driverName?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  routeId?: SortOrder;
  stationId?: SortOrder;
  updatedAt?: SortOrder;
};
