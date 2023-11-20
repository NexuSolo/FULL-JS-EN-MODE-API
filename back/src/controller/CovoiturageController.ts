import { Covoiturage } from "../model/Covoiturage";
import { CovoiturageService } from "../service/CovoiturageService";

export class CovoiturageController {
    private covoiturageService: CovoiturageService = new CovoiturageService(); 

    noteContrat(contrat: Covoiturage, note: number, authorization: string){

    }
    desabonnement(contrat: Covoiturage, authorization: string) {
        this.covoiturageService.desabonnement(contrat, authorization);
    }
    deleteConvoiturage(contrat: Covoiturage, authorization: string) {
        this.covoiturageService.deleteConvoiturage(contrat, authorization);
    }

}