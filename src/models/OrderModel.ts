import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
  } from "sequelize";

import { sequelize } from "../config/database";
import { Cart } from "../entities/Cart";

class OrderModel extends Model {
    id!: number;
    order_product_id: number;
    payment_type: string;
    address: string;
    price: number;
    status: string;
    created_at!: Date;
    updated_at: Date;
}

OrderModel.init(
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
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        status: {
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
        tableName: 'order'
    }
);

async function add(cart: Cart): Promise<number> {
    const result = await OrderModel.create(cart);
    return result.id;
}

export { OrderModel, add }
