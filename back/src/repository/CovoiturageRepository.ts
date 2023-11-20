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

    async postCovoiturage(depart: string, arrive: string, datedepart: Date, datearrivee: Date, prix: number, distance: number){
        const insertQuery = {
            text: 'INSERT INTO covoiturage (localisationdepart, localisationarrive, datedepart, datearrivee, prix, distance) VALUES ($1, $2, $3, $4, $5, $6)',
            values: [depart, arrive, datedepart, datearrivee, prix, distance],
        };
        await pool.query(insertQuery);
    }

    async deleteCovoiturage(id: number) {
        const insertQuery = {
            text: 'DELETE FROM covoiturage WHERE id = $1',
            values: [id],
        };
        await pool.query(insertQuery);
    }

}