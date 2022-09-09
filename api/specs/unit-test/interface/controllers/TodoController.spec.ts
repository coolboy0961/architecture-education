import { GetTodos } from "../../../../src/application/usecases/GetTodos";
import { Todo } from "../../../../src/domain/entities/Todo";
import { ControllerResponse } from "../../../../src/infrastructure/ExpressInterfaceAdapter";

describe("TodoController Tests", () => {
  test("normal case", async () => {
    // Arrange
    const expected: ControllerResponse = {
      status: 200,
      body: {
        todos: [
          {
            id: 1,
            title: "買い物",
            content: "牛乳とトマトを買う",
            is_done: false,
          },
          {
            id: 2,
            title: "掃除",
            content: "窓拭きをする",
            is_done: false,
          },
        ],
      },
    };
    const getTodosMock = jest
      .spyOn(GetTodos.prototype, "getTodos")
      .mockResolvedValue([
        new Todo(1, "買い物", "牛乳とトマトを買う"),
        new Todo(2, "掃除", "窓拭きをする"),
       ]);
    // Act
    const target = new TodoController();
    const actual = await target.get({} as any);

    // Assert
    expect(actual).toEqual(expected);
    expect(getTodosMock).toHaveBeenCalledTimes(1);
  });
});
