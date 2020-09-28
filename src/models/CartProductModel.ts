import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
  } from "sequelize";

import { sequelize } from "../config/database";
import { Cart } from "../entities/Cart";
import { CartModel } from "./CartModel";
import { ProductModel } from "./ProductModel";

class CartProductModel extends Model {
    id!: string;
    cart_id: number;
    product_id: number;
    quantity: number;
    created_at!: Date;
    updated_at: Date;
}

CartProductModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
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
        tableName: 'cartProduct'
    }
);

CartProductModel.belongsTo(CartModel, {
    foreignKey: 'card_id'
});

CartProductModel.belongsTo(ProductModel, {
    foreignKey: 'product_id'
});

async function add(cart: Cart): Promise<number> {
    const result = await CartProductModel.create(cart);
    return parseInt(result.id);
}

export { CartProductModel, add }
