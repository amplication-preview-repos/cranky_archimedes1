import { StationExitPaper as TStationExitPaper } from "../api/stationExitPaper/StationExitPaper";

export const STATIONEXITPAPER_TITLE_FIELD = "driverName";

export const StationExitPaperTitle = (record: TStationExitPaper): string => {
  return record.driverName?.toString() || String(record.id);
};
