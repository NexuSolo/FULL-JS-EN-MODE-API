import { CovoiturageService } from '../service/CovoiturageService';
import { UtilisateurService } from '../service/UtilisateurService';
import { VoitureService } from '../service/VoitureService';
import { ExpressRouter } from './express-router';
import { ExpressServer } from './express-server';
import * as dotenv from 'dotenv';

export class ExpressApplication {
    private expressRouter!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private utilisateurService!: UtilisateurService;
    private voitureService!: VoitureService;
    private covoiturageService!: CovoiturageService;

    constructor() {
        this.configureApplication();
    }

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureServerPort();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env',
        });
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }

    private configureServices(): void {
        this.utilisateurService = new UtilisateurService();
        this.voitureService = new VoitureService();
        this.covoiturageService = new CovoiturageService();
    }

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(this.utilisateurService, this.voitureService, this.covoiturageService);
    }

    private configureServer(): void {
        this.server = new ExpressServer(this.expressRouter, this.port);
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in env file.');
        }

        return port;
    }
}
