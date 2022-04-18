import admin from "firebase-admin"
import config from '../../config.js'
import convertInstanceToLiteralObject from "../../utils/modifiers.js"

import CartsTemplate from "../../utils/cartsTemplate.js";

const db = admin.firestore();

class Cart {

    constructor(nombreColeccion) {
        this.query = db.collection(nombreColeccion)
    }

    async createCart() {
        try{
            let savedCart= await this.query.add({products:{}})
            return {id:savedCart.id}
            }catch(err){
                console.log(err)
                return "something went wrong =("
            }
    }
    async deleteCart(cartId) {
        
    }
    async showAllItems() {
        let carts=await this.query.get();
        let cartsArray=[]
        carts.forEach(doc=>{
                const cart = new CartsTemplate(
                doc.id,
                doc.data().products
            )
            cartsArray.push(cart)
        })
        return cartsArray;
    }
    async addItems(cartId, product) {
        console.log(product.id)
        let json={
            id:product.id,
            name: product.name,
            price: product.price,
            description: product.description
        }
        let newProduct=await this.query.doc(cartId).collection('products').add(json)
        return {msg:"product has been sucessfulle added",data:json}
    }
    async deleteItem(idCart, product) {
        
    }
}

export default Cart