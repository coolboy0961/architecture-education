import { GetUsers } from "../../application/usecases/GetUsers";
import { User } from "../../domain/entities/User";
import {
  ControllerRequest,
  ControllerResponse,
} from "../../ExpressInterfaceAdapter";

export class UserController {
  public get(request: ControllerRequest): ControllerResponse {
    console.log(request);
    const getUserUsecase = new GetUsers();
    const users: User[] = getUserUsecase.getUsers();
    const usersResponse: UserResponse[] = [
      users[0].toUserGetResponse(),
      users[1].toUserGetResponse(),
      users[2].toUserGetResponse(),
    ];

    const response: ControllerResponse = {
      status: 200,
      body: usersResponse,
    };
    return response;
  }
}

export type UserResponse = {
  id: number;
  name: string;
  email: string;
};
