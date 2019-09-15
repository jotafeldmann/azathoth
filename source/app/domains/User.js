import { Domain } from './common/Domain'

export class User extends Domain {
    constructor({ login = '' }) {
        super({
            login: {
                value: login,
                validation: Domain.typesValidator
                .string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            }
        })
    }
}