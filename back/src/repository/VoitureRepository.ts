import { Pool, QueryResult } from 'pg';
let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'covoiturage',
    password: 'root',
    port: 4545
});

export class VoitureRepository {
    async getVoiture(): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM voiture');
        return result.rows;
    }    
}