import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type StationExitPaperWhereInput = {
  driverName?: StringNullableFilter;
  exitDate?: DateTimeNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  station?: StationWhereUniqueInput;
  vehicle?: StringNullableFilter;
};
