// Environment variables imported from .env file
import dotenv from 'dotenv';
dotenv.config();

export const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    NODE_PORT: process.env.NODE_PORT,
    DOMAIN: process.env.DOMAIN,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
};