import { Interface } from '../common/Interface'
import { start } from './app'

const httpInterface = new Interface({
    initLambda ({ port }) {
        const config = { port }
        const controllers = this.getControllers()
        start({ config, controllers })
    },
    errorLambda ({ code, message }) {
        const errorMessage = `${code}: ${message}`
        console.error(errorMessage)
        throw new Error (errorMessage)
    }
})

export default httpInterface