import Sequelize from 'sequelize'

import User from '../app/models/Users'

const models = [User]

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize()

        models.map(model => model.init(this.connection))
    }
}

export default new Database()