import { User } from '../../domains/User'
import { Controller } from '../common/Controller'

export const create = new Controller((input) => {
    const user = new User(input)
    return user
})