import Sequelize, { DataTypes } from 'sequelize'
import { ExpectedError } from '../common/ExpectedError'
import { forEachPropertyOfObject, fromListGenerateMap } from '../common/Utils'

class PersistenceError extends ExpectedError {
    constructor(message, details){
        super('PERSISTENCE_ERROR', message, details)
    }
}

let initialized = false
let persistenceInstance = {}
const mapOfModelsToInitialize = {}
const isModuleInitialized = () => initialized

const models = {}

export const testConnection = () => persistenceInstance
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
        console.log('APP: persistence init')
    })
    .catch(err => new PersistenceError(
        'Unable to connect to the database',
        err,
    ))

const initializeModels = () =>
    forEachPropertyOfObject(mapOfModelsToInitialize, ( modelName, model ) => {
        models[modelName] = persistenceInstance.define(modelName, model)
    })

const initializePersistence = async () => {
    await persistenceInstance.queryInterface.createTable('Users', {
        id: {
          allowNull: true,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        login: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    })
    await persistenceInstance.sync({ force:true })
}

export const init = () => {
    if (isModuleInitialized()) return false
    persistenceInstance = new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: ':memory:',
    })
    
    initializePersistence()
    initializeModels()
    initialized = true
    return testConnection()
}

export const save = ({ modelWithData, howToSave }) => {
    if (!isModuleInitialized()) throw new PersistenceError('Persistence not initialized')
    console.log(modelWithData)
}

const getSequelizeTypeFromJoiValidation = (param) => {
    const { validation } = param
    const { type = null } = validation
    if (type === 'string') return DataTypes.STRING
}

const convertJoiToSequelize = (fieldName, fieldValidations) => {
    const type = getSequelizeTypeFromJoiValidation(fieldValidations)
    return { [fieldName]: type }
}

const mapJoiValidationsToSequelizeDefinitions = (joiValidations) =>
    forEachPropertyOfObject(joiValidations, (fieldName, fieldValidations) =>
        convertJoiToSequelize(fieldName, fieldValidations))

export const registerModel = function (nameSpace, mapAttribuesToValidations) {
    const validations = mapJoiValidationsToSequelizeDefinitions(mapAttribuesToValidations)
    const validationsObject = fromListGenerateMap(validations)
    models[nameSpace] = {}
    mapOfModelsToInitialize[nameSpace] = models[nameSpace]
    const model = () => models[nameSpace]
    return model
}
