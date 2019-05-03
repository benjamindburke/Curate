import { Database, OPEN_READONLY, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

export type CurateDb = Database;
export type CurateDbError = Error;

export enum CurateDbPermissions {
  READONLY = OPEN_READONLY,
  READWRITE = OPEN_READWRITE,
  CREATE = OPEN_CREATE,
}