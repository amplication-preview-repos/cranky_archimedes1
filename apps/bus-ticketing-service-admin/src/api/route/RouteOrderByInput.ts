import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  destination?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  routeName?: SortOrder;
  source?: SortOrder;
  stationId?: SortOrder;
  updatedAt?: SortOrder;
};
