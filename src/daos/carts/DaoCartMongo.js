import Cart from '../../containers/carts/cartsContainerMongo.js'

class DaoCartsMongo extends Cart {
    constructor(){
        super({
           nameRef1:'product',
           nameRef2:'user'
        },'cart')
    }
    
}

export default DaoCartsMongo;