import config from '../../config.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;
const model = mongoose.model;

let SALT_WORK_FACTOR = 10;
const databases = config.mongoose.database

class User{
    constructor(schema,tableName){
        // database connection to mongoDB
        mongoose.connect(databases);
        mongoose.connection.on("open",()=>{
         console.log('database connection SUCCESS')
        })
        mongoose.connection.on("error",()=>{
        console.log('database connection ERROR')
        })
        //Note always use the world this for variable declared in the constructor since is require to use the value 
        //thorught the class
        this.userSchema=new Schema(schema)
        this.userSchema.pre('save', function(next) {
            var user = this;
            
            // only hash the password if it has been modified (or is new)
            if (!user.isModified('password')) return next();
        
            // generate a salt
            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if (err) return next(err);
        
                // hash the password using our new salt
                bcrypt.hash(user.password, salt, function(err, hash) {
                    if (err) return next(err);
                    // override the cleartext password with the hashed one
                    user.password = hash;
                    next();
                });
            });
        });
             
        this.userSchema.methods.comparePassword = function(candidatePassword, cb) {
            bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
                if (err) return cb(err);
                cb(null, isMatch);
            });
        };
        this.User=model(tableName,this.userSchema);
    }
    async userAdd(user){
        
        let newUser= new this.User(user)
        
        let usersaved= newUser.save().then(
            function(userSaved){
                
                return userSaved
            }
        ).catch((err)=>{
            console.log(err)
        })
        
        return usersaved
    }
    async validateUser(finduser){
        try{
            
            let usersAuthenticated= await this.User.findOne({ username: finduser.username }, function(err, user) {
                if (err) throw err;
                 
                // test a matching password
                user.comparePassword(finduser.password, function(err, isMatch) {
                    if (err) throw err;
                    
                });
                 
            }).clone().catch(function(err){ console.log(err)});
            
            
            return usersAuthenticated
        }catch(err){
            console.log(err)
            return "theres something worng =("
        }
        
    }
    async getUserById(userID){
        try{
            let userFound = await this.User.findById({_id:userID})
            return userFound
        }catch(err){
            console.log(err)
            return "something went wrong"
        }
    }
    async getByUsername(username){
        try{
            console.log(username)
            let userFound= await this.User.findOne({ username:username}).clone().catch(function(err){ console.log(err)});
            return userFound
        }catch(err){
            console.log(err)
            return "something went wrong"
        }
    }
    
}

export default  User