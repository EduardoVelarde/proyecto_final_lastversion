import express from 'express'
import {productDao,cartsDao,usersDao} from '../src/daos/index.js'
import configPassport from '../src/utils/passport.js'
import passport from 'passport'
import {auth,authAdmin} from '../src/utils/middlewares.js'
const {Router}=express

const router=new Router()


router.post('/register',async(req,res)=>{
    let username = req.query.username || ''
    const password = req.query.password || ''
    let age= req.query.age || 0
    let name = req.query.name || ''
    //delete spaces in the username 
    username = username.replace(/[!@#$%^&*]/g,"")
    let newUser = {
        username,
        password,
        name,
        age
    }
     let userResult= await usersDao.userAdd(newUser)
    
    res.status(201).json({msg:'success',data:userResult})
})
router.get('/registro',(req,res)=>{
    res.send('user registed!!!')
})
router.post('/signup',passport.authenticate('local-signup',{
    successRedirect: '/SUCESS(templateInProgress)',
    failureRedirect: '/PleaseLogin(templateInProgress)',
    failureFlash : true
}));

router.post('/signin',passport.authenticate('local-login',{
    successRedirect: '/SUCESSLogin(templateInProgress)',
    failureRedirect: '/UserIsNotRegistered(templateInProgress)',
    failureFlash : true
}));
router.get('/logout',(req,res)=>{
    cartsDao.
    req.logOut();
    res.send('your session has ended')
})


export default router