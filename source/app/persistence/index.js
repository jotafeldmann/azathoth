import Sequelize from 'sequelize'
import { ExpectedError, EXPECTED_ERROR_CODE_ENUM} from '../common/ExpectedError'

class PersistenceError extends ExpectedError {
    constructor(message, details){
        super('PERSISTENCE_ERROR', message, details)
    }
}

let initialized = false

const isModuleInitialized = () => initialized

export const init = () => {
    if (isModuleInitialized()) return false
    const sequelize = new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: ':memory:',
    })
    return sequelize
        .authenticate()
        .then(() => {
            initialized = true
            console.log('Connection has been established successfully.')
            console.log('APP: persistence init')
        })
        .catch(err => new PersistenceError(
            'Unable to connect to the database',
            err,
        ))
}

export const save = ({ modelWithData, howToSave }) => {
    if (!isModuleInitialized()) throw new PersistenceError('Persistence not initialized')
    console.log(modelWithData)
}
