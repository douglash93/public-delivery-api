export interface IAddOrderDTO {
    id?: number;
    user_id: number;
    payment_type: string;
    address: string;
    status: string;
    price?: number;
}