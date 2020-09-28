import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
  } from "sequelize";

import { sequelize } from "../config/database";

class ProductModel extends Model {
    id!: string;
    name!: string;
    description: string;
    price!: string;
    image: string;
    tags: string;
    status: boolean;
    created_at!: Date;
    updated_at: Date;
}

ProductModel.init(
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
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
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
        tableName: 'product'
    }
);

async function findAll() {
    return await ProductModel.findAll();
}

export { ProductModel, findAll }
