import { Response } from 'express';

export class ResponseHandler {
  static success(res: Response, data: any, message = 'Success') {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static created(res: Response, data: any, message = 'Created successfully') {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  static error(res: Response, message: string, statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  }

  static notFound(res: Response, message = 'Resource not found') {
    return this.error(res, message, 404);
  }

  static badRequest(res: Response, message = 'Bad request') {
    return this.error(res, message, 400);
  }

  static unauthorized(res: Response, message = 'Unauthorized') {
    return this.error(res, message, 401);
  }
}
