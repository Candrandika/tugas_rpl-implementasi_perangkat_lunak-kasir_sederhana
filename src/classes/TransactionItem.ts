import type { Product } from "./Product";

export class TransactionItem {
    private product: Product;
    private qty: number = 1;

    constructor(product: Product)
    {
        this.product = product;
    }

    public addQty(qty: number)
    {
        this.qty += qty;
    }

    public getQty(): number
    {
        return this.qty;
    }
    public getSubTotal(): number
    {
        return this.product.getPrice() * this.qty;
    }

    public getProduct(): Product
    {
        return this.product;
    }
}