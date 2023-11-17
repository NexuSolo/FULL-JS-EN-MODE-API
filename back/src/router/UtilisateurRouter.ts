import { Router } from "express";
import { UtilisateurController } from "../controller/UtilisateurController";
import { parseArgs } from "util";

export class UtilisateurRouter {
    router = Router();

    constructor(private utilisateurController: UtilisateurController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.post('/add', (req, res, next) => {
            try {
                const { nom, prenom, email, password } = req.body;
                if(!nom || !prenom || !email || !password) {
                    throw new Error("Missing arguments");
                }
                const result = this.utilisateurController.addUtilisateur(nom, prenom, email, password);
                res.json(result);
            }
            catch (error: unknown) {
                next(error);
            }
        });
    }

}