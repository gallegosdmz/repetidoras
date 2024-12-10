import { Request, Response } from "express";
import { WssService } from "../services/wss.service";

export class PinosoloController {
    constructor(
        public wssService: WssService,
    ) {}

    sendRestart = ( req: Request, res: Response ) => {
        this.wssService.sendMessage('on-send-restart-pinosolo', true);

        res.status(200).json({ message: 'Comando enviado'});
    }
}