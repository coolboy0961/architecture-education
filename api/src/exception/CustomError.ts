export class CustomError extends Error {
  code: string;
  status: number;
  details?: string;
  constructor(code: string, status: number, name: string, message: string, details?: string, stack?: string) {
    super();
    this.code = code;
    this.status = status;
    this.name = name;
    this.message = message;
    this.details = details;
    this.stack = stack;
  }
}
