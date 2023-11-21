import { Router } from "express";
import { UtilisateurController } from "../controller/UtilisateurController";
import { parseArgs } from "util";

export class UtilisateurRouter {
    router = Router();

    constructor(private utilisateurController: UtilisateurController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.post('/register', async (req, res, next) => {
            try {
                const { nom, prenom, email, password } = req.body;
                if(!nom || !prenom || !email || !password) {
                    throw new Error("Missing arguments");
                }
                const result = this.utilisateurController.register(nom, prenom, email, password);
                if(await result !== null) {
                    res.json({token: await result});
                }
                else {
                    res.json({error: "Email already used"});
                }
            }
            catch (error: unknown) {
                res.json({error: error});
                next(error);
            }
        });
        this.router.post('/login', async (req, res, next) => {
            try {
                const { email, password } = req.body;
                if(!email || !password) {
                    throw new Error("Missing arguments");
                }
                const result = this.utilisateurController.login(email, password);
                if(await result !== null) {
                    res.json({token: await result});
                }
                else {
                    res.json({error: "Email or password incorrect"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.get('/:id', (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                const result = this.utilisateurController.getUtilisateur(id);
                res.json(result);
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.patch('/:id', (req, res, next) => {
            try {
                const { id, email, password, photo} = req.body;

                if(!id) {
                    throw new Error("Missing arguments");
                }

                if(email) {
                    const result = this.utilisateurController.updateEmail(id, email);
                    res.json(result);
                }

                if(password) {
                    const result = this.utilisateurController.updatePassword(id, password);
                    res.json(result);
                }

                if(photo) {
                    const result = this.utilisateurController.updatePhoto(id, photo);
                    res.json(result);
                }

            }
            catch (error: unknown) {
                next(error);
            }
        });
    }

}