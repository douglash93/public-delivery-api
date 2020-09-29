
export class CartProduct {

    public readonly id: number;
    public cart_id?: number;
    public user_id?: number;
    public product_id: number;
    public name?: string;
    public quantity: number;
    public price?: number;

    constructor(props: Omit<CartProduct, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}