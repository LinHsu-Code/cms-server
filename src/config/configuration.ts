export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    database: {
        // host: process.env.DATABASE_HOST,
        host: '127.0.0.1',
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    },
});
