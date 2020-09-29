import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
  } from "sequelize";

import { sequelize } from "../config/database";

class UserModel extends Model {
    id!: number;
    name: string;
    created_at!: Date;
    updated_at: Date;
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new DATE()
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize, 
        tableName: 'user'
    }
);

export { UserModel }
