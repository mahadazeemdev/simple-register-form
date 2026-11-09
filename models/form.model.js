import pool from '../config/database.js';

async function createFormTable() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS form_table(
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL
        );    
    `);
}

export default createFormTable;