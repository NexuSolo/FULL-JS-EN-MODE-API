import { Pool, QueryResult } from 'pg';
import { Utilisateur } from '../model/Utilisateur';

let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class UtilisateurRepository {

    async getUser(id: number): Promise<any[]> {
        const result: QueryResult = await pool.query('SELECT * FROM utilisateur WHERE id = ' + id);
        return result.rows;
    }

    async register(name: string, surname: string, password: string, email: string){
        const insertQuery = {
            text: 'INSERT INTO utilisateur (nom, prenom, password, email) VALUES ($1, $2, $3, $4)',
            values: [name, surname, password, email],
        };
        const res: QueryResult = await pool.query(insertQuery);
        return res.rows;
    }

    async deleteUser(authorization: string, id: number) {
        const insertQuery = {
            text: 'DELETE FROM utilisateur WHERE id = $1',
            values: [id],
        };
        await pool.query(insertQuery);
    }

    async patchUser(id: number, name?: string, email?: string, photo?: string) {
        const setValues: string[] = [];
        const queryValues: (string | number)[] = [id];
    
        if (name !== undefined) {
          setValues.push(`nom = $${setValues.length + 2}`);
          queryValues.push(name);
        }
    
        if (email !== undefined) {
          setValues.push(`email = $${setValues.length + 2}`);
          queryValues.push(email);
        }
    
        if (photo !== undefined) {
          setValues.push(`photo = $${setValues.length + 2}`);
          queryValues.push(photo);
        }
    
        if (setValues.length === 0) {
          return null;
        }
    
        const updateQuery = {
          text: `UPDATE utilisateur SET ${setValues.join(', ')} WHERE id = $1 RETURNING *`,
          values: queryValues,
        };
    
        await pool.query(updateQuery);

    }

    async getUtilisateurByEmail(email: string) : Promise<Utilisateur[]> {
        const result: QueryResult = await pool.query('SELECT * FROM utilisateur WHERE email = \'' + email + '\'');
        return result.rows;
    }

    async updatePasswordUtilisateur(id: number, password: string) {
        const insertQuery = {
            text: 'UPDATE utilisateur SET password = $2 WHERE id = $1',
            values: [id, password],
        };
        await pool.query(insertQuery);
    }
}