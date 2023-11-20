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
    
    async abonnement(id: number){
        const token = 1;
        const insertQuery = {
            text: 'INSERT INTO covoiturage_utilisateur (covoiturage_id, utilisateur_id) VALUES ($1, $2)',
            values: [id, token],
        };
        await pool.query(insertQuery);
    }

    async desabonnement(id: number){
        const token = 1;
        const insertQuery = {
            text: 'DELETE FROM covoiturage_utlisateur WHERE utilisateur_id = $1',
            values: [id, token],
        };
        await pool.query(insertQuery);
    }
}