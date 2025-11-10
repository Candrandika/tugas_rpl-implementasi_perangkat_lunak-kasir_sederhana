export class Product {
    private code: string;
    private name: string;
    private price: number;
    private stock: number;

    constructor(code: string, name: string, price: number, stock: number) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public getCode(): string { return this.code }
    public getName(): string { return this.name }
    public getPrice(): number { return this.price }
    public getStock(): number { return this.stock }

    public setName(name: string): void { this.name = name }
    public setPrice(price: number): void { this.price = price }
    public setStock(stock: number): void { this.stock = stock }

    
}