import { errorResponse, successResponse } from './response'
import { ExpectedError } from '../../common/ExpectedError'

export const Controller = function controller (lambda) {
    return (parameters) =>  { 
        try {
            const lambdaResult = lambda(parameters)
            return successResponse({ data: lambdaResult })
        } catch (lambdaError) {
            if (lambdaError instanceof ExpectedError) {
                return errorResponse(lambdaError)
            }
            throw Error(lambdaError)
        }
    }
}