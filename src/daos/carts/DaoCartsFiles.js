import Cart from '../../containers/carts/fileTools.js'

class DaoCartFiles extends Cart {
    constructor(){
        super('carts.json')
    }
}

export default DaoCartFiles;