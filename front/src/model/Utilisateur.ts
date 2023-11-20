export class Utilisateur {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public note: number[],
        public photo: string
    ) {}
}