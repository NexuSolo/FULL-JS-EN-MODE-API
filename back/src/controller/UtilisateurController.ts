import { UtilisateurService } from "../service/UtilisateurService";

export class UtilisateurController {
    constructor(private utilisateurService: UtilisateurService) {}

    register(nom: string, prenom: string, email: string, password: string) {
        return this.utilisateurService.addUtilisateur(nom, prenom, email, password)
    }

    login(email: string, password: string) {
        return this.utilisateurService.connectUtilisateur(email, password)
    }

    verify(auth: string) {
        return this.utilisateurService.verify(auth)
    }

    getUtilisateur(id: number) {
        return this.utilisateurService.getUtilisateur(id)
    }

    updatePassword(auth: string, password: string) {
        return this.utilisateurService.updatePasswordUtilisateur(auth, password)
    }

    updateEmail(auth: string, email: string) {
        return this.utilisateurService.updateEmailUtilisateur(auth, email)
    }

    updatePhoto(auth: string, photo: string) {
        return this.utilisateurService.updatePhotoUtilisateur(auth, photo)
    }
    
}