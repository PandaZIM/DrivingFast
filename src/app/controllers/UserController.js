import User from '../models/Users'

//responsável pela verificação se o usuario existe e retornar usuario

class UserController {
    async store(req, res) {
        
        const userExists = await User.findOne({ where: { email: req.body.email}})

        if(userExists){
            return res.status(400).json({ error: 'User already exists'})
        }

        const { 
            id,  
            name,   
            email, 
            provider} = await user.create(req.body)

        return res.json(
        {
            id,
            name,
            email,
            provider
        })
    }
}

export default new UserController()