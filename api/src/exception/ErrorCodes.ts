import { CustomError } from "./CustomError";

export class ErrorCodes {
  public static SMP000001(details?: string, stack?: string): CustomError {
    const customError = new CustomError("SMP000001", 400, "ValidationError", "必須項目が存在しません。");
    customError.details = details;
    customError.stack = stack;
    return customError;
  }

  public static SMP000002(details?: string, stack?: string): CustomError {
    const customError = new CustomError("SMP000002", 500, "ConnectionError", "外部APIへのアクセスが失敗しました。");
    customError.details = details;
    customError.stack = stack;
    return customError;
  }

  public static SMP000003(details?: string, stack?: string): CustomError {
    const customError = new CustomError("SMP000003", 500, "ConnectionError", "予期せぬエラーが発生しました");
    customError.details = details;
    customError.stack = stack;
    return customError;
  }
}