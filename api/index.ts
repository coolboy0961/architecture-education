import "./load-env";
import express from "express";
import { ExpressInterfaceAdapter } from "./src/infrastructure/ExpressInterfaceAdapter";
import { UserController } from "./src/interface/controllers/UserController";

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

// ControllerからExpressに依存しないように、専用Adapterを作成
const expressInterfaceAdapter = new ExpressInterfaceAdapter();

// API定義
const baseUrl = "/api";
app.get(`${baseUrl}/v1/users`, (req: express.Request, res: express.Response) => {
  const userController = new UserController();
  const userControllerGetFunction = userController.get.bind(userController);
  expressInterfaceAdapter.call(userControllerGetFunction, req, res);
});

app.listen(3000, () => {
  console.log("Start on port 3000.");
});