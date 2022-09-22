import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("students_db", "root", "@O3*#eXtfE,@Re7>", {
    dialect: "mysql",
    host: "34.171.91.150"
});