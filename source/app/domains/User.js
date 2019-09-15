import { Domain } from './common/Domain'

const model = {
    login: {
        validation: Domain
            .typesValidator
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    },
    password: {
        validation: Domain
            .typesValidator
            .string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/)
            .required(),
    },
}

export const User = new Domain('User', model)
