const express = require("express")
const { authmiddleware } = require("../middleware")
const { Account } = require("../db")
const { default: mongoose } = require("mongoose")
const router = express.Router()

router.get("/balance",authmiddleware,async function (req,res){
    const account = await Account.findOne({
        userID: req.userID
    })
    res.status(200).json({ 
        balance: account.balance
    })
})

router.post("/transfer",authmiddleware,async function(req,res){
    const session = await mongoose.startSession()

    session.startTransaction()
    const {amount,to} = req.body

    const account = await Account.findOne({userID: req.userID}).session(session)

    if(!account || account.balance<amount){
        await session.abortTransaction()
        res.status(400).json({
            msg: "Insufficient Funds"
        })
    }
    const toAccount = await Account.findOne({userID: to}).session(session)

    if(!toAccount){
        await session.abortTransaction()
        res.status(400).json({
            msg: "Invalid Account"
        })
    }

    await Account.updateOne({userID: req.userID},{$inc: {balance: -amount}}).session(session)
    await Account.updateOne({userID: to},{$inc: {balance: amount}}).session(session)

    await session.commitTransaction()
    res.status(200).json({
        msg:"Money transfered"
    })
})

module.exports = router