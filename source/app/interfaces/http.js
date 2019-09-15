import express from 'express'
import { Interface } from './common/Interface'
import { forEachPropertyOfObject } from '../common/Utils'

const app = express()

const init = ({ port }) => console.log(`Listening on ${port}`)

const mapActionsToVerbs = {
    create: 'post',
    retrieve: 'get',
    update: 'put',
    delete: 'delete',
}

const mapDomainsToHttpRoutes = (domains, httpController) =>
    forEachPropertyOfObject(domains, (domainName, actions ) => {
        forEachPropertyOfObject(actions, (actionName, actionLambda) => {
            app[mapActionsToVerbs[actionName]](`/${domainName}`, httpController(actionLambda))
        })
    })

const httpController = (lambda) => (httpRequistionInstance, httpResponseInstance) => {
    const { body, query } = httpRequistionInstance
    const dataToLambda = { ...body, ...query }
    const { data, error } = lambda(dataToLambda)
    if (error) return httpResponseInstance.status(500).send({ error })
    return httpResponseInstance.status(200).send(data)
}

const httpInterface = new Interface({
    initLambda ({ port }) {
        app.listen({ port }, () => init({ port }))
        app.use(express.json())
        mapDomainsToHttpRoutes(this.getControllers(), httpController)
    },
    errorLambda ({ code, message }) {
        const errorMessage = `${code}: ${message}`
        console.error(errorMessage)
        throw new Error (errorMessage)
    }
})

export default httpInterface