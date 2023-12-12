import { Covoiturage } from "./Covoiturage";
import { Note } from "./Note";

export class UtilisateurReduit {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public note: Note[],
        public covoiturages: Covoiturage[],
        public covoituragesPassager: Covoiturage[],
        public photo: string
    ) {}
}