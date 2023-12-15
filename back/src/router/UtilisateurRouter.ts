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
        this.router.get('/verify', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                if(!authorization) {
                    throw new Error("Missing arguments");
                }
                const result = this.utilisateurController.verify(authorization);
                console.log('result='+await result);
                if(await result) {
                    res.json({token: await result});
                }
                else {
                    res.json({error: "Token invalid"});
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
        this.router.patch('/', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                const {email, password, photo} = req.body;

                if(!authorization) {
                    throw new Error("Missing arguments");
                }
                
                const message = [];

                if(email) {
                    if(await this.utilisateurController.updateEmail(authorization, email)) {
                        message.push("Email updated");
                    }
                    else {
                        message.push("Email not updated");
                    }
                }

                if(password) {
                    if(await this.utilisateurController.updatePassword(authorization, password)) {
                        message.push("Password updated");
                    }
                    else {
                        message.push("Password not updated");
                    }
                }

                if(photo) {
                    if(await this.utilisateurController.updatePhoto(authorization, photo)) {
                        message.push("Photo updated");
                    }
                    else {
                        message.push("Photo not updated");
                    }
                }

                if(message.length === 0) {
                    res.json({error: "Missing arguments"});
                }
                res.json({message: message});
            }
            catch (error: unknown) {
                next(error);
            }
        });
    }

}