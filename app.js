class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      const codeExists = this.products.some(product => product.code === code);
      if (codeExists) {
        console.error("El código ya está en uso para otro producto.");
        return;
      }
  
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const foundProduct = this.products.find(product => product.code === id);
      if (foundProduct) {
        return foundProduct;
      } else {
        console.error("Not found");
      }
    }
  }
  

  
  const manager = new ProductManager();
  
  manager.addProduct(
    'Pantalón',
    'Pantalón de cuero',
    '$300',
    'pantalon.png',
    1000,
    10
  );
  
  const allProducts = manager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const product = manager.getProductById(1234);
  if (product) {
    console.log("Producto encontrado:", product);
  }
  