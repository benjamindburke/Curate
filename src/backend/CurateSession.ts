import { CurateDb } from "backend/CurateDb";
import { generateString } from "common/utils";

export class CurateSession {
  private _database: CurateDb;
  private _sessionId: string;

  constructor(sessionId?: string) {
    this._sessionId = sessionId ? sessionId : generateString(8);
  }

  get sessionId(){ return this._sessionId; }

}
