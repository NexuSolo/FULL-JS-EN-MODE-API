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
        const idCovoiturage = await this.covoiturageRepository.postCovoiturage(contrat.localisationDepart, contrat.localisationArrive, contrat.dateDepart, contrat.dateArrivee, contrat.prix, 0, idUser, contrat.voiture.marque, contrat.voiture.modele, contrat.voiture.nombreDePlace, contrat.voiture.description, contrat.voiture.photo);
        if(idCovoiturage) {
            return true;
        }
        else {
            return false;
        }
    }

    async getCovoiturage(id : number) {
        const covoiturage = await this.covoiturageRepository.getCovoiturage(id);
        if(covoiturage.length == 0) {
            return null;
        }
        return covoiturage[0];
    }

    async deleteConvoiturage(authorization: string, id: number) {
        const idUser = await this.jwtTokenService.getUtilisateurIdFromToken(authorization);
        const covoiturage = await this.covoiturageRepository.getCovoiturage(id);
        if(covoiturage.length == 0) {
            return null;
        }
        if(covoiturage[0].conducteur_id == idUser){
            this.covoiturageRepository.deleteCovoiturage(id);
        }else{
            return null;
        }
    }

    async getAllCovoiturages() {
        const covoiturages = await this.covoiturageRepository.getAllCovoiturages();
        if(covoiturages.length == 0) {
            return null;
        }
        return covoiturages;
    }


    async desabonnement(contrat: Covoiturage, auth: string) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        if(contrat.conducteur.id == id){
            this.covoiturageUtilisateurRepository.desabonnement(id, contrat.id)
        }else{
            return null;
        }
    }

    async abonnement(auth: string ,contrat: number) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        this.covoiturageUtilisateurRepository.abonnement(id, contrat)
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

    async getPassengers(id: number){
        const passengers = await this.covoiturageRepository.getPassengers(id);
        if(passengers.length == 0) {
            return null;
        }
        return passengers;
    }
}