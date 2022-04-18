import admin from "firebase-admin"
import config from '../../config.js'
import ProductTemplate from '../../utils/productTemplate.js'
admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class Product {

    constructor(nombreColeccion) {
        // this is use to create a table or collection whatever the reference is
        this.query = db.collection(nombreColeccion)
    }
    async save (product){
        try{
        if(!product){
            return 'Theres no information in the call please put the correct info'
        }
        let savedProduct= await this.query.add(product)
        return {product,id:savedProduct.id}
        }catch(err){
            console.log(er)
            return "something went wrong =("
        }
        
    }
    async getById(id) {
       try{
        let productList = await this.query.get()
        let productFound;
        productList.forEach(doc=>{
            if(doc.id==id){
                const product = new ProductTemplate(
                doc.id,
                doc.data().name,
                doc.data().price,
                doc.data().description,
                doc.data().url,
                doc.data().stock
            )
            productFound=product
        }else{productFound=""}
        })
        if(productFound!="")return productFound
        return "product not found"
       }catch(err){
           console.log(err)
            return "there is something wrong =("
       }
    }
    async updateById(id, name, price,description, url, stock) {
        try{
            let updatedProduct= await this.query.doc(id).update({name,price,description,url,stock})
            if(!updatedProduct){
                return "No id matches has been found"
            }
            return {msg:"success"}
        }catch(err){
            console.log(err)
            return "there is something wrong =("
        }
        
    }
    async getAll() {
        try{
            let data = await this.query.get()
            const productArray=[]
            if(data.empty){
                return "no product founds yet"
            }
            data.forEach(doc=>{
                const product = new ProductTemplate(
                    doc.id,
                    doc.data().name,
                    doc.data().price,
                    doc.data().description,
                    doc.data().url,
                    doc.data().stock
                )
                productArray.push(product)
            })
            return productArray;
           }catch(err){
               console.log(err)
                return "there is something wrong =("
           }
    }
    async deleteByID(id) {
        try{
            let deletedProduct= await this.query.doc(id).delete()
            if(!deletedProduct){
                return "No id matches has been found"
            }
            return deletedProduct
        }catch(err){
            return "there is something wrong =("
        } 
    }
    async deleteAll() {
        try{
            let deletedProduct= await this.query.get()
            if(!deletedProduct){
                return "No product found"
            }
            deletedProduct.forEach(element =>element.ref.delete())
            return {msg:"all data has been successfully deleted"}
        }catch(err){
            return "there is something wrong =("
        } 
    }
}

export default Product