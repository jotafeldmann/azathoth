import { Entity } from './common/Entity'

export class User extends Entity {
    constructor({ login = '' }) {
        super({
            login: {
                value: login,
                validation: Entity.typesValidator
                .string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            }
        })
    }
}