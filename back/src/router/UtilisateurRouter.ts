import { Router } from "express";
import { UtilisateurController } from "../controller/UtilisateurController";

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
        this.router.get('/:id', async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                const result = this.utilisateurController.getUtilisateur(id);
                if(result === null) {
                    res.json({error: "User not found"});
                }
                if(await result !== null) {
                    res.json(await result);
                }
                else {
                    res.json({error: "User not found"});
                
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.get('/', async (req, res, next) => {
            try {
                const result = this.utilisateurController.getUtilisateurs();
                if(result === null) {
                    res.json({error: "User not found"});
                }
                if(await result !== null) {
                    res.json(await result);
                }
                else {
                    res.json({error: "User not found"});
                
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.patch('/', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                const {email, password, photo} = req.body;

                if(!authorization) {
                    throw new Error("Missing arguments");
                }

                if(email) {
                    if(await this.utilisateurController.updateEmail(authorization, email)) {
                        res.json({message: "Email updated"});
                    }
                    else {
                        res.json({error: "Email already used"});
                    }
                }

                if(password) {
                    if(await this.utilisateurController.updatePassword(authorization, password)) {
                        res.json({message: "Password updated"});
                    }
                    else {
                        res.json({error: "Password not updated"});
                    }
                }

                if(photo) {
                    if(await this.utilisateurController.updatePhoto(authorization, photo)) {
                        res.json({message: "Photo updated"});
                    }
                    else {
                        res.json({error: "Photo not updated"});
                    }
                }

                res.json({error: "Missing arguments"});

            }
            catch (error: unknown) {
                next(error);
            }
        });
    }

}