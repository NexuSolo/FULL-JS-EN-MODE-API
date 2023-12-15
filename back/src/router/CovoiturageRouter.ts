import { Router } from "express";
import { CovoiturageController } from "../controller/CovoiturageController";

export class CovoiturageRouter {
    router = Router();

    constructor(private covoiturageController: CovoiturageController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {

        this.router.post('/', async (req, res, next) => {
            try {
                const authorization = await req.headers.authorization;
                const { covoiturage } = await req.body;

                if(!authorization || !covoiturage) {
                    throw new Error("Missing arguments");
                }
                const result = await this.covoiturageController.addCovoiturage(authorization, covoiturage);
                if(result !== false) {
                    res.json({success: "Success"});
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.get('/all', async (req, res, next) => {
            try {
                const result = this.covoiturageController.getAllCovoiturages();
                if(await result !== null) {
                    res.json(await result);
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.post('/note/:id', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                if(!authorization) {
                    throw new Error("Missing arguments");
                }
                const id = parseInt(req.params.id);
                const { note } = req.body;
                const result = this.covoiturageController.noteCovoiturage(authorization, id, note);
                if(await result !== null) {
                    res.json(await result);
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.get('/note/:id', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                if(!authorization) {
                    throw new Error("Missing arguments");
                }
                const id = parseInt(req.params.id);
                const result = this.covoiturageController.getNoteCovoiturage(authorization, id);
                if(await result !== null) {
                    res.json(await result);
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.get('/passengers/:id', async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                const result = this.covoiturageController.getPassengers(id);
                if(await result !== null) {
                    res.json(await result);
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.get('/:id', async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                const result = this.covoiturageController.getCovoiturage(id);
                if(await result !== null) {
                    res.json(await result);
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.delete('/:id', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                if(!authorization) {
                    throw new Error("Missing arguments");
                }
                const id = parseInt(req.params.id);
                const result = this.covoiturageController.deleteCovoiturage(authorization, id);
                if(await result !== null) {
                    res.json({success: "Success"});
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
        this.router.post('/:id', async (req, res, next) => {
            try {
                const authorization = req.headers.authorization;
                if(!authorization) {
                    throw new Error("Missing arguments");
                }
                const id = parseInt(req.params.id);
                const result = this.covoiturageController.abonnement(authorization, id);
                if(await result !== null) {
                    res.json({success: "Success"});
                }
                else {
                    res.json({error: "Error"});
                }
            }
            catch (error: unknown) {
                next(error);
            }
        });
    }

}