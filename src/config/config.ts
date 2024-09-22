import dotenv from 'dotenv';

dotenv.config();

export const DEVELOP = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

const HOSTNAME = process.env.HOSTNAME || 'local';
const PORT = process.env.PORT ? Number(process.env.PORT) || 3000;


export const SERVER = {
    HOSTNAME,
    PORT
}