import express from 'express'
import { Interface } from './common/Interface'
import { forEachPropertyOfObject } from '../common/Utils'

const init = ({ port }) => console.log(`Listening on ${port}`)

const mapActionsToHttp = {
    create: { verb: 'post', statusCode: 201, },
    retrieve: { verb: 'get', statusCode: 200, },
    update: { verb: 'put', statusCode: 200, },
    delete: { verb: 'delete', statusCode: 204, },
}

const errorHandler = ({ httpResponseInstance, error, defaultStatusCode }) => {
    return httpResponseInstance.status(defaultStatusCode).send({ error })
}

const httpController = ({ lambda, successStatusCode, errorStatusCode  }) => (httpRequistionInstance, httpResponseInstance) => {
    const { body, query } = httpRequistionInstance
    const dataToLambda = { ...body, ...query }
    const { data, error } = lambda(dataToLambda)
    if (error) return errorHandler({ httpResponseInstance, error, defaultStatusCode: errorStatusCode })
    return httpResponseInstance.status(successStatusCode).send(data)
}

const mapDomainToRoute = ({ app, domainName, actionName, lambda, mapActionsToHttp, httpController }) => {
    const { verb, statusCode } = mapActionsToHttp[actionName]
    const url = `/${domainName}`
    const controller = httpController({
        lambda,
        successStatusCode: statusCode,
        errorStatusCode: 500,
    })
    app[verb](url, controller)
}

const mapDomainsToHttpRoutes = ({ app, domains, httpController }) =>
    forEachPropertyOfObject(domains, (domainName, actions) => 
        forEachPropertyOfObject(actions, (actionName, lambda) => mapDomainToRoute({
            app, domainName, actionName, lambda, mapActionsToHttp, httpController
        })))

const httpInterface = new Interface({
    initLambda ({ port }) {
        const app = express()
        app.listen({ port }, () => init({ port }))
        app.use(express.json())
        mapDomainsToHttpRoutes({ app, domains: this.getControllers(), httpController, mapActionsToHttp })
    },
    errorLambda ({ code, message }) {
        const errorMessage = `${code}: ${message}`
        console.error(errorMessage)
        throw new Error (errorMessage)
    }
})

export default httpInterface