import { SortOrder } from "../../util/SortOrder";

export type StationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  stationName?: SortOrder;
  updatedAt?: SortOrder;
};
