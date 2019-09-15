import express from 'express'
import helmet from 'helmet'
import { forEachPropertyOfObject } from '../../common/Utils'
import { ACTIONS_TO_HTTP, HTTP_STATUS_CODE_ENUM } from './constants'
import { errorHandler } from './errorHandler'

const successStart = ({ port }) => console.log(`Listening on ${port}`)

const httpController = ({ lambda, successStatusCode, errorStatusCode  }) => (httpRequistionInstance, httpResponseInstance) => {
    const { body, query } = httpRequistionInstance
    const dataToLambda = { ...body, ...query }
    const { data, error } = lambda(dataToLambda)
    if (error) return errorHandler({ httpResponseInstance, error, defaultStatusCode: errorStatusCode })
    return httpResponseInstance.status(successStatusCode).send(data)
}

const mapDomainToRoute = ({ app, controllerName, verbName, lambda, httpController }) => {
    const { verb, statusCode } = ACTIONS_TO_HTTP[verbName]
    const url = `/${controllerName}`
    const controller = httpController({
        lambda,
        successStatusCode: statusCode,
        errorStatusCode: HTTP_STATUS_CODE_ENUM.INTERNAL_SERVER_ERROR,
    })
    app[verb](url, controller)
}

const mapDomainsToHttpRoutes = ({ app, controllers, httpController }) =>
    forEachPropertyOfObject(controllers, (controllerName, actions) => 
        forEachPropertyOfObject(actions, (verbName, lambda) => mapDomainToRoute({
            app, controllerName, verbName, lambda, httpController
        })))

export const start = ({ config, controllers }) => {
    const app = express()
    app.listen(config, () => successStart(config))
    app.use(express.json())
    app.use(helmet())
    mapDomainsToHttpRoutes({ app, controllers, httpController })
}