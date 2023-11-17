import { Utilisateur } from "./Utilisateur";
import { Voiture } from "./Voiture";

export class Covoiturage {
    constructor(
        public id: number,
        public localisationDepart: string,
        public localisationArrive: string,
        public dateDepart: Date,
        public dateArrivee: Date,
        public prix: number,
        public distance: number,
        public conducteur: Utilisateur,
        public passagers: Utilisateur[],
        public voiture: Voiture,
        public note: number,
    ) {}
}