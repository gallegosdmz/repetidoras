import { Router } from "express";
import { PinosoloRoutes } from "./pinosolo/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/pinosolo', PinosoloRoutes.routes );

        return router;
    }
}