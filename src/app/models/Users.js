import Sequelize, { Model, Sequelize } from "sequelize"
import bcrypt from 'bcrypt'

//Responsável pela criação do usuario com as respectivas informações

class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize
            }
        )

        this.addHook('beforeSave', async (user) =>{
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })

        return this
    }
}

export default User