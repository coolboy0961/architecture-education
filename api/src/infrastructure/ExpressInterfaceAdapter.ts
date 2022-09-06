import express from "express";
import { ErrorCodes } from "../exception/ErrorCodes";

export class ExpressInterfaceAdapter {
  public async call(
    controllerCallFunction: any,
    req: express.Request,
    res: express.Response
  ) {
    try {
      const response: ControllerResponse = await controllerCallFunction(
        this.toControllRequest(req)
      );
      console.debug("response.body:" + JSON.stringify(response.body));
      res.status(200).send(JSON.stringify(response.body));
    } catch (error: any) {
      let errorResponse: ErrorResponse;
      let status: number;
      if (!error.code) {
        status = 500;
        const unknownError = ErrorCodes.SMP000003();
        errorResponse = {
          code: unknownError.code,
          message: unknownError.message,
        };
      } else {
        status = error.status;
        errorResponse = {
          code: error.code,
          message: error.message,
        };
      }
      res.status(status).send(JSON.stringify(errorResponse));
    }
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
  status: number;
  body: any;
};

export type ErrorResponse = {
  code: string;
  message: string;
};
