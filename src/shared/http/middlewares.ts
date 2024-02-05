import {NextFunction, Request, Response} from "express";
import AppError from "@shared/errors/AppError";

function ErrorInterceptor(error: Error, request: Request, response: Response, next: NextFunction) {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message
        })
    }

    return response.status(500).json({
        message: "Internal error"
    });
}

export default ErrorInterceptor;