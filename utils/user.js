import jsonwebtoken from "jsonwebtoken"
const jwt = jsonwebtoken

export function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
}
    



let refreshTokens = []
export function generateRefreshToken(user) {
    const refreshToken =
           jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "20m" })
    refreshTokens.push(refreshToken)
    return refreshToken
}   

//export { generateAccessToken,generateRefreshToken};

    