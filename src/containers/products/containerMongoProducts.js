import config from '../../config.js'
import mongoose from 'mongoose'


const Schema = mongoose.Schema;
const model = mongoose.model;

class Product{
    constructor(schema,tableName){
        // database connection to mongoDB
        mongoose.connect(config.mongoose.database);
        mongoose.connection.on("open",()=>{
         console.log('database connection SUCCESS')
        })
        mongoose.connection.on("error",()=>{
        console.log('database connection ERROR')
        })
        //Note always use the world this for variable declared in the constructor since is require to use the value 
        //thorught the class
        this.productSchema=new Schema(schema)
        this.Product=model(tableName,this.productSchema);
    }
    async save (product){
        let p1=  new this.Product(product)
        let result=await p1.save()
        return result
    }
    async getById(id) {
        let productFound= await this.Product.findOne({_id:id})
        return productFound;
    }
    async updateById(id, name, price,description, url, stock) {
        try{
        let updatedProduct=await this.Product.findOneAndUpdate({_id:id},{name,price,description,url,stock})
        if(!updatedProduct){
            return "Product not found =("
        }
        return updatedProduct;
        }catch(err){
            console.log(err)
            return "Product not found =("
        }
        
    }
    async getAll() {
        let allProduct = await this.Product.find({})
        return allProduct;
    }
    async deleteByID(id) {
        try{
            let productDeleted = await this.Product.findByIdAndRemove({_id:id})
            if(!productDeleted){
                return "Product not found"
            }
            return productDeleted
        }catch(err){
            console.lo(err)
            return "Product not found"
        }
        
    }
    async deleteAll() {
        this.Product.deleteMany({})
        return 'All product has been successfully deleted !!!'
    }
}

export default  Product