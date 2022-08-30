import { User } from "../../domain/entities/User";
import { UserRepository } from "../../interface/gateways/UserRepository";
import { IUserRepository } from "../repositories/IUserRepository";

export class GetUsers {
  private _userRepository: IUserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }
  public async getUsers(): Promise<User[]> {
    return await this._userRepository.getUsers();
  }
}
