import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type BusWhereInput = {
  busNumber?: StringNullableFilter;
  capacity?: IntNullableFilter;
  driverName?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  route?: RouteWhereUniqueInput;
  station?: StationWhereUniqueInput;
};
