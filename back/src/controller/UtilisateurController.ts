import { UtilisateurService } from "../service/UtilisateurService";

export class UtilisateurController {
    constructor(private utilisateurService: UtilisateurService) {}

    register(nom: string, prenom: string, email: string, password: string) {
        return this.utilisateurService.addUtilisateur(nom, prenom, email, password)
    }

    login(email: string, password: string) {
        return this.utilisateurService.connectUtilisateur(email, password)
    }

    getUtilisateur(id: number) {
        this.utilisateurService.getUtilisateur(id)
    }

    updateEmail(auth: string, email: string) {
        this.utilisateurService.updateEmailUtilisateur(auth, email)
    }

    updatePassword(auth: string, password: string) {
        this.utilisateurService.updatePasswordUtilisateur(auth, password)
    }

    updatePhoto(auth: string, photo: string) {
        this.utilisateurService.updatePhotoUtilisateur(auth, photo)
    }
    
}