import { InputJsonValue } from "../../types";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  station?: StationWhereUniqueInput | null;
  username: string;
};
