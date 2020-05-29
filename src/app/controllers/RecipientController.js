import Recipient from '../models/Recipients'

class RecipientController{
    async store(req, res) {
        const { nome,
                numero, 
                complemento,
                cidade,
                estado,
                CEP} = await Recipient.create(req.body)

        return res.json({
                nome,
                numero, 
                complemento,
                cidade,
                estado,
                CEP
        })
    }
}

export default new RecipientController()