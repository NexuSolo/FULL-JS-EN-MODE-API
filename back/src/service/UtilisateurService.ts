import { Utilisateur } from "../model/Utilisateur";
import { UtilisateurReduit } from "../model/UtilisateurReduit";
import { UtilisateurRepository } from "../repository/UtilisateurRepository";
import { JwtTokenService } from "./JwtTokenService";
import { PasswordCryptageService } from "./PasswordCryptageService";
import { NoteRepository } from "../repository/NoteRepository";

export class UtilisateurService {
    private utilisateurRepository: UtilisateurRepository = new UtilisateurRepository();
    private jwtTokenService: JwtTokenService = JwtTokenService.getInstance();
    private passWordHashService: PasswordCryptageService = new PasswordCryptageService();
    private noteRepository: NoteRepository = new NoteRepository();

    async addUtilisateur(nom: string, prenom: string, email: string, password: string) {
        const passwordHash = this.passWordHashService.cryptPassword(password);
        if(await this.utilisateurRepository.getUtilisateurByEmail(email)) {
            return null;
        }
        this.utilisateurRepository.register(nom, prenom, await passwordHash, email);
        const utilisateur: Utilisateur = await this.utilisateurRepository.getUtilisateurByEmail(email);
        const utilisateurReduit: UtilisateurReduit = new UtilisateurReduit(utilisateur.id, utilisateur.nom, utilisateur.prenom, utilisateur.email, utilisateur.note, utilisateur.covoiturages, utilisateur.covoituragesPassager, utilisateur.photo)
        const token = this.jwtTokenService.generateToken(utilisateurReduit);
        return {token: token, id: utilisateur.id};
    }

    async connectUtilisateur(email: string, password: string) {
        const utilisateurs: Utilisateur = await this.utilisateurRepository.getUtilisateurByEmail(email);
        try {
            if(await this.passWordHashService.comparePasswords(password, utilisateurs.password)) {
                const utilisateurReduit: UtilisateurReduit = new UtilisateurReduit(utilisateurs.id, utilisateurs.nom, utilisateurs.prenom, utilisateurs.email, utilisateurs.note, utilisateurs.covoiturages, utilisateurs.covoituragesPassager, utilisateurs.photo);
                const token = this.jwtTokenService.generateToken(utilisateurReduit);
                return {token: token, id: utilisateurs.id};
            }
            else {
                return null;
            }
        }
        catch (error: unknown) {
            console.log(error);
        }
    }

    async verify(auth: string) {
        return this.jwtTokenService.verifyToken(auth.split(' ')[1]);
    }

    async getUtilisateur(id: number) {
        const users = await this.utilisateurRepository.getUser(id);
        if(!users) {
            return null;
        }
        return new UtilisateurReduit(users.id, users.nom, users.prenom, users.email, users.note, users.covoiturages, users.covoituragesPassager, users.photo);
    }

    async updatePasswordUtilisateur(auth: string, password: string) {
        const user = await this.utilisateurRepository.getUserwithPassword(await this.jwtTokenService.getUtilisateurIdFromToken(auth))
        if(!user) {
            return false;
        }
        const passwordHash = this.passWordHashService.cryptPassword(password);
        this.utilisateurRepository.updatePasswordUtilisateur(user.id, await passwordHash);
        return true;
    }

    async updateEmailUtilisateur(auth: string, email: string) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth)
        if((await this.utilisateurRepository.getUser(id)).length == 0) {
            return false;
        }
        this.utilisateurRepository.patchUser(await this.jwtTokenService.getUtilisateurIdFromToken(auth), undefined, email, undefined);
        return true;
    }

    async updatePhotoUtilisateur(auth: string, photo: string) {
        if((await this.utilisateurRepository.getUser(await this.jwtTokenService.getUtilisateurIdFromToken(auth))).length == 0) {
            return false;
        }
        this.utilisateurRepository.patchUser(await this.jwtTokenService.getUtilisateurIdFromToken(auth), undefined, undefined, photo);
        return true;
    }

    async getAvgNoteUser(auth: string) {
        const id = await this.jwtTokenService.getUtilisateurIdFromToken(auth);
        const notes_list = (await this.noteRepository.getAllNotes(id)).rows;
        let sum = 0;
        for(let i = 0; i < notes_list.length; i++) {
            sum += notes_list[i].valeur;
        }
        return sum/notes_list.length;
    }

}