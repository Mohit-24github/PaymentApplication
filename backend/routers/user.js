const express = require("express")
const router = express.Router()
const {JWT_SECRET} = require("../config")
const zod = require("zod")
const {User, Account}= require("../db")
const jwt = require("jsonwebtoken")
const { authmiddleware } = require("../middleware")

const signup = zod.object({
    userName:zod.string().email(),
    firstName:zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup",async function (req,res){
    const {success} = signup.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Invalid Input"
        })
    }
    const userExists = await User.findOne({
        userName:req.body.userName
    })
    if(userExists){
        return res.status(411).json({
            msg: "Email already used"
        })
    }

    const user = await User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })
    const UserID = user._id

    await Account.create({
        userID: UserID,
        balance: 1+Math.random()*10000
    })

    const token = jwt.sign({
        userID: UserID
    },JWT_SECRET)
    res.status(200).json({
        msg:"User greated succesuffly",
        token: token
    })
})

const signin = zod.object({
    userName:zod.string().email(),
    password: zod.string()
})

router.post("/signin",async function (req,res) {
    const success = signin.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Invalid Input"
        })
    }
    const user =await User.findOne({
        userName: req.body.userName,
        password: req.body.password
    })

    if (user){
        const UserID = (user._id)
        const token = jwt.sign({
            userID: UserID
        },JWT_SECRET)
        res.status(200).json({
            token: token
        })
    }
    else{
        res.status(411).json({
            msg: "Invalid Auth"
        })
    }
})

const updateUser = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})

router.put("/",authmiddleware,async function (req,res){
    const {success} = updateUser.safeParse(req.body)
    if (!success){
        res.status(411).json({
            msg: "Wrong Input"
        })
        return
    }
    await User.updateOne({
        _id: req.UserId
    },req.body)
    res.status(200).json({
        msg: "Update completed"
    })
})

const findUser = zod.object({
    firstName:zod.string(),
    lastName: zod.string()
})

router.get("/bulk",async function (req,res){
    const filter = req.query.filter || ""

    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user: users.map(user =>({
            userName:user.userName,
            firstName:user.firstName,
            lastName:user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router