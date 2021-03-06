import { get } from 'cli-parameter-getter'
import cliInterface from './app/interfaces/cli'
import httpInterface from './app/interfaces/http'
import { init } from './app/persistence'

const cliParams = get()
const { mode, ...params } = cliParams

console.log({ cliParams })

const interfaceInstance = (
    mode === 'http'
    ? httpInterface
    : cliInterface)

init()
.then(() => interfaceInstance.init(params))
.catch(err => interfaceInstance.errorFlow(err))
