const {JWT_SECRET}= require("./config")
const jwt = require("jsonwebtoken")

const authmiddleware = function (req,res,next){
    const header = req.headers.authorization

    if (!header || !header.startsWith('Bearer ')){
        return res.status(403).json({
            msg: "Error!!!"
        })
    }

    const token = header.split(" ")[1]

    
    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        userid = decoded.userID
        req.userID = userid
        next()
    }
    catch(err){
        return res.status(403).json({
            msg: "Error!"
        })
    }
}

module.exports = {authmiddleware}