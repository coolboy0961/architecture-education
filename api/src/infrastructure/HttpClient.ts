import axios, { AxiosInstance } from "axios";
import { ErrorCodes } from "../exception/ErrorCodes";
import { IHttpClient } from "../interface/gateways/IHttpClient";

export class HttpClient implements IHttpClient {
  private _axiosInstance: AxiosInstance;

  constructor() {
    this._axiosInstance = axios.create({
      baseURL: process.env.EXTERNAL_API_BASE_URL,
    });
    this._axiosInstance.interceptors.response.use((response) => {
      return response;
    }, (error: Error) => {
      const customError = ErrorCodes.SMP000002();
      const details = JSON.stringify({
        name: error.name,
        message: error.message
      });
      customError.details = details;
      customError.stack = error.stack;
      throw customError;
    });
  }

  public async get(path: string) {
    const response = await this._axiosInstance.get(path);
    return response.data;
  }
}
