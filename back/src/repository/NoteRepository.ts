import { Pool, QueryResult } from 'pg';

require('dotenv').config();

let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class NoteRepository {
    async noteCovoiturage(id: number, note: number) {
        const insertQuery = {
            text: 'INSERT INTO covoiturage (valeur, utilisateur_id) VALUES ($1, $2)',
            values: [note, id],
        };
        await pool.query(insertQuery);
    }

    async checkAlreadyRated(id: number, id_covoiturage: number){
        const insertQuery = {
            text: 'SELECT * FROM NoteUtilisateur WHERE rater = $1 AND covoiturage_id = $2',
            values: [id, id_covoiturage],
        };
        const result: QueryResult = await pool.query(insertQuery);
        return result.rows;
    }

    async getAllNotes(id: number){
        const insertQuery = {
            text: 'SELECT NoteUtilisateur.valeur FROM NoteUtilisateur JOIN Covoiturage ON NoteUtilisateur.covoiturage_id = Covoiturage.id JOIN Utilisateur ON NoteUtilisateur.id_rater = Utilisateur.id WHERE Utilisateur.id = $1',
            values: [id],
        };
        return await pool.query(insertQuery);
    }
}