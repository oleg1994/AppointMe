const jwt = require('jsonwebtoken');
const jwtSecret = 'SecretJwt'

function auth(req, res, next) {
    const token = req.header('x-auth-token')
    //Check for token
    if(!token){
        res.send({error:'User unauthorized!'})
    }
    try{
        // Verify its the right token
        const decodedToken = jwt.verify(token, jwtSecret);
        // Add user from payload(jwt)
        req.user = decoded;
        next();
    } catch(e){
        res.send({ error:'incorrect or corrupted request to the server'})
    }
}


module.exports = auth;