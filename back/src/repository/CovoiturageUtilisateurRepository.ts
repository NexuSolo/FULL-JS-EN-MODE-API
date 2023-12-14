import { Pool, QueryResult } from 'pg';

let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class CovoiturageUtilisateurRepository {
    async getCovoiturageUtilisateur(): Promise<any[]> {
        console.log("SELECT * FROM covoiturage_utilisateurs");
        const result: QueryResult = await pool.query('SELECT * FROM covoiturage_utilisateurs'); 
        return result.rows;
    }
    
    async abonnement(auth_id: number, id: number){
        console.log("INSERT INTO covoiturage_utilisateurs (covoiturage_id, utilisateur_id) VALUES (" + id + ", " + auth_id + ")");
        const insertQuery = {
            text: 'INSERT INTO covoiturage_utilisateurs (covoiturage_id, utilisateur_id) VALUES ($1, $2)',
            values: [id, auth_id],
        };
        return (await pool.query(insertQuery)).rows[0];
    }

    async desabonnement(auth_id: number, id: number){
        console.log("DELETE FROM covoiturage_utilisateurs WHERE covoiturage_id = " + id + " AND utilisateur_id = " + auth_id);
        const insertQuery = {
            text: 'DELETE FROM covoiturage_utilisateurs WHERE utilisateur_id = $1 AND covoiturage_id = $2',
            values: [auth_id, id]
        };
        await pool.query(insertQuery);
    }

    async checkPassengerCourse(covoiturage_id: number, utilisateur_id: number){
        console.log("SELECT * FROM covoiturage_utilisateurs WHERE covoiturage_id = " + covoiturage_id + " AND utilisateur_id = " + utilisateur_id);
        const insertQuery = {
            text: 'SELECT * FROM covoiturage_utilisateurs WHERE covoiturage_id = $1 AND utilisateur_id = $2',
            values: [covoiturage_id, utilisateur_id]
        };
        const result: QueryResult = await pool.query(insertQuery);
        return result.rows;
    }

    async getPassengers(covoiturage_id: number){
        console.log("SELECT * FROM covoiturage_utilisateurs WHERE covoiturage_id = " + covoiturage_id);
        const insertQuery = {
            text: 'SELECT * FROM covoiturage_utilisateurs WHERE covoiturage_id = $1',
            values: [covoiturage_id]
        };
        const result: QueryResult = await pool.query(insertQuery);
        return result.rows;
    }

    async getAvailableSeats(id: number){
        console.log("SELECT nombredeplace FROM covoiturage WHERE id = " + id);
        const insertQuery = {
            text: 'SELECT nombredeplace FROM covoiturage WHERE id = $1',
            values: [id]
        };
        const takenSeats = {
            text: 'SELECT COUNT(*) FROM covoiturage_utilisateurs WHERE covoiturage_id = $1',
            values: [id]
        };
        const result: QueryResult = await pool.query(insertQuery);
        const result2: QueryResult = await pool.query(takenSeats);
        return result.rows[0] - result2.rows[0] + 1;
    }
    
}