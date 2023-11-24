import { Covoiturage } from "../model/Covoiturage";
import { JwtTokenService } from "./JwtTokenService";
import { CovoiturageRepository } from "../repository/CovoiturageRepository";
import { CovoiturageUtilisateurRepository } from "../repository/CovoiturageUtilisateurRepository";
import { NoteRepository } from "../repository/NoteRepository";
import { UtilisateurService } from "../service/UtilisateurService";

export class CovoiturageService {
    private covoiturageRepository: CovoiturageRepository = new CovoiturageRepository();
    private covoiturageUtilisateurRepository: CovoiturageUtilisateurRepository = new CovoiturageUtilisateurRepository();
    private utilisateurService: UtilisateurService = new UtilisateurService();
    private NoteRepository: NoteRepository = new NoteRepository();
    private jwtTokenService: JwtTokenService = JwtTokenService.getInstance();

    async createCovoiturage(authorization: string, contrat: Covoiturage) {
        const idUser = await this.jwtTokenService.getUtilisateurIdFromToken(authorization);
        const covoiturage = this.covoiturageRepository.postCovoiturage(contrat.localisationDepart, contrat.localisationArrive, contrat.dateDepart, contrat.dateArrivee, contrat.prix, 0, contrat.voiture.marque, contrat.voiture.modele, contrat.voiture.nombreDePlace, contrat.voiture.description, contrat.voiture.photo);
    }

    async deleteConvoiturage(contrat: Covoiturage, authorization: string) {
        if(contrat.conducteur.id == await this.jwtTokenService.getUtilisateurIdFromToken(authorization)){
            this.covoiturageRepository.deleteCovoiturage(contrat.id);
        }else{
            return null;
        }
    }

    async desabonnement(contrat: Covoiturage, auth: string) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        if(contrat.conducteur.id == id){
            this.covoiturageUtilisateurRepository.desabonnement(id, contrat.id)
        }else{
            return null;
        }
    }

    async abonnement(contrat: Covoiturage, auth: string){
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        if(contrat.conducteur.id == id){
            this.covoiturageUtilisateurRepository.abonnement(id, contrat.id)
        }else{
            return null;
        }
    }

    async noteCovoiturage(contrat: Covoiturage, auth: string, note: number){
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        if(contrat.conducteur.id != id
            && await this.covoiturageRepository.checkState(contrat.id) 
            && await this.covoiturageUtilisateurRepository.checkPassengerCourse(id, contrat.id)){
            this.NoteRepository.noteCovoiturage(contrat.conducteur.id, note)
        }else{
            return null;
        }
    }
}