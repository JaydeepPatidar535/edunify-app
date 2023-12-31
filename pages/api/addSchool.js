// pages/api/addSchool.js

import { query } from '../../utils/db';

export default async function handler(req, res) {
  const { name, address, city, state, contact, image, email_id } = req.body;

  try {
    // Ensure that required fields are present
    if (!name || !address || !city || !state || !contact || !image || !email_id) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const result = await query(
      'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, address, city, state, contact, image, email_id]
    );

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error adding school:', error);

    // Log the MySQL error message and stack trace
    console.error('MySQL Error:', error.sqlMessage);
    console.error('MySQL Stack:', error.stack);

    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
