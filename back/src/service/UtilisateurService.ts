import { Utilisateur } from "../model/Utilisateur";
import { Voiture } from "../model/Voiture";

const fs = require('fs');
const data = fs.readFileSync('../data/Utilisateur.json');

export class UtilisateurService {
    
    addUtilisateur(nom: string, prenom: string, email: string, password: string): Utilisateur {
        const nombreUtilisateurs = data.utilisateurs.length;
        if(nombreUtilisateurs === 0) {
            const utilisateur = new Utilisateur(nom, prenom, email, password, 1);
            data.utilisateurs.push(utilisateur);
            fs.writeFileSync('data.json', JSON.stringify(data));
            return utilisateur;
        }
        const utilisateur = new Utilisateur(nom, prenom, email, password, data.utilisateurs[nombreUtilisateurs-1].id + 1);
        data.utilisateurs.push(utilisateur);
        fs.writeFileSync('data.json', JSON.stringify(data));
        return utilisateur;
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