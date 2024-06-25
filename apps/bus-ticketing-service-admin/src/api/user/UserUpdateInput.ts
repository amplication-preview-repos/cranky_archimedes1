import { InputJsonValue } from "../../types";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  station?: StationWhereUniqueInput | null;
  username?: string;
};
