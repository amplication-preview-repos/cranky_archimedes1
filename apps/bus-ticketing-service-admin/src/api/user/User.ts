import { JsonValue } from "type-fest";
import { Station } from "../station/Station";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  station?: Station | null;
  updatedAt: Date;
  username: string;
};
