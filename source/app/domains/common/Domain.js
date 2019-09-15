import Joi from '@hapi/joi'
import { ExpectedError, EXPECTED_ERROR_CODE_ENUM } from '../../common/ExpectedError'
import { forEachPropertyOfObject } from '../../common/Utils'

class DomainError extends ExpectedError {}

class Domain {
    constructor(mapAttribuesToValidations = { attributeName: { value, validation } }) {
        forEachPropertyOfObject(mapAttribuesToValidations, attributeName => {
            let attribute = mapAttribuesToValidations[attributeName]
            this.validateValueAgainstValidation({ attributeName, ...attribute })
            this.setAttributesValuesToInstance({ attributeName, ...attribute })
        })
    }

    validateValueAgainstValidation ({ attributeName, value, validation }) {
        try {
            return Joi.assert(value, validation)
        } catch ({ message }) {
            throw new DomainError(EXPECTED_ERROR_CODE_ENUM.VALIDATION_ERROR, `\Attribute "${attributeName}\": ${message}`)
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

Domain.typesValidator = Joi

export {
    Domain
}