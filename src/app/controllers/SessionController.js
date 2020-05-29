import jwt from 'jsonwebtoken'

import User from '../models/Users'
import { JsonWebTokenError } from 'jsonwebtoken'

class SessionController{
    async store(req, res){
        const { email, password } = req.body

        const user = await User.findOne({ where: { email }})

        if (!user){
            return res.status(401).json({ error: 'User not found'})
        }

        const { id, name } = user

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, )
        }) 
    }
}

export default new SessionController()