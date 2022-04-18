//MiddleWares
const authAdmin =(req,res,next)=>{
    if(req.isAuthenticated()&&req.user.role=="admin") return next()
    res.send("you are not autorize")
}

const auth =(req,res,next)=>{
    if(req.isAuthenticated()) return next()
    res.send("you are not autorize")
}

export {auth,authAdmin}