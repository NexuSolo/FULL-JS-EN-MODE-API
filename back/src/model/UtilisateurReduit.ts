import { Covoiturage } from "./Covoiturage";

export class UtilisateurReduit {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public note: number[],
        public covoiturages: Covoiturage[],
        public covoituragesPassager: Covoiturage[],
        public photo: string
    ) {}
}