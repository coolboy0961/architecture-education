from src.infrastructure.FlakeInterfaceAdapter import ControllerRequest


class UserResponse:
  def __init__(self, id: int, name: str, email: str) -> None:
    self.id = id
    self.name = name
    self.email = email

class UserController:
  def get(self, request: ControllerRequest) -> list[UserResponse]:
    print("request.__dict__")
    print(request.__dict__)
    users_response = [
      UserResponse(1, "TestUser1", "testuser1@test.com"),
      UserResponse(2, "TestUser2", "testuser2@test.com"),
      UserResponse(3, "TestUser3", "testuser3@test.com")
    ]
    return users_response

