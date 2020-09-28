export class Product {

    public readonly id: number;
    public name: string;
    public description: string;
    public price: number;
    public image: string;
    public tags: string;
    public status: boolean;

    constructor(props: Omit<Product, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}