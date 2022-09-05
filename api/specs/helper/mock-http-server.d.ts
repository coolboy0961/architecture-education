declare module "mock-http-server" {
  import { IncomingMessage } from "connect";
  import { Socket } from "node:net";
  import { SecureContextOptions } from "node:tls";

  export type Request = IncomingMessage & { body: any };
  export type Connection = Socket;

  export interface ServerConfig {
    host: string;
    port: number;

    /**
     *  key: String – HTTPS key (if missing the server is HTTP)
     */
    key?: SecureContextOptions["key"];

    /**
     *  cert: String – HTTPS certificate (if missing the server is HTTP)
     */
    cert?: SecureContextOptions["cert"];
  }

  export interface RequestProps {
    /**
     * HTTP Method to match, default is GET. Can be * to match any method.
     */
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "*";

    /**
     * HTTP request path to match. Can be * to match any path (to be used in conjunction with filter to allow custom matching)
     */
    path: "*" | string;

    reply: ReplyProps;

    /**
     * The value is a filter function fn(request): if it returns true the handler gets executed.
     */
    filter?: (request: RequestFilter) => boolean;

    /**
     * Delays the response by X milliseconds.
     */
    delay?: number;
  }

  /**
   * ReplyProps
   */
  export interface ReplyProps {
    /**
     * Default is 200
     */
    status?: number | ((req: Request) => number);

    /**
     * HTTP response headers. content-length is managed by the server implementation.
     * Default is { "content-type": "application/json" }
     */
    headers?: Record<string, string>;

    /**
     * HTTP response headers to override to default headers (ie. content-length). If a value is set to undefined, the header gets removed from the response.
     */
    headerOverrides?: Record<string, string>;

    /**
     * HTTP response body. Can be a string, a synchronous function fn(request) that returns the body, or an asynchronous function fn(request, reply) that send the response body invoking reply(body).
     */
    body?:
      | string
      | ((req: Request) => string)
      | ((req: Request, reply: (body: string) => void) => void);

    /**
     * End the response once the body has been sent (default behaviour). If false, it will keep the response connection open indefinitely (useful to test special cases on the client side - ie. read timeout after partial body response sent).
     * Default is true
     */
    end?: boolean;
  }

  export interface RequestFilter {
    method: string;
    path: string;
  }

  class ServerMock {
    constructor(config: ServerConfig);

    start: (callback: (...none: unknown[]) => void) => void;
    stop: (callback: (...none: unknown[]) => void) => void;
    on: (request: RequestProps) => ServerMock;

    /**
     * Returns an array containing all requests received. If `filter` is defined,
     * filters the requests by:
     * - method
     * - path
     *
     * @param  {Object} filter
     * @return {Array}
     */
    requests: (filter?: RequestFilter) => Request[];

    /**
     * Returns an array containing all active connections.
     *
     * @return {Array}
     */
    connections: () => Connection[];

    /**
     * Returns the port number if set or null otherwise
     *
     * @return {Number|null}
     */
    getHttpPort: () => number | null;

    /**
     * Returns the port number if set or null otherwise
     *
     * @return {Number|null}
     */
    getHttpsPort: () => number | null;

    /**
     * Clears request handlers and requests received by the HTTP server.
     */
    reset: () => void;

    /**
     * Clears all request handlers that were previously set using `on()` method.
     */
    resetHandlers: () => void;

    /**
     * Clears all requests received by the HTTP server.
     */
    resetRequests: () => void;
  }

  export default ServerMock;
}
