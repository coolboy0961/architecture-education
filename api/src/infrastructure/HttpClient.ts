import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private _axiosInstance: AxiosInstance;

  constructor() {
    this._axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:9000/api",
    });
  }

  public async get(path: string) {
    const response = await this._axiosInstance.get(path);
    return response.data;
  }
}
