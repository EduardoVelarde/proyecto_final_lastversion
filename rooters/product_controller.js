import express from 'express'
import {productDao,cartsDao} from '../src/daos/index.js'
import {auth,authAdmin} from '../src/utils/middlewares.js'
const {Router}=express

const router=new Router()

router.get("/getAll",auth,async(req,res)=>{
    const product=await productDao.getAll()
    res.send({mesg:'SUCCESS',data:product})
})

router.get("/getProduct",async(req,res)=>{
    let id=req.query.id
    const product=await productDao.getById(id)
    res.send({mesg:'SUCCESS',data:product})
})

router.post("/saveProduct",authAdmin,async(req,res)=>{
    const product=await productDao.save(req.body)
    res.send({mesg:'SUCCESS',data:product})
})
router.put("/updateProduct",authAdmin,async(req,res)=>{
    let {id,name,price,description,url,stock}=req.body
    const product=await productDao.updateById(id,name,price,description,url,stock)
    res.send({mesg:'SUCCESS',data:product})
})
router.delete("/deleteProduct",authAdmin,async(req,res)=>{
    let id=req.query.id
    const product=await productDao.deleteByID(id)
    res.send({mesg:'SUCCESS',data:product})
})
router.delete("/deleteAllProduct",authAdmin,async(req,res)=>{
    const product=await productDao.deleteAll()
    res.send({mesg:'SUCCESS',data:product})
})

export default router