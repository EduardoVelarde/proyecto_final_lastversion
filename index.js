import express from 'express'
import router_products from './rooters/product_controller.js'
import router_carts from './rooters/carts_controller.js'
import router_users from './rooters/users_controller.js'
import passport from 'passport'
import session from 'express-session'
import cluster from 'cluster'
import Cpus from 'os'

const modeCluster=process.argv[3]=="CLUSTER"
const numCpus = Cpus.cpus().length
if (modeCluster&&cluster.master) {
    for (let i = 0; i < numCpus; i++) {
        //worker
        cluster.fork()
    }
} else {
    const app = express()
    const PORT = process.env.PORT||8080
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    //session
    app.use(session({
        secret: 'This is a secret',
        resave: true,
        saveUninitialized: true
    }))
    //PASSPORT
    app.use(passport.initialize())
    app.use(passport.session())


    app.use("/products", router_products)
    app.use("/carts", router_carts)
    app.use("/users", router_users)

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

