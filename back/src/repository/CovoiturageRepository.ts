import { Pool, QueryResult } from 'pg';
let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class CovoiturageRepository {
    async getCovoiturage(id : number): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM covoiturage WHERE id =' + id);
        return result.rows;
    }
}