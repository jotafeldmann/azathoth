import { removeSensitiveFieldFromObject } from '../../common/security'
import { User } from '../../domains/User'
import { Controller } from '../common/Controller'
import { save } from '../../persistence'

export const create = new Controller((input) => {
    const user = new User(input)
    save({ modelWithData: user })
    return removeSensitiveFieldFromObject(['password'], user)
})