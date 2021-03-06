const express = require('express')
const router = express.Router()
const msg = require('../helpers/messages')
const User = require('../models/user')
const authService = require('../services/auth.service')

router.post('/register', async (req, res)=>{
    try {
        const user = new User(req.body)
        let token = await authService.register(user)
        res.status(200).json({"token" : token})
    } catch (error) {
        res.send(error)
    }
})

router.post('/login', async(req, res)=>{
    try {
        const {email, password} = req.body
        if(!email|| !password){
            res.status(400).json(msg.fieldsRequired)
        }
        const token = await authService.login(req.body)
        res.status(token.code).json(token)
    } catch (error) {
        //res.send(error)
        res.status(500).json({'error':error})
    }
})

module.exports = router