import { Pool, QueryResult } from 'pg';
let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'covoiturage',
    password: 'root',
    port: 4545
});

export class UtilisateurRepository {
    async getUsers(): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM utilisateur');
        return result.rows;
    }

    async getUser(id: number): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM utilisateur WHERE id = ' + id);
        return result.rows;
    }

    async postUser(name: string, surname: string, password: string, email: string) {

        const insertQuery = {
            text: 'INSERT INTO utilisateur (nom, prenom, password, email) VALUES ($1, $2, $3, $4)',
            values: [name, surname, password, email],
        };
        const res: QueryResult = await pool.query(insertQuery);
        console.log(res.rows);
    }

    async deleteUser(id: number) {
        const insertQuery = {
            text: 'DELETE FROM utilisateur (id) VALUES ($1)',
            values: [id],
        };
        await pool.query(insertQuery);
    }


}