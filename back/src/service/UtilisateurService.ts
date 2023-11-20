import { Utilisateur } from "../model/Utilisateur";
import { Voiture } from "../model/Voiture";
import { UtilisateurRepository } from "../repository/UtilisateurRepository";

export class UtilisateurService {

    
    addUtilisateur(nom: string, prenom: string, email: string, password: string) {
        let utilisateurRepository = new UtilisateurRepository();
        utilisateurRepository.register(nom, prenom, email, password);
    }

    connectUtilisateur(email: string, password: string) {
        throw new Error("Method not implemented.");
    }

    addUtilisateurPhoto(utilisateur: Utilisateur, photo: string) {
        throw new Error("Method not implemented.");
    }

    addUtilisateurVoiture(utilisateur: Utilisateur, voiture: Voiture) {
        throw new Error("Method not implemented.");
    }

    updateNote() {
        throw new Error("Method not implemented.");
    }

}