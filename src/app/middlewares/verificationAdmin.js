import RecipientController from '../controllers/RecipientController'

export default (req, res, next) => {
    const user = await findOne({ where: { role }})

    if (!user){
        return res.status(401).json({ error: "Only admins can register recipients"})
    }

    return next()
} 