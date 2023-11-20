import { Pool, QueryResult } from 'pg';
let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export class NoteRepository {
    async postNote(id: number, note: number) {
        const insertQuery = {
            text: 'INSERT INTO covoiturage (valeur, utilisateur_id) VALUES ($1, $2)',
            values: [note, id],
        };
        await pool.query(insertQuery);
    }
}