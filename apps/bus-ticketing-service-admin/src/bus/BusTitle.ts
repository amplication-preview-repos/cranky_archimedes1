import { Bus as TBus } from "../api/bus/Bus";

export const BUS_TITLE_FIELD = "driverName";

export const BusTitle = (record: TBus): string => {
  return record.driverName?.toString() || String(record.id);
};
