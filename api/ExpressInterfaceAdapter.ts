import express from "express";

export class ExpressInterfaceAdapter {
  public async call(
    controllerCallFunction: any,
    req: express.Request,
    res: express.Response,
  ) {
    const response: ControllerResponse = await controllerCallFunction(
      this.toControllRequest(req)
    );
    console.log("response.body:" + JSON.stringify(response.body));
    res.status(200).send(JSON.stringify(response.body));
  }

  public toControllRequest(req: express.Request): ControllerRequest {
    const controllerRequest: ControllerRequest = {
      headers: req.headers,
      query: req.query,
      body: req.body,
    };
    return controllerRequest;
  }
}

export type ControllerRequest = {
  headers: any;
  query: any;
  body: any;
};

export type ControllerResponse = {
  status: number
  body: any;
};