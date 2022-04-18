import Product from '../../containers/products/containerProducts.js'

class DaoProductsFiles extends Product {
    constructor(){
        super('products.json')
    }
}

export default DaoProductsFiles;