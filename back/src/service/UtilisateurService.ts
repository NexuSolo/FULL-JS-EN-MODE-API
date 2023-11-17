import { Utilisateur } from "../model/Utilisateur";
import { Voiture } from "../model/Voiture";


export class UtilisateurService {
    
    addUtilisateur(nom: string, prenom: string, email: string, password: string): Utilisateur {
        throw new Error("Method not implemented.");
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