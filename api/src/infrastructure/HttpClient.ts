import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "../interface/gateways/IHttpClient";

export class HttpClient implements IHttpClient {
  private _axiosInstance: AxiosInstance;

  constructor() {
    this._axiosInstance = axios.create({
      baseURL: process.env.EXTERNAL_API_BASE_URL,
    });
  }

  public async get(path: string) {
    const response = await this._axiosInstance.get(path);
    return response.data;
  }
}
