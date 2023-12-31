

// pages/api/showSchools.js

import { query } from '../../utils/db';

export default async function handler(_, res) {
  try {
    const results = await query('SELECT id, name, address, city, image FROM schools');
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
