class ProductManager {
    constructor() { 
        this.products = [];
        this.nextId = 1;
    }
    
    addProduct (title, description, price, thubnail, code, stock) {
        if (!title || !description || !price || !thubnail || !code || !code) {
            console.log("Todos los campos son obligatorios");
            return;
        } 
        const productoRepetido = this.products.find(product => product.code === code);
        if (productoRepetido) {
            console.log("El producto ya existe");
            return
        }
        const product = {
            id: this.nextId,
            title,
            description,
            price,
            thubnail,
            code,
            stock
        };
        this.products.push(product);
        this.nextId++
    }
    
    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product =>product.id === id)
        if (product) {
            return product
        } else {
            console.log("Not found");
        }
    }
}

// Ejemplis

const productManager = new ProductManager();

productManager.addProduct("Auto", "Tiene 4 ruedas", 1000, "thumbnail1.jpg", "001", 3);
productManager.addProduct("Moto", "Tiene 2 ruedas", 500, "thumbnail2.jpg", "002", 5);
productManager.addProduct("Moto", "Tambien tiene 2 ruedas", 30, "thumbnail3.jpg", "002", 6); 

const allProducts = productManager.getProducts();
console.log(allProducts);

const product = productManager.getProductById(2);
console.log(product);

const nonExistingProduct = productManager.getProductById(4); 
