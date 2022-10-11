import axios, { AxiosInstance } from "axios";

interface IBff {
  /**
   * BFF の GET api/v1/address APIを呼び出すメソッド
   */
  getAddress(postcode: string): Promise<AddressResponse>;
}

export class Bff implements IBff {
  private _axiosInstance: AxiosInstance;
  constructor() {
    this._axiosInstance = axios.create();
  }
  async getAddress(postcode: string): Promise<AddressResponse> {
    const response = await this._axiosInstance.get("/api/v1/address");
    return response.data;
  }
}

export const bff = new Bff();

type AddressResponse = {
  address: string;
};