import axios, { AxiosInstance } from "axios";

export class HttpHelper {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
  });

  public static async get(path: string) {
    const response = await HttpHelper.axiosInstance.get(path);
    return response.data;
  }
}
