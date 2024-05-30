import db from "@/server/database/db";

export default class TurnRepo {
  static RecordTurnInDB(
    userId: string,
    conversationId: string,
    message: string,
    reply: string
  ) {
    //  TODO: implement this function and record the turn in the database
    return "123"; // return the turn id
  }
}
