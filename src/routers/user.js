const express = require('express')
const User = require('../models/User')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('passport');

const router = express.Router()
const key = process.env.JWT_KEY;

router.get('/user', async (req, res) => {
    // Create a new user
    try {
        users = await User.getAll()
        res.send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/user/:userId', async (req, res) => {
    // Create a new user
    try {
        user = await User.findById(req.param.userId)
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/user', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/user', async(req, res) => {
    try{
     const { id } = req.body
     User.findByIdAndDelete(id,  (err,id) => {
        res.json({success: true, message: "User deleted.", id})
      })
 } 
 catch (error) {
     res.status(400).send(error)
 }
 })

 router.get('/profile', (req, res, next) => {
    //We'll just send back the user details and the token
    res.json({
      message : 'You made it to the secure route',
      user : req.user,
      token : req.query.secret_token
    })
  });

module.exports = router