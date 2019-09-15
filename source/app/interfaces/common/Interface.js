import { ExpectedError, EXPECTED_ERROR_CODE_ENUM} from '../../common/ExpectedError'
import { Controllers } from '../../controllers'

class InterfaceError extends ExpectedError {}

const getControllerByDomain = ({ domain }) => {
    if (!domain) throw new InterfaceError (
        EXPECTED_ERROR_CODE_ENUM.INPUT_ERROR,
        'Domain is empty'
        )
    const controller = Controllers[domain]
    if (!controller) throw new InterfaceError (
        EXPECTED_ERROR_CODE_ENUM.NOT_FOUND,
        `Domain: ${domain} not found`
        )
    return controller
}

const getActionByController = ({ controller, action }) => {
    if (!action) throw new InterfaceError (
        EXPECTED_ERROR_CODE_ENUM.INPUT_ERROR,
        'Action is empty'
        )
    const selectedAction = controller[action]
    if (!selectedAction) throw new InterfaceError (
        EXPECTED_ERROR_CODE_ENUM.NOT_FOUND,
        `Action: ${action} not found`
        )
    return selectedAction
}

export class Interface {
    constructor ({ inputLambda, outputLambda, initLambda, errorLambda } = {}) {
        this.inputLambda = inputLambda
        this.outputLambda = outputLambda
        this.initLambda = initLambda
        this.errorLambda = errorLambda
    }

    init (params) {
        try {
            return this.initLambda(params)
        } catch (error) {
            if (error instanceof InterfaceError) {
                return this.errorFlow(error)
            }
            throw new Error(error)
        }
    }

    input (rawData) {
        return this.inputLambda(rawData)
    }

    process ({ action, domain, data } = {}) {
        const controller = getControllerByDomain({ domain })
        const selectedAction = getActionByController({ controller, action })
        return selectedAction(data)
    }

    output ({ error, data }) {
        if (error) return this.errorFlow(error)
        return this.outputLambda(data)
    }

    errorFlow (error) {
        const { message, code } = error
        this.errorLambda({ message, code, details: error })
    }

    getControllers () {
        return Controllers
    }
}