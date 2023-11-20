import { Utilisateur } from "../model/Utilisateur";
import { UtilisateurService } from "../service/UtilisateurService";

export class UtilisateurController {
    constructor(private utilisateurService: UtilisateurService) {}

    addUtilisateur(nom: string, prenom: string, email: string, password: string) {
        let utilisateurService = new UtilisateurService();
        utilisateurService.addUtilisateur(nom, prenom, email, password)
    }

}