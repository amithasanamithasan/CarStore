import dotenv from 'dotenv';
import path from 'path';

// Correct path joining
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
