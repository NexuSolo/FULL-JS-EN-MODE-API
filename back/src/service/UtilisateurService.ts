import { Utilisateur } from "../model/Utilisateur";
import { UtilisateurReduit } from "../model/UtilisateurReduit";
import { Voiture } from "../model/Voiture";
import { UtilisateurRepository } from "../repository/UtilisateurRepository";
import { JwtTokenService } from "./JwtTokenService";

export class UtilisateurService {
    private utilisateurRepository: UtilisateurRepository = new UtilisateurRepository();
    private jwtTokenService: JwtTokenService = new JwtTokenService();

    addUtilisateur(nom: string, prenom: string, email: string, password: string) {
        this.utilisateurRepository.postUser(nom, prenom, email, password);
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