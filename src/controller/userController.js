const express = require("express")
const user = require("../models/user")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const key = process.env.key

const signup = async (req, res) => {
    //check user exist
    //encrypt password
    //create user
    //generate token

    const { username, password, email } = req.body;
    try {
        const existuser = await user.findOne({ email: email })
        if (existuser) {
            return res.status(401).json({ message: 'user already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await user.create({
            username: username,
            email: email,
            password: hashedPassword
        })

        const token = jwt.sign({ email: result.email, id: result.id }, key)
        res.status(201).json({ user: result, token: token })
    } catch (error) {
        console.log(error)
    }


}

const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existuser = await user.findOne({ email: email })
        if (!existuser) {
            return res.status(404).json({ message: 'user not found' })
        }

        const matchPassword = await bcrypt.compare(password, existuser.password)

        if (!matchPassword) {
            return res.status(404).json({ message: "credantial not match" })
        }

        const token = jwt.sign({ email: existuser.email, id: existuser.id }, key)
        res.status(200).json({ user: existuser, token: token })

    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { signup, signin }