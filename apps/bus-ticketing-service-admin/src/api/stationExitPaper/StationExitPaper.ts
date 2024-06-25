import { Station } from "../station/Station";

export type StationExitPaper = {
  createdAt: Date;
  driverName: string | null;
  exitDate: Date | null;
  id: string;
  licenseNumber: string | null;
  station?: Station | null;
  updatedAt: Date;
  vehicle: string | null;
};
