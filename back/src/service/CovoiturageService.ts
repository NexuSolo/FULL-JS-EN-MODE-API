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
        const conduteur = await this.utilisateurService.getUtilisateur(covoiturage.conducteur_id);
        if(!conduteur) {
            return null;
        }
        const conducteur: any = {
            id: conduteur.id,
            nom: conduteur.nom,
            prenom: conduteur.prenom,
            note: conduteur.note,
            photo: conduteur.photo
        }
        covoiturage.conducteur = conducteur;
        const passagers = await this.covoiturageUtilisateurRepository.getPassengers(id);
        const p = [];
        var index = 0;
        for(let i = 0; i < passagers.length; i++) {
            if(conducteur.id == passagers[i].utilisateur_id) {
                continue;
            }
            const passager = await this.utilisateurService.getUtilisateur(passagers[i].utilisateur_id);
            if(!passager) {
                return null;
            }
            p[index++] = {
                id: passager.id,
                nom: passager.nom,
                prenom: passager.prenom,
                photo: passager.photo
            }
        }
        covoiturage.passagers = p;
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
            this.desabonnement(covoiturage.id, authorization);
        }
        else {
            //cas ou on est le proprio
            const passagers = await this.covoiturageUtilisateurRepository.getPassengers(id);
            for(let i = 0; i < passagers.length; i++) {
                this.covoiturageUtilisateurRepository.desabonnement(passagers[i].utilisateur_id, id);
            }
            this.covoiturageRepository.deleteCovoiturage(id);
        }
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
        if(passagers.length == 0) {
            return null;
        }
        this.covoiturageUtilisateurRepository.desabonnement(utilisateur_id, covoiturage_id);
    }

    async abonnement(auth: string ,contrat: number) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        const covoiturages = await this.covoiturageUtilisateurRepository.checkPassengerCourse(contrat, id);
        if(await this.covoiturageUtilisateurRepository.getAvailableSeats(contrat) == 0) {
            return null;
        }
        if(covoiturages.length != 0) {
            return null;
        }
        this.covoiturageUtilisateurRepository.abonnement(id, contrat)
    }

    async getPassengers(id: number) {
        const passengers = await this.covoiturageRepository.getPassengers(id);
        if(passengers.length == 0) {
            return null;
        }
        return passengers;
    }

    async noteCovoiturage(covoiturage_id: number, auth: string , note: number) {
        if(note < 1 || note > 5) {
            return null;
        }
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        const covoiturage = await this.covoiturageRepository.getCovoiturage(covoiturage_id);
        if(covoiturage.conducteur_id != id
            && await this.covoiturageRepository.checkState(covoiturage) 
            && await this.covoiturageUtilisateurRepository.checkPassengerCourse(id, covoiturage_id)) {
            this.NoteRepository.postNoteCovoiturage(covoiturage_id, id, note);
        }
        else {
            return null;
        }
    }

    async getNoteCovoiturage(covoiturage_id: number, auth: string) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        const note = await this.NoteRepository.getNoteCovoiturage(covoiturage_id, id);
        if(!note) {
            return null;
        }
        return note;
    }

    async getCovoiturageIdByConducteurId(id: number) {
        const covoiturages = await this.covoiturageRepository.getConducteurCovoiturages(id);
        if(covoiturages.length == 0) {
            return null;
        }
        return covoiturages;
    }

}