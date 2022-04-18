function convertInstanceToLiteralObject(instance){
    let newObject=JSON.stringify(instance);
    newObject=JSON.parse(instance)
    return newObject
}
export default convertInstanceToLiteralObject