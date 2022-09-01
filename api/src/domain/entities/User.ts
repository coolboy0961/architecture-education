import { UserResponse } from "../../interface/controllers/UserController";

export class User {
  private _id: number;
  private _name: string;
  private _email: string;

  constructor(id: number, name: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }
}
