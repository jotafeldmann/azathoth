import { User } from '../../domains/User'
import { Controller } from '../common/Controller'

export const create = 
    new Controller(({ login }) => 
        new User({ login }))