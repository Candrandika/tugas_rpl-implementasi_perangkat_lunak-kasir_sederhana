import type { Product } from "./Product";

export class ListProducts {
    private products: Product[] = [];
    
    public addProduct(product: Product): void
    {
        this.products.push(product);
    }
        
    public findProductByNameOrCode(search: string): Product|null
    {
        const foundProduct = this.products.find(product => {
            if (product.getName() === search || product.getCode() === search) return product;
        })
        return foundProduct || null;
    }
}