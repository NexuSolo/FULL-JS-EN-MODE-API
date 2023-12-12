import { Covoiturage } from "./Covoiturage";
import { Utilisateur } from "./Utilisateur";

export class Note {
    constructor(
        public user: Utilisateur,
        public note: number,
        public covoiturage : Covoiturage
    ) {}
}