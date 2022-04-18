import {createTransport} from 'nodemailer'


const sendEmail=async(email,user)=>{
    /* let {asunto,contenido} = req.body; */
    console.log(email)
    if(!email){
        return "please provide an email"
    }

    const transporter = new createTransport({
        service:'gmail',
        port: 587,
        auth: {
            user: email,
            pass: 'fvzwatljkyaspibz',
        }
    })
    const emailOptions = {
        from: 'Servidor node.js',
        to: email,
        subject: 'New user registered',
        html: `<h1 style="color:cyan;">A user has registered: <span style="color:green;">${user.username}!!!!</span> </h1>`
    }

    try{
        let info = await transporter.sendMail(emailOptions)
        return info
    }catch(err){
        console.log(err)
        return "something went wrong sending email"
    }
}

const sendEmailProduct=async(email,user)=>{
    /* let {asunto,contenido} = req.body; */
    console.log(email)
    if(!email){
        return "please provide an email"
    }

    const transporter = new createTransport({
        service:'gmail',
        port: 587,
        auth: {
            user: email,
            pass: 'fvzwatljkyaspibz',
        }
    })
    const emailOptions = {
        from: 'Servidor node.js',
        to: email,
        subject: `New order from ${user}`,
        html: `<h1 style="color:cyan;">${user} has complete his purchase please look at his cart </h1>`
    }

    try{
        let info = await transporter.sendMail(emailOptions)
        return info
    }catch(err){
        console.log(err)
        return "something went wrong sending email"
    }
}


export {sendEmail,sendEmailProduct}