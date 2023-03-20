import { createUserService, logoutuserservice, refreshtokenservice, loginuserservice } from '../service/user';

export const create = async (req, res) => {
    console.log(req.body)
    const user = req.body.name
    const email=req.body.email
    console.log(user);

    const newUsers = await createUserService(req.body.password,email, user);


    // const hashedpassword = await bcrypt.hash(req.body.password, 10)
    // users.push({ user: user, password: hashedpassword })
    res.status(201).send(newUsers)
    console.log(newUsers)
}

export const login = async (req, res) => {

    const { name, password } = req.body
    console.log(name)

    const serviceRes = await loginuserservice(name, password);

    const { isValid, errorMessage, data } = serviceRes;

    if (isValid) {
        res.status(200).send(data);
    } else {
        res.status(400).send(errorMessage)

    }

}

export const refreshtoken = (req, res) => {
    const {accesstoken,refreshtoken} = req.body
   // if (!refreshTokens.includes(token)) res.status(400).send("Refresh Token Invalid")
    //remove the old refreshToken from the refreshTokens list
    const newrefreshtoken = refreshtokenservice(accesstoken,refreshtoken)
    res.status(201).send(newrefreshtoken)
}

export const logout = (req, res) => {
    const token = req.body.token
    const newlogout = logoutuserservice(token)
    res.status(204).send(newlogout)
}


