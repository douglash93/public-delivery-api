export class Order {
    id?: number;
    user_id: number;
    payment_type: string;
    address: string;
    status: string;
    price?: number;

    constructor(props: Omit<Order, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}