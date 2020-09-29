import { DATE } from "sequelize";
import {
    Model,
    DataTypes,
    QueryTypes
  } from "sequelize";

import { sequelize } from "../config/database";
import { Cart } from "../entities/Cart";
import { CartProduct } from "../entities/CartProduct";
import { Product } from "../entities/Product";
import { CartModel } from "./CartModel";
import { ProductModel } from "./ProductModel";

class CartProductModel extends Model {
    id!: string;
    cart_id: number;
    user_id: number;
    product_id: number;
    price: number;
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cart',
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
    foreignKey: 'cart_id',
    as: 'cart'
});

CartProductModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    as: 'product'
});

async function add(cart: Cart): Promise<number> {
    const result = await CartProductModel.create(cart);
    return parseInt(result.id);
}

async function listByUser(user_id: number): Promise<CartProduct[]>{
    const carts = await CartProductModel.sequelize.query(`
        select 
            cp.cart_id, 
            cp.user_id, 
            cp.product_id, 
            cp.quantity,
            p.price,
            p.name
        from 
            cartproduct cp 
        inner join 
            product p on p.id = cp.product_id
        where
            cp.user_id = ${user_id}
        `, {
            type: QueryTypes.SELECT
        }
    );

    let results: CartProduct[];
    results = [];
    for(let i=0;i<carts.length;i++) {
        results.push(new CartProduct({
            cart_id: (carts[i] as any).cart_id,
            user_id: (carts[i] as any).user_id,
            product_id: (carts[i] as any).product_id,
            name: (carts[i] as any).name,
            quantity: (carts[i] as any).quantity,
            price: (carts[i] as any).price,
        }))
    }

    return results;
}

export { CartProductModel, add, listByUser }
