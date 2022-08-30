import express from "express";
import { ExpressInterfaceAdapter } from "./ExpressInterfaceAdapter";
import { UserController } from "./interface/controllers/UserController";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }
);

app.listen(3000, () => {
  console.log("Start on port 3000.");
});

// API定義
app.get("/users", (req: express.Request, res: express.Response) => {
  const userController = new UserController();
  ExpressInterfaceAdapter.call(userController.get, req, res);
});