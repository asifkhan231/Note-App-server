const jwt = require("jsonwebtoken")
const key = process.env.key

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(' ')[1];
            let user = jwt.verify(token, key)
            req.userId = user.id

        }
        else {
            res.status(401).json({ message: 'unauthorize access yes' })
        }
        next()
    }
    catch (error) {
        console.log(error)
        res.status(401).json({ message: 'unauthorize access' })
    }
}

module.exports = auth