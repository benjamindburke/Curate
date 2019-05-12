import * as path from "path"
import { Database } from "sqlite3";
import { CurateDbError, CurateDbPermissions } from "common/Interfaces";
import { generateString } from "common/utils";

export class CurateDb {
  private _db: Database | null;

  constructor() {
    this._db = new Database(path.resolve(__dirname, "../../db", "session.db"), CurateDbPermissions.READWRITE, (err: any) => {
      if (err) {
        console.log(err.message);
        return new Error('Database connection could not be established.') as CurateDbError;
      }
    });
  }

  public createNewSession(sessionId: string, username: string, accessToken: string, refreshToken: string){
    const sql = `INSERT INTO sessions (
                      sessionId,
                      createdBy,
                      timeCreated,
                      accessToken,
                      refreshtoken)
                VALUES (
                      '${sessionId}',
                      '${username}',
                      (SELECT datetime((select strftime('%s', 'now')), 'unixepoch', 'utc')),
                      '${accessToken}',
                      '${refreshToken}'
                )`;

    
  }

}


