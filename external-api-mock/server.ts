import ServerMock from "mock-http-server";

const host = "localhost";
const port = 9000;
const server = new ServerMock({ host, port});
server.on({
  method: "GET",
  path: "/api/users",
  reply: {
    status: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      users: [
        { user_id: 1, user_name: "User1", user_email: "user1@test.local" },
        { user_id: 2, user_name: "User2", user_email: "user2@test.local" },
        { user_id: 3, user_name: "User3", user_email: "user3@test.local" },
      ],
    }),
  },
});

server.start(callback);

function callback() {
  console.log(`mock server is started on http://${host}:${port}.`);
}
