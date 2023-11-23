import { Covoiturage } from "../model/Covoiturage";
import { JwtTokenService } from "./JwtTokenService";
import { CovoiturageRepository } from "../repository/CovoiturageRepository";
import { CovoiturageUtilisateurRepository } from "../repository/CovoiturageUtilisateurRepository";
import { NoteRepository } from "../repository/NoteRepository";

export class CovoiturageService {
    private covoiturageRepository: CovoiturageRepository = new CovoiturageRepository();
    private covoiturageUtilisateurRepository: CovoiturageUtilisateurRepository = new CovoiturageUtilisateurRepository();
    private NoteRepository: NoteRepository = new NoteRepository();
    private jwtTokenService: JwtTokenService = JwtTokenService.getInstance();

    createCovoiturage(authorization: string, contrat: Covoiturage) {
        this.covoiturageRepository.postCovoiturage(contrat.localisationDepart, contrat.localisationArrive,
            contrat.dateDepart, contrat.dateArrivee, contrat.prix, contrat.distance);
    }

    async deleteConvoiturage(contrat: Covoiturage, authorization: string) {
        if(contrat.conducteur.id === await this.jwtTokenService.getUtilisateurIdFromToken(authorization)){
            this.covoiturageRepository.deleteCovoiturage(contrat.id);
        }else{
            return null;
        }
    }

    async desabonnement(contrat: Covoiturage, auth: string) {
        if(contrat.conducteur.id === await this.jwtTokenService.getUtilisateurIdFromToken(auth)){
            this.covoiturageUtilisateurRepository.desabonnement(await this.jwtTokenService.getUtilisateurIdFromToken(auth), contrat.id)
        }else{
            return null;
        }
    }

    async abonnement(contrat: Covoiturage, auth: string){
        if(contrat.conducteur.id === await this.jwtTokenService.getUtilisateurIdFromToken(auth)){
            this.covoiturageUtilisateurRepository.abonnement(await this.jwtTokenService.getUtilisateurIdFromToken(auth), contrat.id)
        }else{
            return null;
        }
    }

    async noteCovoiturage(contrat: Covoiturage, auth: string, note: number){
        if(contrat.conducteur.id != await this.jwtTokenService.getUtilisateurIdFromToken(auth)
            && await this.covoiturageRepository.checkState(contrat.id)){
            this.NoteRepository.noteCovoiturage(contrat.conducteur.id, note)
        }else{
            return null;
        }
    }
}