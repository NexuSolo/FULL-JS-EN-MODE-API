import { Covoiturage } from "./Covoiturage";
import { Voiture } from "./Voiture";

export class Utilisateur {
    constructor(
        public nom: string,
        public prenom: string,
        public email: string,
        public password: string,
        public id?: Number,
        public photo?: String,
        public note?: Number,
        public voiture?: Voiture,
        public covoiturages?: Covoiturage[],
        public covoituragesPassager?: Covoiturage[]
    ) {}
}