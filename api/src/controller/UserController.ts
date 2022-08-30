import express from "express";

export class UserController {
  public get(req: express.Request): string {
    const users: User[] = [
      { id: 1, name: "User1", email: "user1@test.local" },
      { id: 2, name: "User2", email: "user2@test.local" },
      { id: 3, name: "User3", email: "user3@test.local" },
    ];

    return JSON.stringify(users);
  }
}

type User = {
  id: number;
  name: string;
  email: string;
};