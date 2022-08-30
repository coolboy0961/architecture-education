import { ControllerRequest, ControllerResponse } from "../../ExpressInterfaceAdapter";

export class UserController {
  public get(request: ControllerRequest): ControllerResponse {
    console.log(request)
    const users: User[] = [
      { id: 1, name: "User1", email: "user1@test.local" },
      { id: 2, name: "User2", email: "user2@test.local" },
      { id: 3, name: "User3", email: "user3@test.local" },
    ];

    const response:ControllerResponse = {
      status: 200,
      body: users
    }
    return response;
  }
}

type User = {
  id: number;
  name: string;
  email: string;
};