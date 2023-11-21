import { Utilisateur } from "../model/Utilisateur";
import { UtilisateurReduit } from "../model/UtilisateurReduit";
import { UtilisateurRepository } from "../repository/UtilisateurRepository";
import { JwtTokenService } from "./JwtTokenService";
import { PasswordCryptageService } from "./PasswordCryptageService";

export class UtilisateurService {
    private utilisateurRepository: UtilisateurRepository = new UtilisateurRepository();
    private jwtTokenService: JwtTokenService = new JwtTokenService();
    private passWordHashService: PasswordCryptageService = new PasswordCryptageService();

    async addUtilisateur(nom: string, prenom: string, email: string, password: string) {
        const passwordHash = this.passWordHashService.cryptPassword(password);
        this.utilisateurRepository.register(nom, prenom, email, await passwordHash);
        const utilisateur: Utilisateur[] = await this.utilisateurRepository.getUtilisateurByEmail(email);
        const utilisateurReduit: UtilisateurReduit = new UtilisateurReduit(utilisateur[0].id, utilisateur[0].nom, utilisateur[0].prenom, utilisateur[0].email, utilisateur[0].note, utilisateur[0].covoiturages, utilisateur[0].covoituragesPassager, utilisateur[0].photo);
        return this.jwtTokenService.generateToken(utilisateurReduit);
    }

    async connectUtilisateur(email: string, password: string) {
        const utilisateurs: Utilisateur[] = await this.utilisateurRepository.getUtilisateurByEmail(email);
        if (utilisateurs.length === 0) {
            return false;
        }
        if(await this.passWordHashService.comparePasswords(password, utilisateurs[0].password)) {
            const utilisateurReduit: UtilisateurReduit = new UtilisateurReduit(utilisateurs[0].id, utilisateurs[0].nom, utilisateurs[0].prenom, utilisateurs[0].email, utilisateurs[0].note, utilisateurs[0].covoiturages, utilisateurs[0].covoituragesPassager, utilisateurs[0].photo);
            return this.jwtTokenService.generateToken(utilisateurReduit);
        }
    }

    getUtilisateur(id: number) {
        throw new Error("Method not implemented.");
    }

    updatePasswordUtilisateur(auth: string, password: string) {
        throw new Error("Method not implemented.");
    }

    updateEmailUtilisateur(auth: string, email: string) {
        throw new Error("Method not implemented.");
    }

    updatePhotoUtilisateur(auth: string, photo: string) {
        throw new Error("Method not implemented.");
    }

}