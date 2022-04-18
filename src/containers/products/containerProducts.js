import fs from "fs"
import path  from "path"
import { v4 as uuidv4 }  from "uuid"
import moment  from 'moment'
import db from '../../config.js'
import Document from "../../utils/fileMethods.js"
const doc=new Document()
const verifyExistence = file => file && file.length >= 0 ? true : false
class Product {
    constructor(name) {
        this.pr = [];
        doc.setVariableName(name)
    }

    async save(product) {
        try {
            let fileExits = await doc.readFileAsync(); //String
            if (verifyExistence(fileExits)) {
                let dataFile = JSON.parse(fileExits);
                product.id = uuidv4()
                product.timestmap = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
                dataFile.push(product);
                this.pr = dataFile;
                doc.writeFileAsync(this.pr,);
                return product.id
            }
        } catch (e) {
            product.id = uuidv4()
            product.timestmap = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
            this.pr.push(product)
            doc.writeFileAsync(this.pr)
            return product.id
        }
    }

    async getById(id) {
        let fileExits = await doc.readFileAsync(); // tipo de dato string
        if (verifyExistence(fileExits)) {  
            let dataFile = JSON.parse(fileExits);
            console.log(dataFile)
            for (let d of dataFile) {
                if (d.id === id) {
                    return d;
                }
            }
        }
        return null

    }
    async updateById(id, name, description, url, price, stock) {
        let fileExits = await doc.readFileAsync(); // tipo de dato string
        if (verifyExistence(fileExits)) {
            let dataFile = JSON.parse(fileExits); // type object
            for (let d of dataFile) {
                if (d.id === id) {
                    d.name = name
                    d.description = description
                    d.url = url
                    d.price = price
                    d.stock = stock
                    this.pr = dataFile
                    doc.writeFileAsync(dataFile)
                    return d;
                }
            }

        }
        return null

    }
    async getAll() {
        let fileExits = await doc.readFileAsync(); // tipo de dato string
        if (verifyExistence(fileExits)) {
            let dataFile = JSON.parse(fileExits);
            return dataFile
        }
        throw " get-All No se encontro archivo"
    }

    async deleteByID(id) {
        let fileExits = await doc.readFileAsync(); // tipo de dato string
        if (verifyExistence(fileExits)) {
            let dataFile = JSON.parse(fileExits); // objecto
            let idExist = dataFile.filter(d => d.id == id) // Devuelve un Array/ si no existe devuelve un array vacio
            let newElements = dataFile.filter(d => d.id !== id)
            if (idExist.length > 0) {
                doc.writeFileAsync(newElements)
                return newElements
            }
            throw `theres no such id in the repo, but you can see all the products below:
            ${JSON.stringify(dataFile, null, 2)}`
        }
        throw "delete-by-id No se encontro archivo"
    }

    async deleteAll() {
        let fileExits = await doc.readFileAsync(); // tipo de dato string
        if (verifyExistence(fileExits)) {
            this.pr = []
            doc.deleteFileAsync()
            return `The Elements has been deleted`
        }
        throw "Not file has been found"
    }
}

export default  Product