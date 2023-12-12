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
        if((await this.utilisateurRepository.getUtilisateurByEmail(email)).length !== 0) {
            return null;
        }
        this.utilisateurRepository.register(nom, prenom, await passwordHash, email);
        const u: Utilisateur[] = await this.utilisateurRepository.getUtilisateurByEmail(email);
        const utilisateur = u[0];
        const utilisateurReduit: UtilisateurReduit = await new UtilisateurReduit(utilisateur.id, utilisateur.nom, utilisateur.prenom, utilisateur.email, utilisateur.note, utilisateur.covoiturages, utilisateur.covoituragesPassager, utilisateur.photo)
        const token = this.jwtTokenService.generateToken(utilisateurReduit);
        return token;
    }

    async connectUtilisateur(email: string, password: string) {
        const utilisateurs: Utilisateur[] = await this.utilisateurRepository.getUtilisateurByEmail(email);
        if (utilisateurs.length == 0) {
            return null;
        }
        try {
            if(await this.passWordHashService.comparePasswords(password, utilisateurs[0].password)) {
                const utilisateurReduit: UtilisateurReduit = new UtilisateurReduit(utilisateurs[0].id, utilisateurs[0].nom, utilisateurs[0].prenom, utilisateurs[0].email, utilisateurs[0].note, utilisateurs[0].covoiturages, utilisateurs[0].covoituragesPassager, utilisateurs[0].photo);
                const mdp = this.jwtTokenService.generateToken(utilisateurReduit);
                return mdp;
            }
            else {
                return null;
            }
        }
        catch (error: unknown) {
            console.log(error);
        }
    }

    async getUtilisateur(id: number) {
        const users = await this.utilisateurRepository.getUser(id);
        if(users.length == 0) {
            return null;
        }
        return new UtilisateurReduit(users[0].id, users[0].nom, users[0].prenom, users[0].email, users[0].note, users[0].covoiturages, users[0].covoituragesPassager, users[0].photo);
    }

    async updatePasswordUtilisateur(auth: string, password: string) {
        if((await this.utilisateurRepository.getUser(await this.jwtTokenService.getUtilisateurIdFromToken(auth))).length === 0) {
            return false;
        }
        const passwordHash = this.passWordHashService.cryptPassword(password);
        this.utilisateurRepository.updatePasswordUtilisateur(await this.jwtTokenService.getUtilisateurIdFromToken(auth),await passwordHash);
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