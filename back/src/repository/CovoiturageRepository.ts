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

    async postCovoiturage(depart: string, arrive: string, datedepart: Date, datearrivee: Date, 
        prix: number, distance: number ,marque: string, modele: string, 
        nbPlace:number, description?:string, photo?:string) {
        const insertQuery = {
            text: 'INSERT INTO covoiturage (localisationdepart, localisationarrive, datedepart, datearrivee, prix, distance, etat, marque, modele, nbPlace, description, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
            values: [depart, arrive, datedepart, datearrivee, prix, distance, 1, marque, modele, nbPlace, description, photo],
        };
        return await pool.query(insertQuery).then((res) => console.log(res.rows[0]));
    }

    async deleteCovoiturage(id: number) {
        const insertQuery = {
            text: 'DELETE FROM covoiturage WHERE id = $1',
            values: [id],
        };
        await pool.query(insertQuery);
    }

    async checkState(id: number) {
        const insertQuery = {
            text: 'SELECT FROM covoiturage WHERE id = $1 AND state = 3',
            values: [id],
        };
        const res = await pool.query(insertQuery);
        if(res.rows.length === 0){
            return false;
        }else{
            return true;
        }
    }

    async getAllCovoiturages() {
        const result: QueryResult = await pool.query('SELECT * FROM covoiturage WHERE state = 1');
        return result.rows;
    }
}