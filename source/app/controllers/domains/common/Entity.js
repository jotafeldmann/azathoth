import Joi from '@hapi/joi'
import { ExpectedError, EXPECTED_ERROR_CODE_ENUM } from '../../../common/ExpectedError'
import { forEachPropertyOfObject } from '../../../common/Utils'

class EntityError extends ExpectedError {}

class Entity {
    constructor(mapAttribuesToValidations = { attributeName: { value, validation } }) {
        this._ = {
            validations: {}
        }
        forEachPropertyOfObject(mapAttribuesToValidations, attributeName => {
            let attribute = mapAttribuesToValidations[attributeName]
            this.validateValueAgainstValidation({ attributeName, ...attribute })
            this.setAttributesValuesToInstance({ attributeName, ...attribute })
            this._.validations[attributeName] = attribute.validation
        })
    }

    validateValueAgainstValidation ({ attributeName, value, validation }) {
        try {
            return Joi.assert(value, validation)
        } catch ({ message }) {
            throw new EntityError(EXPECTED_ERROR_CODE_ENUM.VALIDATION_ERROR, `\Attribute "${attributeName}\": ${message}`)
        }
    }

    setAttributesValuesToInstance ({ attributeName, value }) {
        this[attributeName] = (value === undefined
            ? null
            : value)
        return {
            [attributeName]: value
        }
    }
} 

Entity.typesValidator = Joi

export {
    Entity
}