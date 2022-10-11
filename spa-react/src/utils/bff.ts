type AddressResponse = {
  address: string
}

interface IBff {
  /**
   * BFF の GET api/v1/address APIを呼び出すメソッド
   */
  getAddress(postcode: string): Promise<AddressResponse>;
}

export class Bff implements IBff {
  async getAddress(postcode: string): Promise<AddressResponse> {
    throw new Error("Method not implemented.");
  }
}

export const bff = new Bff();