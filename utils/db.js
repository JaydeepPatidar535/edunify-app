// utils/db.js

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Update with your actual database user
  password: 'Ja@211100', // Update with your actual database password
  database: 'edunify',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw error; // Rethrow the error to be caught in the calling function
  } finally {
    connection.release();
  }
};

export default pool;
