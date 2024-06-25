import { Station as TStation } from "../api/station/Station";

export const STATION_TITLE_FIELD = "stationName";

export const StationTitle = (record: TStation): string => {
  return record.stationName?.toString() || String(record.id);
};
