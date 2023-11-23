import { Utilisateur } from './Utilisateur';

export class Voiture {
    constructor(
        public marque: string,
        public modele: string,
        public nombreDePlace: number,
        public description: string,
        public photo: string,
    ) {}
}