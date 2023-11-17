import { Utilisateur } from './Utilisateur';

export class Voiture {
    constructor(
        public id: number,
        public marque: string,
        public modele: string,
        public annee: number,
        public nombreDePlace: number,
        public consommation: number,
        public description: string,
        public photo: string,
        public utilisateur: Utilisateur
    ) {}
}