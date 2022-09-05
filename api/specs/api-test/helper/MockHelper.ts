import ServerMock, { RequestProps } from "mock-http-server";

export class MockHelper {
  private static host = "localhost";
  private static port = 9000;
  private static server = new ServerMock({
    host: MockHelper.host,
    port: MockHelper.port,
  });

  public static start(callback: any) {
    MockHelper.server.start(callback);
  }

  public static stop(callback: any) {
    MockHelper.server.stop(callback);
  }

  private static startCallback() {
    console.log(
      `mock server is started on http://${MockHelper.host}:${MockHelper.port}.`
    );
  }

  private static stopCallback() {
    console.log(
      `mock server is stoped on http://${MockHelper.host}:${MockHelper.port}.`
    );
  }

  public static MockOn(mockOption: RequestProps) {
    MockHelper.server.on(mockOption);
  }

  public static ResetMock() {
    MockHelper.server.resetHandlers();
  }

  /**
   * 処理を停止する
   * @param time ms
   */
  public static async sleep(time: number) {
    await new Promise((resolve) => setTimeout(resolve, time));
  }
}
