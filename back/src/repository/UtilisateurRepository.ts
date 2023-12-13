import { Pool, QueryResult } from 'pg';

let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class UtilisateurRepository {

    async getUser(id: number) {
        console.log("SELECT * FROM utilisateur WHERE id = " + id);
        const result: QueryResult = await pool.query('SELECT * FROM utilisateur WHERE id = ' + id);
        if(result.rows.length === 0){
            return null;
        }
        return result.rows[0];
    }

    async register(name: string, surname: string, password: string, email: string){
        console.log("INSERT INTO utilisateur (nom, prenom, password, email) VALUES (" + name + ", " + surname + ", " + password + ", " + email + ")");
        const insertQuery = {
            text: 'INSERT INTO utilisateur (nom, prenom, password, email) VALUES ($1, $2, $3, $4)',
            values: [name, surname, password, email],
        };
        return (await pool.query(insertQuery)).rows[0];
    }

    async deleteUser(authorization: string, id: number) {
        console.log("DELETE FROM utilisateur WHERE id = " + id);
        const insertQuery = {
            text: 'DELETE FROM utilisateur WHERE id = $1',
            values: [id],
        };
        return await pool.query(insertQuery);
    }

    async patchUser(id: number, name?: string, email?: string, photo?: string) {
        console.log("UPDATE utilisateur SET nom = " + name + ", email = " + email + ", photo = " + photo + " WHERE id = " + id);
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
    
        return (await pool.query(updateQuery)).rows[0];
    }

    async getUtilisateurByEmail(email: string) {
        console.log("SELECT * FROM utilisateur WHERE email = " + email);
        const result: QueryResult = await pool.query('SELECT * FROM utilisateur WHERE email = \'' + email + '\'');
        if(result.rows.length === 0){
            return null;
        }
        return result.rows[0];
    }

    async updatePasswordUtilisateur(id: number, password: string) {
        console.log("UPDATE utilisateur SET password = " + password + " WHERE id = " + id);
        const insertQuery = {
            text: 'UPDATE utilisateur SET password = $2 WHERE id = $1',
            values: [id, password],
        };
        return (await pool.query(insertQuery)).rows[0];
    }

}