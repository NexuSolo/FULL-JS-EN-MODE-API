import { Pool, QueryResult } from 'pg';

let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class NoteRepository {

    //get moyenne des notes d'un utilisateur
    async getNoteUtilisateur(covoiturage_ids: number[]) {
        console.log("SELECT AVG(valeur) FROM noteutilisateur WHERE covoiturage_id IN (" + covoiturage_ids + ")");
        const getQuery = {
            text: 'SELECT AVG(valeur) FROM noteutilisateur WHERE covoiturage_id IN ($2)',
            values: [covoiturage_ids]
        };
        const result: QueryResult = await pool.query(getQuery);
        if(result.rows.length === 0) {
            return null;
        }
        return result.rows[0];
    }

    //get note d'un covoiturage
    async getNoteCovoiturage(covoiturage_id: number, utilisateur_id: number) { 
        console.log("SELECT * FROM noteutilisateur WHERE covoiturage_id = " + covoiturage_id + " AND id_rater = " + utilisateur_id);
        const getQuery = {
            text: 'SELECT * FROM noteutilisateur WHERE covoiturage_id = $1 AND id_rater = $2',
            values: [covoiturage_id, utilisateur_id]
        };
        const result: QueryResult = await pool.query(getQuery);
        if(result.rows.length === 0) {
            return null;
        }
        return result.rows[0];
    }
    //delete note d'un utilisateur pour un covoiturage
    private async deleteNoteCovoiturage(covoiturage_id: number, utilisateur_id: number) {
        console.log("DELETE FROM noteutilisateur WHERE covoiturage_id = " + covoiturage_id + " AND id_rater = " + utilisateur_id);
        const insertQuery = {
            text: 'DELETE FROM noteutilisateur WHERE covoiturage_id = $1 AND id_rater = $2',
            values: [covoiturage_id, utilisateur_id],
        };
        return await pool.query(insertQuery);
    }
    
    //post note d'un utilisateur pour un covoiturage et la supprimer si elle existe deja
    async postNoteCovoiturage(covoiturage_id: number, utilisateur_id: number, note: number) {
        this.deleteNoteCovoiturage(covoiturage_id, utilisateur_id);
        console.log("INSERT INTO noteutilisateur (covoiturage_id, id_rater, valeur) VALUES (" + covoiturage_id + ", " + utilisateur_id + ", " + note + ")");
        const insertQuery = {
            text: 'INSERT INTO noteutilisateur (covoiturage_id, id_rater, valeur) VALUES ($1, $2, $3)',
            values: [covoiturage_id, utilisateur_id, note],
        };
        return await pool.query(insertQuery);
    }

}