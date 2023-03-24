const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME || 'desafio_kanbam_dev',
    process.env.DB_USER || 'kanbam',
    process.env.DB_PASSWORD || 'someStrongPass',
    {
        dialect: process.env.DB_DIALECT || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432',
        logging: process.env.DB_LOGS === 'true',
    }
)

module.exports = sequelize
