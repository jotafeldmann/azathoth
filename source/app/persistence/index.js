import Sequelize from 'sequelize'

export const Persistence = {
    initialized: false,
}


Persistence.init = () => {
    if (Persistence.initialized) return false
    const sequelize = new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: ':memory:',
    })
    return sequelize
        .authenticate()
        .then(() => {
            Persistence. initialized = true
            console.log('Connection has been established successfully.')
            console.log('APP: persistence init')
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })
}