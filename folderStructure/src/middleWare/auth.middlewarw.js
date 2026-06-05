function authentication(req,res,next){

    const password = req.query.password;

    if(password=="12345"){
        console.log(`password is correct`)
        next()
    }else{
        console.log(`password is incorrect`)
        res.status(401).send(`Unauthourized`)
    }


}

module.exports = {
    authentication
}