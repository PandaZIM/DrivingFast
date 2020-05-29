import Sequelize, { Model, Sequelize } from "sequelize"

class Recipient extends Model {
    static init(sequelize){
        super.init(
            {
              nome: Sequelize.STRING,
              numero: Sequelize.STRING,
              complemento: Sequelize.STRING,
              cidade: Sequelize.STRING,
              estado: Sequelize.STRING,
              CEP: Sequelize.STRING
            },
            {
                sequelize
            }
        )
    }
}

export default Recipient