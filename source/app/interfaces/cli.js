import { get } from 'cli-parameter-getter'
import { Interface } from './common/Interface'

const cliInterface = new Interface({
    inputLambda() {
        const { action, domain, ...data } = get()
        return { action, domain, data}
    },
    outputLambda ({ data }) {
        return console.log(`${ JSON.stringify(data) }`)
    },
    initLambda () {
        this.inputLambda()
    },
    errorLambda ({ code, message }) {
        const errorMessage = `${code}: ${message}`
        console.error(errorMessage)
        throw new Error (errorMessage)
    }
})

export default cliInterface