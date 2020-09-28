import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('delivery_api', 'root', '', {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    }
});