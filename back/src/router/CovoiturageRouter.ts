import { Router } from "express";
import { CovoiturageController } from "../controller/CovoiturageController";

export class CovoiturageRouter {
    router = Router();

    constructor(private covoiturageController: CovoiturageController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        
    }

}