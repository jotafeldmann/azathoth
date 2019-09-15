import { User } from './domains/User'
import { Controller } from './common/Controller'

export const createUser = 
    new Controller(({ login }) => 
        new User({ login }))