import { createConnection } from 'typeorm';

createConnection().then(() => console.log("[databases] -> Successfully connected with database"));