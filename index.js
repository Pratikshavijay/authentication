import dotenv from "dotenv"
import express from "express"
import router from "./routes/user.js";
import { mongoconnection } from "./config/db.js";
//mongoose.Promise = global.Promise;
mongoconnection(); 

dotenv.config()

const app = express()
app.use(express.json())

app.use(router)

const port = process.env.TOKEN_SERVER_PORT

app.listen(port, () => {
     console.log("server is on now ")
})

