import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import moment from 'moment'
import Document from '../../utils/fileMethods.js'
import { runInThisContext } from "vm"

const verifyExistence = file => file && file.length >= 0 ? true : false
const doc=new Document()

class Cart {
    constructor(name) {
        this.cart = []
        doc.setVariableName(name)
    }

    async createCart() {
        let cart = {
            id: uuidv4(),
            product: []
        }
        try {
            const file = await doc.readFileAsync()// string
            if (verifyExistence(file)) {
                const data = JSON.parse(file)
                data.push(cart)
                this.cart = data
                writeFileCartAsync(data)
                return data
            }
        } catch (e) {
            this.cart.push(cart)
            doc.writeFileAsync(this.cart)
            return cart.id
        }
    }
    async deleteCart() {
        this.cart = {}
        await doc.deleteFileAsync()
        return `The Elements has been deleted`
    }
    async showAllItems() {
        const file = await doc.readFileAsync()// string
        const data = JSON.parse(file)
        this.cart = data
        return data
    }
    async addItems(id, product) {
        const file = await doc.readFileAsync()// string
        const data = JSON.parse(file)
        console.log(data)
        for (let d of data) {
            if (d.id == id) {
                d.product.push(product)
                this.cart = data
                doc.writeFileAsync(data)
                return 'Item has been added succesfully'
            }
        }

    }
    async deleteItem(idCart, idProduct) {
        const file = await doc.readFileAsync()// string
        const data = JSON.parse(file)
        for (let d of data) {
            if (d.id == idCart) {
                let newArray=d.product.filter(p => p.id == idProduct)
                console.log(newArray)
                d.product=newArray
                doc.writeFileAsync(data)
                return `product has been deleted from the data base succesfully new Dataset: ${d.product}`;
            }
        }
    }
}

export default Cart 