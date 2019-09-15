import Sequelize from 'sequelize'
import { get } from 'cli-parameter-getter'
import cliInterface from './app/interfaces/cli'
import httpInterface from './app/interfaces/http'

const { mode } = get()

class Persistence {
    constructor() {

    }

    init() {

    }
}

const persistenceInstance = new Persistence ()
persistenceInstance.init = () => {
    const sequelize = new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: ':memory:',
    })
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })
}
persistenceInstance.init()

if (mode === 'http') {
    httpInterface.init({ port: 3000, persistenceInstance })
}
else {
    cliInterface.init()
}
