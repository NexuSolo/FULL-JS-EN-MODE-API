import { Covoiturage } from "../model/Covoiturage";
import { JwtTokenService } from "./JwtTokenService";
import { CovoiturageRepository } from "../repository/CovoiturageRepository";
import { CovoiturageUtilisateurRepository } from "../repository/CovoiturageUtilisateurRepository";
import { NoteRepository } from "../repository/NoteRepository";

export class CovoiturageService {
    private covoiturageRepository: CovoiturageRepository = new CovoiturageRepository();
    private covoiturageUtilisateurRepository: CovoiturageUtilisateurRepository = new CovoiturageUtilisateurRepository();
    private NoteRepository: NoteRepository = new NoteRepository();
    private jwtTokenService: JwtTokenService = new JwtTokenService();

    createCovoiturage(contrat: Covoiturage) {
        this.covoiturageRepository.postCovoiturage(contrat.localisationDepart, contrat.localisationArrive,
            contrat.dateDepart, contrat.dateArrivee, contrat.prix, contrat.distance);
    }

    deleteConvoiturage(contrat: Covoiturage, authorization: string) {
        if(contrat.conducteur.id === this.jwtTokenService.getUtilisateurFromToken(authorization).id){
            this.covoiturageRepository.deleteCovoiturage(contrat.id);
        }else{
            return null;
        }
    }

    desabonnement(contrat: Covoiturage, auth: string) {
        if(contrat.conducteur.id === this.jwtTokenService.getUtilisateurFromToken(auth).id){
            this.covoiturageUtilisateurRepository.desabonnement(this.jwtTokenService.getUtilisateurFromToken(auth).id, contrat.id)
        }else{
            return null;
        }
    }

    abonnement(contrat: Covoiturage, auth: string){
        if(contrat.conducteur.id === this.jwtTokenService.getUtilisateurFromToken(auth).id){
            this.covoiturageUtilisateurRepository.abonnement(this.jwtTokenService.getUtilisateurFromToken(auth).id, contrat.id)
        }else{
            return null;
        }
    }

    async noteCovoiturage(contrat: Covoiturage, auth: string, note: number){
        if(contrat.conducteur.id != this.jwtTokenService.getUtilisateurFromToken(auth).id
            && await this.covoiturageRepository.checkState(contrat.id)){
            this.NoteRepository.noteCovoiturage(contrat.conducteur.id, note)
        }else{
            return null;
        }
    }
}