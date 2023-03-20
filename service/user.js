import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from '../utils/user'
import NewUser from "../model/user";
import dotenv from "dotenv";
//import jsonwebtoken  from "jsonwebtoken";

//const jwt = jsonwebtoken
dotenv.config()


const users = [];
export const createUserService = async (password, email, user) => {
    const hashedpassword = await bcrypt.hash(password, 10)
    const p = new NewUser({ email: email, user: user, password: hashedpassword })
    console.log(p)
    const item = p.save()
    return item;



}


export const loginuserservice = async (name, password) => {

    const loginuser = await NewUser.findOne({ user: name })
    console.log(loginuser)
    let result = {} // isValid - true, false , errorMessage, data
    if (loginuser == null) {
        result.isValid = false;
        result.errorMessage = "User does not existtttttttt!";
        return result;
    }
    const checkpass = await bcrypt.compare(password, loginuser.password)
    if (checkpass) {

        const accessToken = generateAccessToken({ loginuser: name })
        const refreshToken = generateRefreshToken({ loginuser: name })
        result.data = ({ accessToken: accessToken, refreshToken: refreshToken });
        console.log(result.data)
        result.isValid = true
        return result;

    }
    else {
        result.isValid = false
        result.errorMessage = "password incorrect"
        return result;

    }
}

export const refreshtokenservice = (token) => {
    let resulttoken = {} // isValid - true, false , errorMessage, data
    if (!refreshToken.includes(token)) {
        resulttoken.isValid = false;
        resulttoken.errorMessage = "refreshtokeninvalid";
        return result;
    }
    const refreshTokens = refreshTokens.filter((c) => c != token)
    const accessToken = generateAccessToken({ user: req.body.name })
    const refreshToken = generateRefreshToken({ user: req.body.name })
    resulttoken.data = ({ accessToken: accessToken, refreshToken: refreshToken })
    return resulttoken;

}

export const logoutuserservice = (token) => {
    refreshTokens = refreshTokens.filter((c) => c != token)
    return refreshTokens;
}
