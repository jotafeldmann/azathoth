import Joi from '@hapi/joi'
import { ExpectedError, EXPECTED_ERROR_CODE_ENUM } from '../../common/ExpectedError'
import { forEachPropertyOfObject } from '../../common/Utils'
import { registerModel } from '../../persistence'

class DomainError extends ExpectedError {
    constructor(message, details) {
        super('DOMAIN_ERROR', message, details)
    }
}

const setAttributesValuesToInstance = ({ instance, attributeName, value }) => {
    instance [attributeName] = (value === undefined
        ? null
        : value)
    return instance
}

const validateValueAgainstValidation = ({ attributeName, value, validation }) => {
    try {
        return Joi.assert(value, validation)
    } catch ({ message }) {
        throw new DomainError(EXPECTED_ERROR_CODE_ENUM.VALIDATION_ERROR, `\Attribute "${attributeName}\": ${message}`)
    }
}

const Domain = function (nameSpace, mapAttribuesToValidations) {
    const model = registerModel(nameSpace, mapAttribuesToValidations)
    const instanceFunction = function (values) {
        const instance = this
        forEachPropertyOfObject(mapAttribuesToValidations, attributeName => {
            let { validation } = mapAttribuesToValidations[attributeName]
            let value = values[attributeName]
            validateValueAgainstValidation({ attributeName, value, validation })
            setAttributesValuesToInstance({ instance, attributeName, value })
        })

        instance.getModel = () => model()

        instance.save = () => {
            this.getModel().create(this)
        }

        return instance
    }

    return instanceFunction
}

Domain.typesValidator = Joi

export {
    Domain
}