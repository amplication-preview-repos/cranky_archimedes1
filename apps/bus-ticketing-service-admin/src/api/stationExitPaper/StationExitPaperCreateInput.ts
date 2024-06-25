import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type StationExitPaperCreateInput = {
  driverName?: string | null;
  exitDate?: Date | null;
  licenseNumber?: string | null;
  station?: StationWhereUniqueInput | null;
  vehicle?: string | null;
};
