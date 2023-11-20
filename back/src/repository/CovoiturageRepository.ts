import { Pool, QueryResult } from 'pg';
let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'covoiturage',
    password: 'root',
    port: 4545
});

export class CovoiturageRepository {
    async getCovoiturage(id : number): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM covoiturage WHERE id =' + id);
        return result.rows;
    }
}