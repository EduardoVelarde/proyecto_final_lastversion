import Strategy from 'passport-local'
const LocalStrategy= Strategy.Strategy
import {productDao,cartsDao,usersDao} from '../daos/index.js'
import passport from 'passport'
import {sendEmail} from './nodemailer_utils.js'


//Sign up (darse de alta)
passport.use('local-signup',new LocalStrategy({
    usernameField:'username',
    passwordField:'password',
    passReqToCallback:true
},async(req,username,password,done)=>{
    //Validar 
    let user = await usersDao.getByUsername(username)
    if(!user){
        let userNew = await usersDao.userAdd({
            username,
            password,
            name:req.body.name,
            age:req.body.age,
            avatar:req.body.avatar
        })
        await cartsDao.createCart(userNew);
        // enviar iinformación a ser serializada
        console.log(sendEmail(req.query.email,userNew))
        
        return done(null,userNew)
    }
    // no hubo exito en la peticipn
    return done(null,false);
}))

//SIGN IN (logearse)
passport.use("local-login",new LocalStrategy(async(username,password,done)=>{

    let user = await usersDao.getByUsername(username)
    if(user){
        await cartsDao.createCart(user);
        done(null,user);
        return
    }
        done(null,false);
        return
    
}))

//Serealización
passport.serializeUser(async(user,done)=>{
    done(null,user._id);
})

//Deseralización

passport.deserializeUser(async(id,done)=>{
    let user = await usersDao.getUserById(id)
    done(null,user);
})

export default passport