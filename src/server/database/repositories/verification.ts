import db from "@/server/database/db";

export default class VerificationRepo {
  static findVerificationByUserId(userId: string) {
    return db.verificationToken.findFirst({
      where: { identifier: userId },
    });
  }

  static findVerificationByTokenAndUserId(token: string, userId: string) {
    return db.verificationToken.findFirst({
      where: {
        token,
        identifier: userId,
      },
    });
  }

  static findVerificationByToken(token: string) {
    return db.verificationToken.findFirst({
      where: {
        token,
      },
    });
  }

  static async createVerificationToken(userId: string, token: string) {
    return db.verificationToken.create({
      data: {
        identifier: userId,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
      },
    });
  }

  static async deleteVerificationToken(userId: string) {
    return db.verificationToken.deleteMany({
      where: { identifier: userId },
    });
  }
}
