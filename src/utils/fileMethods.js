import fs  from "fs"
import db from '../config.js'

class Document {
        constructor(){
                this.type=""
        }
        setVariableName=(type)=>{
                this.type=type
        }
        
        writeFileAsync = async (arr) => await fs.promises.writeFile(
                `.${db.json.path}/${this.type}`,
                JSON.stringify(arr, null, 2),
                "utf-8")
        
        readFileAsync = async () => await fs.promises.readFile(`.${db.json.path}/${this.type}`, "utf-8");
        deleteFileAsync=async()=>await fs.promises.rm(`./${db.json.path}/${this.type}`)
}

export default Document