import axios, { AxiosInstance } from "axios";

export class HttpHelper {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3000/api",
  });;

  public static async get(path: string) {
    const response = await HttpHelper.axiosInstance.get(path);
    return response.data;
  }
}
