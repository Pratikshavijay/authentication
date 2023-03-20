import Joi from 'joi'
export function logginmiddleware(req, res, next) {
    if (!req.body.name && !req.body.password) {
        res.status(400).send("login crenditials are required")
    }
    else if (!req.body.name) {
        res.status(400).send(" name fiels is required")
    }
    else if (!req.body.password) {
        res.status(400).send("password is required")
    }

    else {
        next();
    }
};


export const createSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(4).max(9).required(),
    password: Joi.string().required(),
})

export const createmiddleware = (req, res, next) => {

    const result = createSchema.validate(req.body);
    console.log("result is ...........................", result)
    if (result.error) {
        res.json({
            success: 0,
             message:result.error.toString()
        })
    }
    else {
        next()

    }
}


