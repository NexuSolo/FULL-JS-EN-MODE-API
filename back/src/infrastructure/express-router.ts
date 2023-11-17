import { Router } from 'express';
import { UtilisateurRouter } from '../router/UtilisateurRouter';
import { UtilisateurController } from '../controller/UtilisateurController';
import { CovoiturageController } from '../controller/CovoiturageController';
import { CovoiturageRouter } from '../router/CovoiturageRouter';
import { VoitureController } from '../controller/VoitureController';
import { VoitureRouter } from '../router/VoitureRouter';
import { UtilisateurService } from '../service/UtilisateurService';
import { VoitureService } from '../service/VoitureService';
import { CovoiturageService } from '../service/CovoiturageService';

export class ExpressRouter {
    router = Router();

    private UtilisateurController!: UtilisateurController;
    private UtilisateurRouter!: UtilisateurRouter;
    private CovoiturageController!: CovoiturageController;
    private CovoiturageRouter!: CovoiturageRouter;
    private VoitureController!: VoitureController;
    private VoitureRouter!: VoitureRouter;

    constructor(private userService: UtilisateurService, private voitureService: VoitureService, private covoiturageService: CovoiturageService) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.UtilisateurController = new UtilisateurController(this.userService);
        this.CovoiturageController = new CovoiturageController(this.covoiturageService);
        this.VoitureController = new VoitureController(this.voitureService);
    }

    private configureRouters(): void {
        this.UtilisateurRouter = new UtilisateurRouter(this.UtilisateurController);
        this.CovoiturageRouter = new CovoiturageRouter(this.CovoiturageController);
        this.VoitureRouter = new VoitureRouter(this.VoitureController);
    }

    private configureRoutes(): void {
        this.router.use('/utilisateur', this.UtilisateurRouter.router);
        this.router.use('/covoiturage', this.CovoiturageRouter.router);
        this.router.use('/voiture', this.VoitureRouter.router);
    }
}
