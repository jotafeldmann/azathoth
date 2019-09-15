import { get } from 'cli-parameter-getter'
import cliInterface from './app/interfaces/cli'
import httpInterface from './app/interfaces/http'
import { Persistence } from './app/persistence'

const cliParams = get()
const { mode, ...params } = cliParams

console.log({ cliParams })

Persistence
.init()
.then(() => {
    if (mode === 'http') return httpInterface.init(params)
    return cliInterface.init(params)
})
