import { Domain } from './common/Domain'

export class User extends Domain {
    constructor({ login = '', password = '' }) {
        super({
            login: {
                value: login,
                validation: Domain
                    .typesValidator
                    .string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
            },
            password: {
                value: password,
                validation: Domain
                    .typesValidator
                    .string()
                    .pattern(/^[a-zA-Z0-9]{3,30}$/)
                    .required(),
            },
        })
    }
}