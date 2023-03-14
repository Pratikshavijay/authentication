import bcrypt from "bcrypt";

import { generateAccessToken } from '../utils/check'
import { generateRefreshToken }from '../utils/check'



const users = []
exports.create = async (req, res) => {
    console.log(req.body)
    const user = req.body.name
    console.log(user)
    const hashedpassword = await bcrypt.hash(req.body.password, 10)
    users.push({ user: user, password: hashedpassword })
    res.status(201).send(users)
    console.log(users)
}


exports.login = async (req, res) => {
    console.log(req.body.name)
    const user = users.find((c) => c.user == req.body.name)


    if (user == null) res.status(404).send("User does not existtttttttt!")         //check to see if the user exists in the list of registered users

    if (await bcrypt.compare(req.body.password, user.password)) {

        const accessToken = generateAccessToken({ user: req.body.name })
        const refreshToken = generateRefreshToken({ user: req.body.name })
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
    }
    else {
        res.status(401).send("Password Incorrect!")
    }
}



exports.refreshtoken = (req, res) => {
    if (!refreshTokens.includes(req.body.token)) res.status(400).send("Refresh Token Invalid")
    refreshTokens = refreshTokens.filter((c) => c != req.body.token)
    //remove the old refreshToken from the refreshTokens list
    const accessToken = generateAccessToken({ user: req.body.name })
    const refreshToken = generateRefreshToken({ user: req.body.name })
    //generate new accessToken and refreshTokens
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
}






exports.logout = (req, res) => { 
    refreshTokens = refreshTokens.filter((c) => c != req.body.token)
    //remove the old refreshToken from the refreshTokens list
    res.status(204).send("Logged out!")
}


