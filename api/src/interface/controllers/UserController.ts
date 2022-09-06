import { GetUsers } from "../../application/usecases/GetUsers";
import { User } from "../../domain/entities/User";
import {
  ControllerRequest,
  ControllerResponse,
} from "../../infrastructure/ExpressInterfaceAdapter";

export class UserController {
  public async get(request: ControllerRequest): Promise<ControllerResponse> {
    console.log(request);
    const getUserUsecase = new GetUsers();
    const users: User[] = await getUserUsecase.getUsers();
    const usersResponse: UserResponse[] = [
      this.toUserGetResponse(users[0]),
      this.toUserGetResponse(users[1]),
      this.toUserGetResponse(users[2]),
    ];

    const response: ControllerResponse = {
      status: 200,
      body: usersResponse,
    };
    return response;
  }
  private toUserGetResponse(user: User): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

export type UserResponse = {
  id: number;
  name: string;
  email: string;
};
