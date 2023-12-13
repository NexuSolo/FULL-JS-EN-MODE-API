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
        //TODO renvoyer les bonnes erreurs pour renvoyer l'erreur au client
        if(contrat.dateArrivee < contrat.dateDepart) {
            return false;
        }
        if(contrat.localisationDepart == contrat.localisationArrive) {
            return false;
        }
        if(contrat.prix < 0) {
            return false;
        }
        if(contrat.voiture.nombreDePlace < 1) {
            return false;
        }
        if(contrat.voiture.nombreDePlace > 9) {
            return false;
        }
        if(contrat.voiture.marque.length > 50) {
            return false;
        }
        if(contrat.voiture.modele.length > 50) {
            return false;
        }
        if(contrat.voiture.description.length > 500) {
            return false;
        }
        const idUser = await this.jwtTokenService.getUtilisateurIdFromToken(authorization);
        console.log("iduser" + idUser);
        const covoiturage = await this.covoiturageRepository.postCovoiturage(contrat.localisationDepart, contrat.localisationArrive, contrat.dateDepart, contrat.dateArrivee, contrat.prix, 0, idUser, contrat.voiture.marque, contrat.voiture.modele, contrat.voiture.nombreDePlace, contrat.voiture.description, contrat.voiture.photo);
        console.log("covoiturage" + covoiturage);
        this.covoiturageUtilisateurRepository.abonnement(idUser, covoiturage.id);
        return true;
    }

    async getCovoiturage(id : number) {
        const covoiturage = await this.covoiturageRepository.getCovoiturage(id);
        if(!covoiturage) {
            return null;
        }
        const place_libre = await this.covoiturageUtilisateurRepository.getAvailableSeats(id);
        covoiturage.place_libre = place_libre;
        return covoiturage;
    }

    async deleteConvoiturage(authorization: string, id: number) {
        const idUser = await this.jwtTokenService.getUtilisateurIdFromToken(authorization);
        const covoiturage = await this.covoiturageRepository.getCovoiturage(id);
        if(!covoiturage || covoiturage.etat != 1) {
            return null;
        }
        //cas ou on est un passager
        if(covoiturage.conducteur_id != idUser) {
            this.desabonnement(covoiturage, authorization);
        }
        //cas ou on est le proprio
        const passagers = await this.covoiturageUtilisateurRepository.getPassengers(idUser);
        for(let i = 0; i < passagers.length; i++) {
            this.covoiturageUtilisateurRepository.desabonnement(passagers[i].utilisateur_id, id);
        }
        this.covoiturageRepository.deleteCovoiturage(id);
    }

    async getAllCovoiturages() {
        const covoiturages = await this.covoiturageRepository.getAllCovoiturages();
        if(covoiturages.length == 0) {
            return null;
        }
        for(let i = 0; i < covoiturages.length; i++) {
            const place_libre = await this.covoiturageUtilisateurRepository.getAvailableSeats(covoiturages[i].id);
            covoiturages[i].place_libre = place_libre;
        }
        return covoiturages;
    }


    async desabonnement(covoiturage_id: number, utilisateur_auth : string) {
        const utilisateur_id = await this.jwtTokenService.getUtilisateurIdFromToken(utilisateur_auth);
        const passagers = await this.covoiturageUtilisateurRepository.checkPassengerCourse(covoiturage_id, utilisateur_id);
        this.covoiturageUtilisateurRepository.desabonnement(utilisateur_id, covoiturage_id);
    }

    async abonnement(auth: string ,contrat: number) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        this.covoiturageUtilisateurRepository.abonnement(id, contrat)
    }

    async noteCovoiturage(contrat: Covoiturage, auth: string, note: number){
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        if(contrat.conducteur.id != id
            && await this.covoiturageRepository.checkState(contrat.id) 
            && await this.covoiturageUtilisateurRepository.checkPassengerCourse(id, contrat.id)) {
            this.NoteRepository.noteCovoiturage(contrat.conducteur.id, note)
        }
        else {
            return null;
        }
    }

    async getPassengers(id: number) {
        const passengers = await this.covoiturageRepository.getPassengers(id);
        if(passengers.length == 0) {
            return null;
        }
        return passengers;
    }
}