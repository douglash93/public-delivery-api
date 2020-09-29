export interface IAddProductToCartDTO {
    id?: number;
    cart_id?: number;
    user_id: number;
    product_id: number;
    quantity: number;
}