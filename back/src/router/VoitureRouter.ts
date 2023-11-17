import { Router } from "express";
import { VoitureController } from "../controller/VoitureController";

export class VoitureRouter {
    router = Router();

    constructor(private voitureController: VoitureController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        
    }

}