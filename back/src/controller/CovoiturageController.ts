import { Covoiturage } from "../model/Covoiturage";
import { CovoiturageService } from "../service/CovoiturageService";

export class CovoiturageController {
    private covoiturageService: CovoiturageService = new CovoiturageService(); 

    async addCovoiturage(authorization: string, contrat: Covoiturage) {
        return this.covoiturageService.createCovoiturage(authorization, contrat);
    }

    async getCovoiturage(id: number) {
        return this.covoiturageService.getCovoiturage(id);
    }

    async deleteCovoiturage(authorization: string, id: number) {
        return this.covoiturageService.deleteConvoiturage(authorization, id);
    }

    async abonnement(authorization: string, id: number){
        return this.covoiturageService.abonnement(authorization, id);
    }

    async noteCovoiturage(authorization: string, id: number, note: number){
        return this.covoiturageService.noteCovoiturage(id, authorization, note);
    }

    async getNoteCovoiturage(authorization: string, id: number) {
        return this.covoiturageService.getNoteCovoiturage(id, authorization);
    
    }

    async getAllCovoiturages() {
        return this.covoiturageService.getAllCovoiturages();
    }

    async getPassengers(id: number){
        return this.covoiturageService.getPassengers(id);
    }

}