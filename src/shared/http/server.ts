import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import MainRoutes from "./routes/index";
import ErrorInterceptor from "@shared/http/middlewares";

const app = express();

/* To use cors middleware */
app.use(cors());
/* To use Json middleware, which interprets json */
app.use(express.json());

app.use(MainRoutes);

app.use(ErrorInterceptor)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})