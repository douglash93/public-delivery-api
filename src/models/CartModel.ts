import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
  } from "sequelize";

import { sequelize } from "../config/database";
import { Cart } from "../entities/Cart";

class CartModel extends Model {
    id!: string;
    created_at!: Date;
    updated_at: Date;
}

CartModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
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
        tableName: 'cart'
    }
);

async function add(cart: Cart): Promise<number> {
    const result = await CartModel.create(cart);
    return parseInt(result.id);
}

async function getExistsCart(): Promise<number> {
    const result = await CartModel.findOne();
    if(result) {
        return parseInt(result.id);
    }
    return null;
}

export { CartModel, add, getExistsCart }
