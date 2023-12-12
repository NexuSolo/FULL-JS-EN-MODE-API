import { Covoiturage } from "./Covoiturage";
import { Note } from "./Note";

export class Utilisateur {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public password: string,
        public note: Note[],
        public covoiturages: Covoiturage[],
        public covoituragesPassager: Covoiturage[],
        public photo: string
    ) {}
}