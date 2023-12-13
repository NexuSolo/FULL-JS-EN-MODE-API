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
        const result: QueryResult = await pool.query('SELECT * FROM covoiturage_utilisateurs'); 
        return result.rows;
    }
    
    async abonnement(auth_id: number, id: number){
        const insertQuery = {
            text: 'INSERT INTO covoiturage_utilisateurs (covoiturage_id, utilisateur_id) VALUES ($1, $2)',
            values: [id, auth_id],
        };
        await pool.query(insertQuery);
    }

    async desabonnement(auth_id: number, id: number){
        const insertQuery = {
            text: 'DELETE FROM covoiturage_utlisateur WHERE utilisateur_id = $1',
            values: [id, auth_id],
        };
        await pool.query(insertQuery);
    }

    async checkPassengerCourse(auth_id: number, id: number){
        const insertQuery = {
            text: 'SELECT * FROM covoiturage_utlisateur WHERE utilisateur_id = $1 AND covoiturage_id = $2',
            values: [id, auth_id],
        };
        const result: QueryResult = await pool.query(insertQuery);
        return result.rows;
    }

    async getAvailableSeats(id: number){
        const insertQuery = {
            text: 'SELECT nbPlace FROM covoiturage WHERE id = $1',
            values: [id],
        };
        const takenSeats = {
            text: 'SELECT COUNT(*) FROM covoiturage_utlisateur WHERE covoiturage_id = $1',
            values: [id],
        };
        const result: QueryResult = await pool.query(insertQuery);
        const result2: QueryResult = await pool.query(takenSeats);
        return result.rows[0] - result2.rows[0];
    }
}