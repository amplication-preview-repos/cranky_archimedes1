import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type StationExitPaperUpdateInput = {
  driverName?: string | null;
  exitDate?: Date | null;
  licenseNumber?: string | null;
  station?: StationWhereUniqueInput | null;
  vehicle?: string | null;
};
