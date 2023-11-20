import { Covoiturage } from "../model/Covoiturage";
import { JwtTokenService } from "./JwtTokenService";
import { CovoiturageRepository } from "../repository/CovoiturageRepository";
import { CovoiturageUtilisateurRepository } from "../repository/CovoiturageUtilisateurRepository";

export class CovoiturageService {
    private covoiturageRepository: CovoiturageRepository = new CovoiturageRepository();
    private covoiturageUtilisateurRepository: CovoiturageUtilisateurRepository = new CovoiturageUtilisateurRepository();
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

    desabonnement(contrat: Covoiturage, authorization: string) {
        if(contrat.conducteur.id === this.jwtTokenService.getUtilisateurFromToken(authorization).id){
            this.covoiturageUtilisateurRepository.desabonnement(contrat.id)
        }else{
            return null;
        }
    }
}