import express from "express";

export class ExpressInterfaceAdapter {
  public static call(
    controllerCallFunction: any,
    req: express.Request,
    res: express.Response
  ) {
    const response: ControllerResponse = controllerCallFunction(
      ExpressInterfaceAdapter.toControllRequest(req)
    );
    res.status(response.status).send(JSON.stringify(response.body));
  }

  public static toControllRequest(req: express.Request): ControllerRequest {
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