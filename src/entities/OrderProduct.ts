export class OrderProduct {
    id?: number;
    user_id: number;
    price: number;
    product_id: number;
    name: string;
    quantity: number; 

    constructor(props: Omit<OrderProduct, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}