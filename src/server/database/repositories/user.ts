import db from "@/server/database/db";

export default class UserRepo {
  static findUserById(userId: string) {
    return db.user.findUnique({
      where: { id: userId },
    });
  }

  static async linkAccount(userId: string) {
    return await db.user.update({
      where: { id: userId },
      data: { emailVerified: new Date() },
    });
  }
  static async createUser(email: string, password: string) {
    return db.user.create({
      data: {
        email,
        password,
      },
    });
  }

  static async findUserByEmail(email: string) {
    return db.user.findUnique({
      where: { email },
    });
  }

  static async hasPassword(email: string) {
    return db.user.findUnique({
      where: { email },
      select: { password: true },
    });
  }

  static async updateEmailVerification(userId: string, date: Date | null) {
    return db.user.update({
      where: { id: userId },
      data: { emailVerified: date },
    });
  }
}
