import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
  } from "sequelize";

import { sequelize } from "../config/database";
import { Cart } from "../entities/Cart";

class OrderProductModel extends Model {
    id!: number;
    product_id: number;
    name: string;
    price: number;
    quantity: number; 
    created_at!: Date;
    updated_at: Date;
}

OrderProductModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
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
        tableName: 'orderProduct'
    }
);

async function add(cart: Cart): Promise<number> {
    const result = await OrderProductModel.create(cart);
    return result.id;
}

export { OrderProductModel, add }
