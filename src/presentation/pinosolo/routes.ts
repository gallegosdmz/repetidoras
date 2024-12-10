import { Router } from "express";
import { PinosoloController } from "./controller";
import { WssService } from "../services/wss.service";

export class PinosoloRoutes {
    static get routes(): Router {
        const router = Router();

        const controller = new PinosoloController( WssService.instance );

        router.post('/restart', controller.sendRestart );

        return router;
    }
}