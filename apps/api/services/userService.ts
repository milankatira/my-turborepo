import { prismaClient } from "@repo/db/client";

export class UserService {
  async updateUserPreferences(
    userId: string,
    preferences: { emailNotifications?: boolean },
  ) {
    const user = await prismaClient.user.findUnique({
      where: { externalId: userId },
    });
    if (!user) throw new Error("User not found");

    return prismaClient.user.update({
      where: { id: user.id },
      data: {
        emailNotifications: preferences.emailNotifications,
      },
    });
  }

  async updateFcmToken(userId: string, token: string) {
    const user = await prismaClient.user.findUnique({
      where: { externalId: userId },
    });
    if (!user) throw new Error("User not found");

    return prismaClient.user.update({
      where: { id: user.id },
      data: {
        FCMTOKEN: token,
      },
    });
  }

  async addEmailConnection(userId: string, email: string) {
    const user = await prismaClient.user.findUnique({
      where: { externalId: userId },
    });
    if (!user) throw new Error("User not found");

    return prismaClient.connections.create({
      data: {
        type: "Email",
        email,
        userId: user.id,
      },
    });
  }

  async removeEmailConnection(userId: string, connectionId: string) {
    const user = await prismaClient.user.findUnique({
      where: { externalId: userId },
    });
    if (!user) throw new Error("User not found");

    return prismaClient.connections.delete({
      where: {
        id: connectionId,
        userId: user.id,
      },
    });
  }

  async findConnectionByUserId(userId: string) {
    const user = await prismaClient.user.findUnique({
      where: { externalId: userId },
    });
    if (!user) throw new Error("User not found");

    return prismaClient.connections.findMany({
      where: { userId: user.id },
    });
  }

}

export const userService = new UserService();
