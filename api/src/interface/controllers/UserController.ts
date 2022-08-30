import { User } from "../../domain/entities/User";
import {
  ControllerRequest,
  ControllerResponse,
} from "../../ExpressInterfaceAdapter";

export class UserController {
  public get(request: ControllerRequest): ControllerResponse {
    console.log(request);
    const users: UserResponse[] = [
      new User(1, "User1", "user1@test.local").toUserGetResponse(),
      new User(2, "User2", "user2@test.local").toUserGetResponse(),
      new User(3, "User3", "user3@test.local").toUserGetResponse(),
    ];

    const response: ControllerResponse = {
      status: 200,
      body: users,
    };
    return response;
  }
}

export type UserResponse = {
  id: number;
  name: string;
  email: string;
};
