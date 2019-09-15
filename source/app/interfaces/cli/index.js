import { get } from 'cli-parameter-getter'
import { Interface } from '../common/Interface'

const cliInterface = new Interface({
    inputLambda() {
        const { action, domain, ...data } = get()
        return { action, domain, data }
    },
    outputLambda (data) {
        return console.log(`${ JSON.stringify(data) }`)
    },
    initLambda () {
        const inputResponse = this.input()
        const processResponse = this.process(inputResponse)
        return this.output(processResponse)
    },
    errorLambda ({ code, message }) {
        const errorMessage = `${code}: ${message}`
        console.error(errorMessage)
    }
})

export default cliInterface