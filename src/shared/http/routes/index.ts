import { Router } from "express";
import AppError from "@shared/errors/AppError";

const routes = Router();

routes.get("/", (request, response) => {
    throw new AppError("Test error", 302);
})

export default routes;