import { Router } from 'express';
import { UtilisateurRouter } from '../router/UtilisateurRouter';
import { UtilisateurController } from '../controller/UtilisateurController';
import { CovoiturageController } from '../controller/CovoiturageController';
import { CovoiturageRouter } from '../router/CovoiturageRouter';
import { UtilisateurService } from '../service/UtilisateurService';
import { CovoiturageService } from '../service/CovoiturageService';
import { authMiddleware } from '../config/authMiddleware';

export class ExpressRouter {
    router = Router();

    private UtilisateurController!: UtilisateurController;
    private UtilisateurRouter!: UtilisateurRouter;
    private CovoiturageController!: CovoiturageController;
    private CovoiturageRouter!: CovoiturageRouter;

    constructor(private userService: UtilisateurService, private covoiturageService: CovoiturageService) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.UtilisateurController = new UtilisateurController(this.userService);
        this.CovoiturageController = new CovoiturageController();
    }

    private configureRouters(): void {
        this.UtilisateurRouter = new UtilisateurRouter(this.UtilisateurController);
        this.CovoiturageRouter = new CovoiturageRouter(this.CovoiturageController);
    }

    private configureRoutes(): void {
        this.router.use(authMiddleware);
        this.router.use('/covoiturage', this.CovoiturageRouter.router);
        this.router.use('/utilisateur', this.UtilisateurRouter.router);
    }
    
}
