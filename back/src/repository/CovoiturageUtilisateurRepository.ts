import { Pool, QueryResult } from 'pg';
let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'covoiturage',
    password: 'root',
    port: 4545
});

export class CovoiturageUtilisateurRepository {
    async getCovoiturageUtilisateur(): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM covoiturage_utilisateurs'); 
        return result.rows;
    }    
}