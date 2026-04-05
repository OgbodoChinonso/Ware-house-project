class Product {
    static totalProductsCreated = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.stockLevel = 0;

        Product.totalProductsCreated++;
    }
    addStock(amount) {
        this.stockLevel += amount;
        console.log(`Added ${amount}. New total: ${this.stockLevel}`);
    }
    removeStock(amount) {
        if (amount <= this.stockLevel) {
            this.stockLevel -= amount;
            console.log(`Removed ${amount}. Remaining: ${this.stockLevel}`);
        } else {
            console.log("Error: Not enough stock!");
        }
    }
}

const p1 = new Product("Laptop", 1200.0);
p1.addStock(10);
p1.removeStock(3);

console.log(`Total product types in system: ${Product.totalProductsCreated}`);

