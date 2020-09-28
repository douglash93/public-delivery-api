export interface IUpdateProductDTO {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string;
    status: boolean;
}