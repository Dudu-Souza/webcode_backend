import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'webcode_development',
    username: 'webcode',
    password: 'webcode',
    define: {
        underscored: true
    }
})