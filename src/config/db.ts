import { createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Hme.0211',
    database: 'pharmaceutical_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
