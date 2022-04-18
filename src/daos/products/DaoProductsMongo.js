import Product from '../../containers/products/containerMongoProducts.js'

class DaoProductsMongo extends Product {
    constructor(){
        super({
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            description:{
                type:String,
                maxlength:150
            },
            url:String,
            stock:Number
        },'product')
    }
    
}

export default DaoProductsMongo;