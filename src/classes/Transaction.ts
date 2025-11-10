import type { ListProducts } from "./ListProduct";
import { TransactionItem } from "./TransactionItem";

export class Transaction {
    private items: TransactionItem[] = [];

    public addItem(input: string, products: ListProducts): void
    {
        const product = products.findProductByNameOrCode(input);

        if(product === null) alert('Produk tidak ditemukan')
        else if(product?.getStock() === 0) alert('Stok produk habis')
        else if(this.findItem(product.getCode()) !== null) this.findItem(product.getCode())?.addQty(1)
        else {
            const item = new TransactionItem(product);
            this.items.push(item);
        }
    }

    public getTotalPrice(): number
    {
        let total = 0;
        this.items.forEach(item => {
            total += item.getSubTotal();
        })
        return total;
    }

    public findItem(code: string): TransactionItem|null
    {
        const foundProduct = this.items.find(item => {
            if (item.getProduct().getCode() === code) return item;
        })
        return foundProduct || null;
    }

    public getItems(): TransactionItem[]
    {
        return this.items;
    }
}